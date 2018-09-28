const mongoose = require('mongoose');
const {Schema} = mongoose;


const addressSchema = new Schema({
 
  companyName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  // street: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true,
  // },
  // city: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true,
  // },
  // state: {
  //   type: String,
  //   required: true,
  //   minlength: 2,
  //   trim: true,
  // },
  //
  // postalCode: {
  //   type: String,
  //   required: true,
  //   minlength: 3,
  //   trim: true,
  // },
  //
  // phone: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true,
  // },
  //
  // webSite: {
  //   type: String,
  //   required: false,
  //   minlength: 7,
  //   trim: true,
  // }
  
});


const Address = mongoose.model('Address', addressSchema);


module.exports = {Address};