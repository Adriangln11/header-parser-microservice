const express = require('express')
const morgan = require('morgan')
const path = require('path')
const os = require('os')

const app = express()

app.use(morgan('dev'))
app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname + '/public/index.html'));
})
app.get('/api/hello', function(req, res) {
    res.json({ greeting: 'hello API' });
});
app.get('/api/whoami', (req, res) => {
    const ip = req.headers.host
    const lang = req.headers['accept-language']
    const software = req.headers['user-agent']
    return res.json({
        "ipaddress": ip,
        "language": lang,
        "software": software
    })
})

app.listen(app.get('port'), console.log(`Listening on port: ${app.get('port')}`))