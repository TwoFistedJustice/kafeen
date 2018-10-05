const monAxios = require('axios');
const endpoint = 'http://localhost:3000';


const getByYelpId = (yelpId) => {
  monAxios({
    method: 'get',
    url: `${endpoint}/biz/${yelpId}`
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log('FAILURE - getByYelpId');
    });
};


// getByYelpId();

module.exports = {getByYelpId};