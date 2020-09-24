const request = require('request');
const args = process.argv;
const slicedArgs = args.slice(2); // Takes only what we want from the command line
let breedRequest = slicedArgs[0]; // the actual breed that was input

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedRequest}`, (error, response, body) => {
  if (error) { // error message for if the request failed (like something is wrong with the url)
    console.log("Looks like something is wrong with the URL! Here's what's wrong:");
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) { // if it can't find the inputted breed it will do this
    console.log("Please try inputting a different breed because the one you put in can't be found!");
    return;
  } else { // else it will log the description
    console.log(data[0].description);
  }
});

