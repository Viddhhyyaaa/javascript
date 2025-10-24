//1. we want the values from the form
const form = document.querySelector('form');
//2. as we want values to be submitted after clicking the submit button therefore we are not extracting weight and height first
form.addEventListener('submit', function (e) {
  //3. holds the value before making it disappear
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = bmi;
  }
});