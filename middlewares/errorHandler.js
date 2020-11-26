const errorHandler = (err, req, res, next) => {

  let statusCode;
  let message;
  console.log(err)

  if(err.name === "SequelizeValidationError"){
    statusCode = 400
    message = []
    err.errors.forEach(element => {
      message.push(element.message)
    });
    message.join(', ')
  } else if (err.name === "NOT_FOUND") {
    statusCode = 404
    message = "Error Not Found"
  } else if (err.name === "EMAIL_USED") {
    statusCode = 400
    message = "Email has been already used"
  } else if (err.name === "INVALID_EMAIL_PASSWORD") {
    statusCode = 400
    message = "Email or password is incorrect"
  } else if (err.name === "ACCESS_DENIED") {
    statusCode = 404
    message = "Invalid Access Authorization"
  } else if (err.name === "AUTHENTICATION_FAILED") {
    statusCode = 401
    message = "User not Authenticated"
  } else {
    statusCode = 500
    message = "Internal Server Error"
  }

  res.status(statusCode).json({message})
}

module.exports = errorHandler