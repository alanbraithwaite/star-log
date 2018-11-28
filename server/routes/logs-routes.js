let router = require('express').Router()
let Logs = require('../models/log')
let ranks = ['Captain', 'Commander', 'Lieutenant Commander', 'Lieutenant', 'Lieutenant Junior Grade', 'Ensign']

//USE FOR FINDING ALL REVIEWS WRITTEN BY A USER BY USERID
router.get("/user/:creatorId", (req, res, next) => {
  Logs.find({ creatorId: req.params.creatorId })
    .then(logs => res.send(logs))
    .catch(next)
})


//Find all ship logs user has access to
router.get('/', (req, res, next) => {
  Logs.find({})
    .then(logs => {
      let logsToSend = logs.filter(log => (ranks.indexOf(req.session.uRank) <= ranks.indexOf(log.createrRank)))
      res.send(logsToSend)
    }).catch(next)
})

router.post('/', (req, res, next) => {
  req.body.createrRank = req.session.uRank
  Logs.create(req.body)
    .then(log => {
      res.send(log)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Logs.findOneAndDelete({ _id: req.params.id, creatorId: req.session.uid })
    .then(log => res.send({ message: "DELORTED", data: log }))
    .catch(next)
})

router.put('/user/:id', (req, res, next) => {
  Logs.findOneAndUpdate({ _id: req.params.id, creatorId: req.session.uid }, req.body, { new: true })
    .then(log => res.send(log))
    .catch(next)
})

module.exports = router