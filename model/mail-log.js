const config = require('../config')

const Schema = config.db.mongoose.Schema

var auditLogEmailSchema = new Schema({
    from: {type: String, default: ""},
    to: {type: String, default: ""},
    subject: {type: String, default: ""},
    body: {type: String, default: ""},
    provider: {type: String, default: ""},
    response: {type: String, default: ""},
    status: {type: Number, default: ""},
    dateCreated: { type: Date, default: Date.now }
})

module.exports = config.db.mongoose.model('auditLogEmail', auditLogEmailSchema)