const AuthenticationControlller = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationControlller.register)

  app.post('/login',
    AuthenticationControlller.login)
}
