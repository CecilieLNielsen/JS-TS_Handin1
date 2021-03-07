const secureRandoms = require('./secureRandoms');
/*
secureRandoms([64, 56, 48, 40, 32, 24, 16, 8])
  .then(result => console.log(result))
  .catch(err => console.log(err));
*/
const [normalVersion, asyncVersion] = require('./swapi');
/*
normalVersion(1)
  .then(result => console.log(result))
  .catch(err => console.log(err))
*/
/*
asyncVersion(1)
  .then(result => console.log(result))
*/
const [serial, parallel] = require('./serialAndParallel');
/*
serial();
parallel();
*/