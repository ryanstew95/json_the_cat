const request = require('request');
const { breedName } = require('./index');

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


const fetchBreedDescription = function(breedName, callback) {

  request(url, (error, resp, body) => {
  
    if (error) {
      return callback('Failed to request details: ', error);
    }
  
    const data = JSON.parse(body);
  
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }
  });

};


module.exports = { fetchBreedDescription };