let app = require('express')()
let bodyParser = require('body-parser')

const config = require('./configs/config')
const router = require('./router')

// configuration application =================

app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', router)

app.listen(config.port)

console.log(`server listening on port ${config.port}`)
