const bcrypt = require('bcryptjs')

const { User } = require("../models/index")
const { generateToken } = require('../helpers/generateToken')

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
    res.send('google-login')
  }


  //-------------NEWS CONTROLLER------------

  static newsSpace(req, res, next) {
    res.send('news-space')
  }

  static newsGlobal(req, res, next) {
    res.send('news-global')
  }

  static newsIndonesia(req, res, next) {
    res.send('news-indonesia')
  }

}

module.exports = { Controller }