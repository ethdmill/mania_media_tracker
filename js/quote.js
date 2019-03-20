//This javascript displays a random quote on button click

//Selects content of initial quote on page
var quote = document.getElementById('quote');

//This is used below to store random function output
var randomQuote;

//Array full of quotes for the later function to choose from
var quoteArray = [
  '"Meet me in Montauk."',
  '"Fly, you fools!"',
  '"Whoever saves one life saves the world entire."',
  '"Roads? Where we\'re going, we don\'t need roads."',
  '"No, I am your father."',
  '"Does he look like a bitch?"',
  '"I\'m a dude playing a dude disguised as another dude!"',
  '"They\'re comin\' outta the walls! They\'re comin\' outta the goddamn walls!"',
  '"Come out to the coast, we\'ll get together, have a few laughs..."',
  '"Quis custodiet ipsos custodes?"',
  '"That\'ll do, pig. That\'ll do."',
  '"I\'m disinclined to acquiesce to your request. Means "no"."',
  '"Well, Clarice, have the lambs stopped screaming?"',
  '"60% of the time, it works every time."',
  '"Mediocrities everywhere, I absolve you...I absolve you all."',
  '"Inconceivable!"',
  '"You know, some guys just can\'t hold their arsenic."',
  '"In the beginning, the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move."',
  '"There\'s always money in the banana stand."',
  '"I\'m not in the meth business. I\'m in the empire business."',
  '"In the darkest times, hope is something you give yourself. That is the meaning of inner strength."',
  '"Don\'t tell me what I can\'t do!"',
  '"You are the child of my makers; inheritor of all the left behind. You are Forerunner...but this ring is mine."',
  '"Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters."',
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
// - fill quoteArray with actual content

//I am planning to add functionality in the future so that the
//initial "Quote 0" is also selected from the array at random,
//but for now, it is the same every time on page load

// Future stuff:
//
// - use "sorry dave" quote for an error page
