const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  
    request(url + breedName, (error, response, body) => {
      if (error) return callback(error, null);

      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(Error(`breed not found`), null)
        return;
      }
      callback(null, data);

    });
 
};

module.exports = {
  fetchBreedDescription
};