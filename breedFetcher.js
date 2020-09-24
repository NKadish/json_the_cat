const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) { // error message for if the request failed (like something is wrong with the url)
      callback('Please check the url provided! Something is wrong with it.');
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) { // if it can't find the inputted breed it will do this
      callback("Please input a different breed name! Yours couldn't be found!");
    } else { // else it will log the description
      let breedDesc = data[0].description;
      callback(error, breedDesc);
    }
  });
};

module.exports = fetchBreedDescription;