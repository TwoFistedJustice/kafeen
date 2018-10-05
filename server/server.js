// https://www.yelp.com/developers/faq
//https://www.yelp.com/developers/documentation/v3/authentication
// yelp api key is in config folder - need to add to request header


const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./mongoose');


const app = express();
const port = 3000;

var {getByYelpId} = require('../review/fetchFromDb');


const {Biz} = require('./models/biz_model');

const {getCoffeeHouseByLocation} = require('../yelp/yelpify');


//configure the middleware
// this allows us to send json to our express application
app.use(bodyParser.json());


app.post('/biz', (req, res) => {
  let bizData = {yelpId, name, city, state} = req.body;
  let biz = new Biz(bizData);
  biz.save().then((doc) => {
    res.send(doc);
  }), (e) => {
  res.status(400).send('Unable to save because reasons');
  }
});


app.get('/biz/:yelpId',(req, res) => {
  let yelpId = req.params.yelpId;
 Biz.findOne({yelpId})
   .then((biz) => {
   if (!biz) {
     return res.status(404).send();
   }
   res.send({biz});
   
 }).catch((e) => {
   res.status(400).send();
 })
});



getByYelpId('E_wh6kpElcMX_S1tm3CJpw');


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



module.exports = {app};


