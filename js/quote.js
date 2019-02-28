var firstQuote = document.getElementById('firstQuote');
var randomQuote;
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

function generateQuote () {
  randomQuote = quoteArray[Math.round(Math.random() * (quoteArray.length - 1))];
  firstQuote.innerHTML = randomQuote;
}
