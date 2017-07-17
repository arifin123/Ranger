const sendGridKey = process.env['SG_KEY'] || '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'
const versionURL = process.env['VERSION_URL'] || 'v1.0'
const mailGunKey = process.env['MAILGUN_KEY'] || 'key-79bc90380e12a63b5ef17d078724781d'
const mailGunDomain = process.env['MAILGUN_DOMAIN'] || 'sandboxac788604fa6a43999592621b0e94ab2f.mailgun.org'

module.exports = {sendGridKey, versionURL, mailGunKey, mailGunDomain}