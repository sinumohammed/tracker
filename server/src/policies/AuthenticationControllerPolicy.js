const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)
    console.log(error, 'eeee')
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You should provide a valid email id'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password shoul min 8 length and max 32, includes a-z A-Z 0-9'
          })
          break
        default:
          res.status(400).send({
            error: 'Some error occured'
          })
          break
      }
    } else {
      next()
    }
  }
}
