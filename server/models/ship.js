let mongoose = require('mongoose')
let Schema = mongoose.Schema
let name = "Ship"

let schema = new Schema({
  name: { type: String, required: true, unique: true },
  class: { type: String, required: true, enum: ['Intepid', 'Galaxy', 'Constitution', 'Defiant', 'Excelsior', 'Sovereign', 'Ambassador', 'Nebula', 'Prometheus', 'Miranda'], default: 'Constitution' }
})

let model = mongoose.model(name, schema)

module.exports = model