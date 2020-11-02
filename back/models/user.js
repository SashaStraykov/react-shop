const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
id: {
  type: String,
  required: true,
  unique: true,
},
email: {
  type: String,
  required: true,
  unique: true,
},
password: {
  type: String,
  required: true,
},
login: {
  type: String,
  required: true,
  unique: true,
},
role: {
  type: String,
  enum:['admin', 'user'],
  default: 'user',
},
typs: {
  type: Number,
  required: true,
  default: 0
}


});

module.exports = model('User', UserSchema);
