const crypto = require('crypto');

const makeSecureRandom = (size) => new Promise(function (resolve, reject) {
  crypto.randomBytes(size, (err, buffer) => {
    if (err) {
      return reject(new Error(err))
    }
    let secureHex = buffer.toString('hex');
    resolve({ 'length': size, 'random': secureHex })
  });
});

const secureRandoms = (arr) => new Promise((resolve, reject) => {
  if (arr.length <= 0) {
    reject(new Error('Invalid Array - No elements found!'))
  }
  const promises = []
  arr.map((integer) => {
    if (isNaN(integer)) {
      reject(new Error('Invalid Array Element - Element is not a number!'))
    }
    if (integer <= 0) {
      reject(new Error('Invalid Array Element - Element is zero or negative!'))
    }
    promises.push(makeSecureRandom(integer))
  })
  const title = arr.length + ' Secure Randoms';
  const result = {
    title,
    randoms: []
  }
  Promise.all(promises)
    .then(results => result.randoms = [...results])
    .then(() => resolve(result))
    .catch(err => reject(err));
});

module.exports = secureRandoms;