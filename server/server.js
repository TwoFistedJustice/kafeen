const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./mongoose');


const app = express();
const port = 3000;



const {Address} = require('./models/address');

//configure the middleware
// this allows us to send json to our express application
app.use(bodyParser.json());





app.post('/listing', (req, res) => {
  let addressData = {companyName, street, city, state, postalCode, phone, website} = req.body;
  let address = new Address(addressData);
  address.save().then((doc) => {
    res.send(doc);
  }), (e) => {
  res.status(400).send('Unable to save because reasons');
  }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {app};


