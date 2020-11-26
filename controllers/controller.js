const bcrypt = require('bcryptjs')

const { User } = require("../models/index")
const { generateToken } = require('../helpers/generateToken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const axios = require('axios');

class Controller {

  static register(req, res, next) {
    const userPayload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    User.findOne({
      where: {
        email: userPayload.email
      }
    })
    .then(data => {
      if(data) {
        next({name: "EMAIL_USED"})
      } else {
        return User.create(userPayload)
      }
    })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static login(req, res, next) {
    const loginPayload = {
      email: req.body.email,
      password: req.body.password
    }

    User.findOne({
      where: {
        email: loginPayload.email
      }
    })
    .then(user => {
      if(!user || !bcrypt.compareSync(loginPayload.password, user.password)) {
        next({name: "INVALID_EMAIL_PASSWORD"})
      } else {
        const access_token = generateToken(user)
        res.status(200).json({access_token})
      }
    })
    .catch(err => {
      next(err)
    })
  }

  static googleLogin(req, res, next) {
    let payload
    //nama token google di jquery ?
    const token = req.body.googleToken
    client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    .then(ticket => {
      payload = ticket.getPayload()
      return User.findOne({
        where: {
          email: payload.email
        }
      })
    })
    .then(user => {
      if(user){
        return user
      } else {
        return User.create({
          name: payload.name,
          email: payload.email,
          password: process.env.GOOGLE_PASSWORD
        })
      }
    })
    .then(user => {
      const access_token = generateToken(user)
      res.status(200).json({access_token})
    })
    .catch(err => {
      next(err)
    })
  }


  //-------------NEWS CONTROLLER------------

  static newsSpace(req, res, next) {
    axios({
      url: `https://www.spaceflightnewsapi.net/api/v2/articles`,
      method: "GET"
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(next => {
      next(err)
    })
  }

  static newsGlobal(req, res, next) {
    axios({
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`,
      method: "GET"
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(next => {
      next(err)
    })
  }

  static newsIndonesia(req, res, next) {
    axios({
      url: `https://www.news.developeridn.com/nasional`,
      method: "GET"
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(next => {
      next(err)
    })
  }

}

module.exports = { Controller }