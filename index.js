let express = require('express')
let bp = require('body-parser')
require('./server/db/mlab-config')
let server = express()
let PORT = process.env.PORT || 3000

server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

let auth = require('./server/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)
//Allow users to get data when not logged in
server.use("*", (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error("Please login to continue"))
  }
  if (req.method == "POST") {
    req.body.creatorId = req.session.uid
  }
  next()
})
//^^ above always the same

let logRoutes = require('./server/routes/logs-routes')
let shipRoutes = require('./server/routes/ship-routes')
let commentRoutes = require('./server/routes/comment-routes')

server.use('/api/log', logRoutes)
server.use('/api/ships', shipRoutes)
server.use('/api/comments', commentRoutes)


//default error handler
server.use('*', (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})


server.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})