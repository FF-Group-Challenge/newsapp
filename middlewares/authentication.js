const jwt = require('jsonwebtoken')
const { User } = require('../models')
const secret = process.env.SECRET

const authentication = (req, res, next) => {
  const { access_token } = req.headers

  if(!access_token) {
    next({name: 'ACCESS_DENIED'})
  } else {
    const decoded = jwt.verify(access_token, secret)
    req.userData = decoded
    User.findByPk(decoded.id)
    .then(user => {
      if(user) {
        next()
      } else {
        next({name: 'AUTHENTICATION_FAILED'})
      }
    })
    .catch(err => {
      next(err)
    })
  }

}

module.exports = authentication