const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

try {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found');
      process.exit(0);
    }
    console.log(data);
    console.log(typeof data);
  });
} catch (error) {
  console.log("There was an error", error.name);
}
