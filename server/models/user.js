let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "User"

//user schema
let schema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rank: { type: String, required: true, enum: ['Captain', 'Commander', 'Lieutenant Commander', 'Lieutenant', 'Lieutenant Junior Grade', 'Ensign'], default: 'Ensign' },
  shipId: { type: String, ref: 'Ship', required: true },
  hash: { type: String, required: true }
})

//Hashes a password (used when password created/changed)
//STATICS are functions on the Class
schema.statics.hashPassword = function (password) {
  return bcrypt.hashSync(password, SALT)
}

//Methods are functions on the INSTANCE of the class
//takes in a string and compares it to the Hash on the user object
schema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hash) //use async to prevent bottlenecking
}


let model = mongoose.model(name, schema)

module.exports = model