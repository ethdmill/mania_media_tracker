//These two variables select the firstQuote element <p> and then
//create a something to store a later HTML change, respectively
var firstQuote = document.getElementById('firstQuote');
var randomQuote;

//This is an array full of quotes for the later function to choose from
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

//This function selects a random item from quoteArray and displays it by
//changing the HTML content of the <p> element marked as "firstQuote"
function generateQuote () {
  randomQuote = quoteArray[Math.round(Math.random() * (quoteArray.length - 1))];
  firstQuote.innerHTML = randomQuote;
}

//I am planning to add functionality so that the initial "Quote 0"
//is also selected from the array at random, but for now, it is
//the same every time on page load
