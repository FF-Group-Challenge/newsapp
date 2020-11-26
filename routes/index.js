const router = require('express').Router()
const { Controller } = require('../controllers/controller')
const authentication = require('../middlewares/authentication')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/google-login', Controller.googleLogin)

router.use(authentication)
router.get('/news-space', Controller.newsSpace)
router.get('/news-global', Controller.newsGlobal)
router.get('/news-indonesia', Controller.newsIndonesia)

module.exports = router