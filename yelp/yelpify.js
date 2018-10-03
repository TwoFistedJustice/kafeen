const axiosYelp = require('axios');
const yelp = require('../../../config/yelpConfig');
const {appName, clientID, auth} = yelp;


// const axiosConfig = {
//   headers: {
//     Authorization: `Bearer ${apiKey}`
//   }
// }

// axiosYelp.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;


const loc = {
  lat: 34.1378576,
  lng: -117.8682582
}
// This endpoint will fetch coffee houses near a given geolocation
// you need to set the api key in the header
var yelpEndpoint = `https://api.yelp.com/v3/businesses/search?term=coffeehouse&latitude=${loc.lat}&longitude=${loc.lng}`

// https://api.yelp.com/v3/businesses/search?term=coffeehouse&latitude=34.1378576&longitude=-117.8682582
//http:%60https://api.yelp.com/v3/businesses/search?term=coffeehouse&latitude=34.1378576&longitude=-117.8682582

const testYelp = () => {

  axiosYelp.get(yelpEndpoint, {
    headers: auth
  })
    .then((response) => {
      console.log(response.data);
      console.log('SUCCESS!');
    })
    .catch((e) => {
      console.log(e.response);
      console.log('FAILURE');
    })
  
  
}


const getCoffeeHouseByLocation = function() {
  
  axiosYelp ({
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search',
    params: {
      term: 'coffeehouse',
      latitude: loc.lat,
      longitude: loc.lng
    },
    headers: auth,
  }).then((response) => {
    console.log (response.data.businesses)
  }).catch ((e) => {
    console.log (e);
  })
  
}

getCoffeeHouseByLocation();
// testYelp();


module.exports = {getCoffeeHouseByLocation};