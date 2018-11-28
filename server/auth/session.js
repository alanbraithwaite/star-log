let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)


let store = new MongoStore({
  uri: 'mongodb://cptkirk1:cptkirk1@ds117834.mlab.com:17834/star-logs-db',
  collection: "Sessions"
})

store.on('error', error => {
  console.error('[SESSION ERROR]', error)
})

let session = expressSession({
  secret: process.env.SESSIONSECRET || "It's a secret for everybody",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})


module.exports = session