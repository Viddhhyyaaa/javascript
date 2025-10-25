//document.getElementById('clock')
const clock = document.querySelector('#clock');
//1. this will help to show continuous time updation
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  //putting current time into the clock variable
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
