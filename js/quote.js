// This javascript displays a random quote on button click

// Selects content of initial quote on page
var quote = document.getElementById('quote');

// This is used below to store random function output
var randomQuote;

// Array full of quotes for the later function to choose from
var quoteArray = [

  // MOVIES
  '"I don\'t know, I\'m making this up as I go."<br><br>-- Indiana Jones &nbsp;// &nbsp;Raiders of the Lost Ark (1981)',
  '"Meet me in Montauk."<br><br>-- Clementine Kruczynski &nbsp;// &nbsp;Eternal Sunshine of the Spotless Mind (2004)',
  '"Fly, you fools!"<br><br>-- Gandalf the Grey &nbsp;// &nbsp;The Fellowship of the Ring (2001)',
  '"Whoever saves one life saves the world entire."<br><br>-- Itzhak Stern &nbsp;// &nbsp;Schindler\'s List (1993)',
  '"Roads? Where we\'re going, we don\'t need roads."<br><br>-- Dr. Emmett Brown &nbsp;// &nbsp;Back to the Future (1985)',
  '"No, I am your father."<br><br>-- Darth Vader &nbsp;// &nbsp;The Empire Strikes Back (1980)',
  '"Does he look like a bitch?"<br><br>-- Jules Winnfield &nbsp;// &nbsp;Pulp Fiction (1994)',
  '"I\'m a dude playing a dude disguised as another dude!"<br><br>-- Kirk Lazarus &nbsp;// &nbsp;Tropic Thunder (2008)',
  '"They\'re comin\' outta the walls! They\'re comin\' outta the goddamn walls!"<br><br>-- Pvt. William Hudson &nbsp;// &nbsp;Aliens (1986)',
  '"Come out to the coast, we\'ll get together, have a few laughs..."<br><br>-- John McClane &nbsp;// &nbsp;Die Hard (1988)',
  '"That\'ll do, pig. That\'ll do."<br><br>-- Arthur H. Hoggett &nbsp;// &nbsp;Babe (1995)',
  '"I\'m disinclined to acquiesce to your request. Means \'no\'."<br><br>-- Captain Hector Barbossa &nbsp;// &nbsp;Pirates of the Caribbean: The Curse of the Black Pearl (2003)',
  '"Well, Clarice, have the lambs stopped screaming?"<br><br>-- Dr. Hannibal Lecter &nbsp;// &nbsp;The Silence of the Lambs (1991)',
  '"Sixty percent of the time, it works every time."<br><br>-- Brian Fantana &nbsp;// &nbsp;Anchorman: The Legend of Ron Burgundy (2004)',
  '"Mediocrities everywhere, I absolve you...I absolve you all."<br><br>-- Antonio Salieri &nbsp;// &nbsp;Amadeus (1984)',
  '"Inconceivable!"<br><br>-- Vizzini &nbsp;// &nbsp;The Princess Bride (1987)',
  '"You know, some guys just can\'t hold their arsenic."<br><br>-- Annie &nbsp;// &nbsp;Chicago (1975/2002)',
  '"Frankly, my dear, I don\'t give a damn."<br><br>-- Rhett Butler &nbsp;// &nbsp;Gone with the Wind (1939)',
  '"Leave the gun. Take the cannoli."<br><br>-- Peter Clemenza &nbsp;// &nbsp;The Godfather (1972)',
  '"All right, Mr. DeMille, I\'m ready for my close-up."<br><br>-- Norma Desmond &nbsp;// &nbsp;Sunset Boulevard (1950)',
  '"Hasta la vista, baby."<br><br>-- T-800 &nbsp;// &nbsp;Terminator 2: Judgment Day',
  '"Now, when I say \'Who\'s the master\', you say...\'Sho Nuff\'. Who\'s the master?"<br><br>-- Sho Nuff &nbsp;// &nbsp;The Last Dragon (1985)',
  '"I must break you."<br><br>-- Ivan Drago &nbsp;// &nbsp;Rocky IV (1985)',
  '"P, A, R, T. Y? Because I gotta!"<br><br>-- Stanley Ipkiss &nbsp;// &nbsp;The Mask (1994)',
  '"I\'m funny how, I mean, funny, like a I\'m a clown? I amuse you?"<br><br>-- Tommy DeVito &nbsp;// &nbsp;Goodfellas (1990)',

  // BOOKS
  '"In the beginning, the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move."<br><br>-- Douglas Adams &nbsp;// &nbsp;The Hitchhiker\'s Guide to the Galaxy',

  // SHOWS
  '"I\'m not going there to die. I\'m going to find out if I\'m really alive."<br><br>-- Spike Spiegel &nbsp;// &nbsp;Cowboy Bebop',
  '"There\'s always money in the banana stand."<br><br>-- George Bluth, Sr. &nbsp;// &nbsp;Arrested Development',
  '"I\'m not in the meth business. I\'m in the empire business."<br><br>-- Walter White &nbsp;// &nbsp;Breaking Bad',
  '"In the darkest times, hope is something you give yourself. That is the meaning of inner strength."<br><br>-- Uncle Iroh &nbsp;// &nbsp;Avatar: The Last Airbender',
  '"Don\'t tell me what I can\'t do!"<br><br>-- John Locke &nbsp;// &nbsp;Lost',

  // GAMES
  '"You are the child of my makers; inheritor of all they left behind. You are Forerunner...but this ring is mine."<br><br>-- 343 Guilty Spark &nbsp;// &nbsp;Halo 3',
  '"Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters."<br><br>-- Javik &nbsp;// &nbsp;Mass Effect 2',

  // POEMS
  '"\'Round the decay of that massive wreck, the lone and level sands stretch far away."<br><br>-- Percy Bysshe Shelley &nbsp;// &nbsp;Ozymandias',
  '"Quis custodiet ipsos custodes?"<br><br>-- Juvenal &nbsp;// &nbsp;Satire VI, Lines 347-8'

];

// Selects a random item from quoteArray and displays it
function generateRandomQuote () {

  // Randomly selects item from quoteArray
  randomQuote = quoteArray[Math.round(Math.random() * (quoteArray.length - 1))];

  // Sets HTML of displayed quote to random new quote
  quote.innerHTML = randomQuote;
}

// Uses jQuery to display a random quote from the array on initial page load
$(document).ready(generateRandomQuote);
