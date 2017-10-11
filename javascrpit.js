
var submitButton = document.querySelector('#submit');

var clearButton = document.querySelector('#clear');

var resetButton = document.querySelector('#reset-button');

var guessInput = document.querySelector('#enter-guess');


var numberGussed = document.querySelector('#number-guessed');

var userValue = 0;
var targetNumber;

var minNumber = 0;
var maxNumber = 100;
// 
// var minNumberInput = document.querySelector('#min-number-range');
// var maxNumberInput = document.querySelector('#max-number-range');
// var changeMinAndMaxButton = document.querySelector('#min-max-submit');

// changeMinAndMaxButton.addEventListener('click', randomNumber);
//   minNumber = parseInt(minNumberInput.value) || 0;
//   maxNumber = parseInt(maxNumberInput.value) || 100;
//   console.log ('hello', minNumber);
//   console.log ('hello', maxNumber);

// function randomNumber (minNumber, maxNumber){
//   if ((minNumber = parseInt(minNumberInput.value) && (maxNumber = parseInt(maxNumberInput.value)){
//       targeNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
//         }

//       else if ((minNumber= 0) && (maxNumber= 100)){
//         targeNumber = Math.floor(Math.random() * (maxnumber - maxNumber) + minNumber); 
//       }
//       else (){
//         targetNumber = Math.floor(Math.random () * (100 - 0) + 1);
//       }
//     }

guessInput.addEventListener('keyup', enableDisableButton);
// submitButton.addEventListener('click', submit);


// function that works the enable and disable functions

function enableDisableButton (){
  if (guessInput.disable = true){
    submitButton.removeAttribute('disabled', false);
    clearButton.removeAttribute('disabled', false);
    resetButton.removeAttribute('disabled', false);
    console.log ('function enable');
  }
  } 

submitButton.addEventListener('click', submit);
clearButton.addEventListener('click', clear);

resetButton.addEventListener('click', reset);

function yourGuessWasText() {
 document.querySelector('.your-guess-was-text').innerHTML =
   ('Your Last Guess Was:');
}





function submit(){
   userValue = guessInput.value;
   var hiLowText = document.querySelector('.pink-text');
   document.querySelector('#number-guessed').innerText = userValue;

   // if (isNaN(userValue)){
   //  yourGuessWasText();
   //  hiLowText.innerText = 'That was not a number, Try again';
   //  console.log('nan')
   // }

   if (userValue < minNumber){
     yourGuessWasText();
    hiLowText.innerText = 'Number is too Low, Out of Min range';
    console.log ('too low');
   } 

   else if (userValue > maxNumber){
    yourGuessWasText ();
    hiLowText.innerText = 'Number is Higher then Max range';
    console.log ('max to high');
  }

   else if (userValue < targetNumber) {
    yourGuessWasText ();
    hiLowText.innerText = 'Your Guess was too Low, Try again!';
  }
   else if (userValue > targetNumber) {
    yourGuessWasText ();
    hiLowText.innerText = 'Your Guess was too High, Try again!';
   }

 else if (userValue === targetNumber) {
  yourGuessWasText ();
  hiLowText.innerText = 'Boom!';

 }

 // else {
 //  yourGuessWasText ();
 //  hiLowText.innerText = 'Magic';
 // }
}




function clear(){
  guessInput.value = '';

}



function reset(){
  targetNumber = Math.floor(Math.random() * (maxNumber - minNumber) + 1);
  console.log ('reset', targetNumber)

}
reset();