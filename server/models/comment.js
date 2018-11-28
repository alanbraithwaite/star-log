let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Comment"

let schema = new Schema({
  date: { type: Number, required: true },
  stardatelogId: { type: ObjectId, ref: "Log", required: true },
  creatorId: { type: ObjectId, ref: "User", required: true },
  userComment: { type: String, required: true, min: 5 }
})

let model = mongoose.model(name, schema)

module.exports = model