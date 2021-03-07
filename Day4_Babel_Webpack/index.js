import 'core-js/proposals/promise-any'

/* function messageDelay (msg, delay){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (msg.length === 0){
            reject("No Message")
        }
        const upperCased = msg.toUpperCase();
        resolve(upperCased)
    }, delay)
})

}

const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Hi Class", 700),
    messageDelay("Hello World", 700),
    messageDelay("Promises are cool", 500)
]

Promise.any(promises).then((upperCased) => console.log(upperCased));

messageDelay("Hi Class", 1000).then(uMsg => console.log(uMsg))
.then(uMsg => console.log(uMsg))
.catch(err => console.log("UPPPS"))


// const upperCased = await messageDelay("ihbu", 1000)


import fetch from "node-fetch"

function messageDelay(msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const upperCased = msg.toUpperCase();
      resolve(upperCased)
    }, delay)
  })
}

const promises = [
  messageDelay("Hi", 1300),
  messageDelay("Hi Class", 700),
  messageDelay("promises are cool", 500),
  messageDelay("hello World", 1700),
]

Promise.any(promises).then((upperCased) => console.log(upperCased));
*/

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
