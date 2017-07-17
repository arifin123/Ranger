const Mongoose = require('mongoose').Mongoose
const util = require('../util')
const autoIncrement = require('mongoose-auto-increment');
const logger = util.logger

const mongoose = new Mongoose

mongoose.Promise = Promise

const config = process.env['MONGOURI'] || 'mongodb://localhost:27017/ranger'

mongoose.connect(config, { config: { autoIndex: true } })
	.then(() =>  logger.info('connection succesful'))
	.catch((err) => logger.error(err));

autoIncrement.initialize(mongoose.connection);

module.exports = {mongoose, autoIncrement}