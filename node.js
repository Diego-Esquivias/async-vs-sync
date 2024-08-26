// // Problem 1 ------------------------------------------------------------------------------------------------------------------------
// console.log('This is synchronous')
// setTimeout(() => {
//     console.log('This is asynchronous')
// }, 2000);
// console.log('End of script')

// // Problem 2 --------------------------------------------------------------------------------------------------------------------------
// console.log('Interval started')
// const printMess = setInterval(() => {
//     console.log('Repeating message...')
// }, 3000);
// setTimeout(() => {
//     clearInterval(printMess)
// }, 10000);

// Problem 3 --------------------------------------------------------------------------------------------------------------------------
const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});

fs.readFileSync('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});
