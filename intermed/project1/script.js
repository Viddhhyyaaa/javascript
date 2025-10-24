//1. we have selected all the buttons using query selector
const buttons = document.querySelectorAll('.button');
//2. we will select body now as we have to use body and buttons only
const body = document.querySelector('body');
//3. as buttons is in nodelist so we have used for each loop to access each button of the given grid.
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //eventlistener tracks all the events which is happening on the webpage , like clicking or hovering etc. e.target helps us tell about the part we have clicked and we can know it's properties
    console.log(e);
    console.log(e.target)
    if(e.target.id=== 'grey'){
      body.style.backgroundColor='grey' //or e.target.id
    }
    if(e.target.id=== 'white'){
      body.style.backgroundColor='white'
    }
    if(e.target.id=== 'blue'){
      body.style.backgroundColor='blue'
    }
    if(e.target.id=== 'yellow'){
      body.style.backgroundColor='yellow'
    }
  })
});
