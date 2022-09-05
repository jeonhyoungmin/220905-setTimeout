// let num = 0;
// const a = setInterval(function() {
//   num++
//   console.log(num)
// }, 1000);

// let num = 0;
// const a = setInterval(function() {
//   num++
//   console.log(num)
//   if(num === 10){
//     clearInterval(a);
//   }
// }, 1000);

// 60프레임
let num = 0;
const a = setInterval(function() {
  num++
  console.log(num)
  if(num === 60){
    clearInterval(a);
  }
}, 16);