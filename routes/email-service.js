var express = require('express')
var timeout = require('connect-timeout')
var util = require('../util')
var exception = require('../exception')
var _ = require('lodash')
var model = require('../model')
const router = express.Router()
const logger = util.logger
const emailHelper = util.emailHelper
const error = exception.error
const AuditLogEmail = model.auditLogEmail

router.post('/', timeout('15s'), function(req, res){
    const payload = req.body
    logger.info(' => initiate request with params '+JSON.stringify(payload))
    return emailHelper.sendGridEmail(payload.from, payload.to, payload.subject, payload.body)
    .then( response => {
        logger.info("response : "+JSON.stringify(response))
        if( _.includes(response.statusCode.toString(), 2)){
            var log = new AuditLogEmail({from: payload.from, to: payload.to, subject: payload.subject, body: payload.body, provider: "sendGrid", response: JSON.stringify(response), status: 201})
            return log.save()
            .then( handle => {
                res.status(201).json(Object.assign({message : "successful send email", code: 201}))
            })
        }else if(_.includes(response.statusCode.toString(), 4)){
            var log = new AuditLogEmail({from: payload.from, to: payload.to, subject: payload.subject, body: payload.body, provider: "sendGrid", response: JSON.stringify(response), status: response.statusCode})
            return log.save()
            .then( handle => {
                throw new error.invalidParamsError
            })
        }else if(_.includes(response.statusCode.toString(), 5)){
            return emailHelper.sendMailGun(payload.from, payload.to, payload.subject, payload.body)
            .then( result => {
                if(_.includes(result.message, "Thank")){
                    var log = new AuditLogEmail({from: payload.from, to: payload.to, subject: payload.subject, body: payload.body, provider: "mailGun", response: JSON.stringify(result), status: 201})
                    return log.save()
                    .then( handle => {
                        res.status(201).json(Object.assign({message : "successful send email", code: 201}))
                    })
                }else{
                    var log = new AuditLogEmail({from: payload.from, to: payload.to, subject: payload.subject, body: payload.body, provider: "mailGun", response: JSON.stringify(result), status: 500})
                    return log.save()
                    .then( handle => {
                        throw new error.generalError
                    })
                }
            })
        }
    })
    .catch( err => {
        if(err instanceof error.invalidParamsError){
            logger.info(Object.assign({ message: "Invalid Request"}, payload))
            res.status(err.code).json(Object.assign({ message: "Invalid Request", code: err.code }, payload))
        }else{
            logger.info(Object.assign({ message: err.message}, payload))
            res.status(500).json(Object.assign({ message: err.message, code: err.code }, payload))
        }
    })
})

module.exports = router