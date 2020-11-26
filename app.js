require('dotenv').config()

const cors = require('cors')
const express = require("express")
const app = express()
const routes = require("./routes/index")
const errorHandler = require('./middlewares/errorHandler')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})