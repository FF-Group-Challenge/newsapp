class Controller {

  static register(req, res, next) {
    res.send('register')
  }

  static login(req, res, next) {
    res.send('login')
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