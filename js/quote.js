//This javascript displays a random quote on button click

//Selects content of initial quote on page
var quote = document.getElementById('quote');

//This is used below to store random function output
var randomQuote;

//Array full of quotes for the later function to choose from
var quoteArray = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5",
  "Quote 6",
  "Quote 7",
  "Quote 8",
  "Quote 9",
  "Quote 10",
];

//Selects a random item from quoteArray and displays it
function generateRandomQuote () {

  //Randomly selects item from quoteArray
  randomQuote = quoteArray[Math.round(Math.random() * (quoteArray.length - 1))];

  //Sets HTML of displayed quote to random new quote
  quote.innerHTML = randomQuote;
}

// Things to do:
//
//- fill quoteArray with actual content

//I am planning to add functionality in the future so that the
//initial "Quote 0" is also selected from the array at random,
//but for now, it is the same every time on page load
