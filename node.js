const {readFile, readFileSync, read} = require('fs')
const path = require('path')
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

// // Problem 3 --------------------------------------------------------------------------------------------------------------------------

// readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data + '|sync');
// });

// const async = readFileSync(path.join(__dirname, 'input.txt'), 'utf8', (data) => {
//     console.log(data);
// });

// console.log(async + '|async')

// // Problem 4 --------------------------------------------------------------------------------------------------------------------------

// readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data + '|sync');
// });

// setTimeout(() => {
//   const dataResult = readFileSync(path.join(__dirname, 'asyncData.txt'), 'utf8', (data) => {
//     console.log(data);
//   });
//   console.log(dataResult)
// }, 2000);

// console.log('Script complete')

// Problem 5 --------------------------------------------------------------------------------------------------------------------------

console.log('Countdown initiated...')

const countDown = setInterval(() => {
    console.log('Repeating message...')
}, 1000);