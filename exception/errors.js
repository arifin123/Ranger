var errors = require('errors')

const generalError = new errors.create({ name: 'generalError', message: 'Internal server error ', code: 500})
const invalidParamsError = new errors.create({ name: 'invalidParamsError', message: 'Invalid params', code: 400 })

module.exports =  {generalError, invalidParamsError}