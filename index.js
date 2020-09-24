const fetchBreedDescription = require('./breedFetcher');
const args = process.argv;
const slicedArgs = args.slice(2); // Takes only what we want from the command line
let breedName = slicedArgs[0]; // the actual breed that was input

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});