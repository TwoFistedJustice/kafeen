const mongoose = require('mongoose');
const {Schema} = mongoose;

const bizSchema = new Schema({
  "yelpId" : {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  "name": {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  "city": {
    type: String,
    required: false,
    minLength: 1,
    trim: true
  },
  "state": {
    type: String,
    required: false,
    minLength: 2,
    trim: true
  },
  "has_reviews": {
    type: Boolean,
    default: false
  }
});

const Biz = mongoose.model('Biz', bizSchema);

module.exports = {Biz};