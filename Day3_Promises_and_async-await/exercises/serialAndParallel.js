const fetch = require('node-fetch');
const now = require("performance-now");

const URL = 'https://swapi.dev/api/people/';

function fetchPerson(url) {
  return fetch(url).then(res => res.json());
}
async function printNames() {
  const start = now();
  console.log('SERIAL | Before');
  const person1 = await fetchPerson(URL + '1');
  const person2 = await fetchPerson(URL + '2');
  console.log('SERIAL | ' + person1.name);
  console.log('SERIAL | ' + person2.name);
  console.log('SERIAL | After all');
  const end = now();
  console.log('SERIAL | Start time: ' + start.toFixed(3));
  console.log('SERIAL | End time: ' + end.toFixed(3));
  console.log('SERIAL | Difference: ' + (end - start).toFixed(3));
}

async function printNamesParallel() {
  const start = now();
  console.log('PARALLEL | Before');
  Promise.all([
    fetch(URL + '1').then(response => response.json()),
    fetch(URL + '2').then(response => response.json()),
  ]).then(([person1, person2]) => {
    console.log('PARALLEL | ' + person1.name);
    console.log('PARALLEL | ' + person2.name);
    console.log('PARALLEL | After all');
    const end = now();
    console.log('PARALLEL | Start time: ' + start.toFixed(3));
    console.log('PARALLEL | End time: ' + end.toFixed(3));
    console.log('PARALLEL | Difference: ' + (end - start).toFixed(3));
  });
}

module.exports = [printNames, printNamesParallel];