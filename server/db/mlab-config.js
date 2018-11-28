let mongoose = require('mongoose')

const connectionString = 'mongodb://cptkirk1:cptkirk1@ds117834.mlab.com:17834/star-logs-db'

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log('DATABASE ERROR: ', err)
})

connection.once('open', () => {
  console.log('Connected to Database')
})