// console.log('a');
// console.log('b');
// console.log('c');

// setTimeout(function() {
//   console.log('a');
//   setTimeout(() => {
//     console.log('b');
//     setTimeout(() => {
//       console.log('c')
//     }, 1000);
//   }, 1000);
// }, 1000)

// setTimeout(function () {
//   console.log('a');
// }, 3000);
// setTimeout(() => {
//   console.log('b');
// }, 1000);
// setTimeout(() => {
//   console.log('c')
// }, 2000)

// setTimeout(function () {
//   console.log('a');
//   setTimeout(() => {
//     console.log('b');
//     setTimeout(() => {
//       console.log('c')
//     }, 2000)
//   }, 1000);
// }, 3000);

// setTimeout(function () {
//   console.log('a');
//   setTimeout(() => {
//     console.log('b');
//   }, 1000);
// }, 1000);
// setTimeout(() => {
//   console.log('c')
// }, 2000)

// ! 콜백 헬
setTimeout(function () {
  console.log('a');
  setTimeout(() => {
    console.log('b');
    setTimeout(() => {
      console.log('c');
      setTimeout(() => {
        console.log('d');
        setTimeout(() => {
          console.log('e');
        }, 1000);
      }, 1000);
    }, 2000)
  }, 1000);
}, 1000);