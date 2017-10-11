
// global vars

var submitButton = document.querySelector('#submit');
var clearButton = document.querySelector('#clear');
var resetButton = document.querySelector('#reset-button');
var guessInput = document.querySelector('#enter-guess');
var numberGussed = document.querySelector('#number-guessed');
var minNumberInput = document.querySelector('#min-number-range');
var maxNumberInput = document.querySelector('#max-number-range');
var changeMinAndMaxButton = document.querySelector('#min-max-submit');
var changeMinNumberText = document.querySelector ('#min-number');
var changeMaxNumberText = document.querySelector ('#max-number')
var userValue;
var targetNumber;
var minNumber = 0;
var maxNumber = 100;

// event listners for all buttons

guessInput.focus()
guessInput.addEventListener('keyup', enableDisableButton);
submitButton.addEventListener('click', submit);
clearButton.addEventListener('click', clear);
resetButton.addEventListener('click', reset);
guessInput.addEventListener('keyup', enterKeyPress);
maxNumberInput.addEventListener('keyup', enterKeyOnMaxRange);
changeMinAndMaxButton.addEventListener('click', submitMinMax);

// function runs enter button to submit answer

function enterKeyPress (event){
  event.preventDefault();
  if (event.keyCode === 13){
    submit();
  }
 console.log(event.keyCode)
} 

// function runs the submit button on the min and max range using the enter key

function enterKeyOnMaxRange (event){
    event.preventDefault();
    if (event.keyCode ===13){
      submitMinMax ();
    }
  }


// reset min and max range for target number and resets game with new number
   function submitMinMax () {
    minNumber = parseInt(minNumberInput.value);
    maxNumber = parseInt(maxNumberInput.value);
    console.log ('hello', minNumber);
    console.log ('hello', maxNumber);
    reset ();
    }


// function that works the enable and disable buttons reser,submit and clear

function enableDisableButton (){
  if (guessInput.disable = true){
    submitButton.removeAttribute('disabled', false);
    clearButton.removeAttribute('disabled', false);
    resetButton.removeAttribute('disabled', false);
    console.log ('function enable');
  }
} 


// Place text that states what there last guess was

function yourGuessWasText() {
 document.querySelector('.your-guess-was-text').innerHTML =
   ('Your Last Guess Was:');
}


// function that connects the uservaule (guess) to random number  and puts the value in the center of page
function submit(){
   userValue = guessInput.value;
   var hiLowText = document.querySelector('.pink-text');
   document.querySelector('#number-guessed').innerText = userValue;

  if (isNaN(userValue)){
    yourGuessWasText();
    hiLowText.innerText = 'That was not a number, Try again';
    console.log('nan')
   }
  else if (userValue < minNumber){
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
  else {
  yourGuessWasText ();
  hiLowText.innerText = 'Boom!';
  minNumber -=10;
  maxNumber +=10;
  changeMinNumberText.innerText = minNumber;
  changeMaxNumberText.innerText = maxNumber;
  reset ();
 }
}


// clears input field

function clear(){
  guessInput.value = '';
}

// reset random number

function reset(){
  targetNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  console.log ('reset', targetNumber)
}
reset();