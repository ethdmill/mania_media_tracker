//This javascript manages the "Create New List" button

//These select elements in the HTML for later use
var ul = document.getElementById("list-items");
var input = document.getElementById("title-input");

//This is the basis for each new li element
var newItem;

//Creates a new li element
function createNewList () {

  //Conditional statement to prevent creation of lists with blank titles
  if (input.value == "") {
    alert("Please enter a list title.");
  }

  //Alternate condition allows for list creation given any non-blank input string
  else {
    newItem = document.createElement("li");

    //Assigns an ID tag to the li upon its creation to apply CSS
    newItem.setAttribute("id", "list-title");

    //Sets title of list to user's text input
    newItem.appendChild(document.createTextNode(input.value));

    //Adds li as child of ul
    ul.appendChild(newItem);

    //Resets text input field for cleaner usage
    input.value = "";
  }
}

// Things to do:
//
//  - prevent page refresh from clearing list items
//  - enter also clicks button
//
//
// Do I need to use event listeners, or do function tags in HTML count for project?
//
//
// Future functionality:
//
//  - dropdown menu with default list title options (that will auto-connect to appropriate databases)
