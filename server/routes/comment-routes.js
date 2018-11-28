let router = require('express').Router()
let Comments = require('../models/comment')
let Logs = require('../models/log')

//USE FOR FINDING ALL REVIEWS WRITTEN BY A USER BY USERID
router.get("/user/:creatorId", (req, res, next) => {
  Comments.find({ creatorId: req.params.creatorId })
    .then(comments => res.send(comments))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(comment => {
      Logs.findOneAndUpdate({ _id: req.body.stardatelogId }, { comment: comment._id })
        .then(log => {
          res.send(comment)
        })
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Comments.findOneAndDelete(req.params.id)
    .then(comment => res.send({ message: "DELORTED", data: comment }))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Comments.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then(comment => {
      res.send(comment)
    })
    .catch(next)
})

module.exports = router