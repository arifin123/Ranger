const app = require('./app')
const port = process.env['PORT'] || 3001

app.listen(port, () => console.log('ranger is started on port '+port+' !!!'))