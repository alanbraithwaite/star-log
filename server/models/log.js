let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Log"

let schema = new Schema({
  date: { type: Number, required: true },
  stardatelog: { type: String, required: true },
  createrRank: { type: String, required: true },
  creatorId: { type: ObjectId, ref: "User", required: true }
})

let model = mongoose.model(name, schema)

module.exports = model