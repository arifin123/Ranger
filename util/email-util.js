const sg = require('sendgrid')
const constant = require('./constant')
var mailgun = require('mailgun-js')({apiKey: constant.mailGunKey, domain: constant.mailGunDomain});
var mailer = sg(constant.sendGridKey)
const helper = sg.mail

const sendGridEmail = (from, to, subject, content) => {
    const fromEmail = new helper.Email(from);
    const toEmail = new helper.Email(to);
    var subjectMail = subject;
    var contentMail = new helper.Content('text/html', content);
    var mail = new helper.Mail(fromEmail, subjectMail, toEmail, contentMail);

    var request = mailer.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    return mailer.API(request)
}

const sendMailGun = (from, to, subject, content) => {
    var data = {
        from: from,
        to: to,
        subject: subject,
        text: content
    };

    return mailgun.messages().send(data);
}

module.exports = {sendGridEmail, sendMailGun}
