let router = require('express').Router()
let Ships = require('../models/ship')


//USE FOR FINDING ALL REVIEWS WRITTEN BY A USER BY USERID
router.get("/:shipId", (req, res, next) => {
  Ships.find({ shipId: req.params.shipId })
    .then(ships => res.send(ships))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Ships.create(req.body)
    .then(ship => res.send(ship))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Ships.findOneAndDelete(req.params.id)
    .then(ship => res.send({ message: "DELORTED", data: ship }))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Ships.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then(ship => res.send(ship))
    .catch(next)
})

module.exports = router