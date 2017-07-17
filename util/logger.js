const winston = require('winston')
winston.add(winston.transports.File, { filename: 'application.log' })

module.exports = winston