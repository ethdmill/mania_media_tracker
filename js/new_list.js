// This javascript manages the "Create New List" button

// These select elements in the HTML for later use
var ul = document.getElementById("lists");
var input = document.getElementById("title-input");

// This is the basis for each new li element
var newItem;

// Creates a new li element
function createNewList (event) {

  // Prevents page from refreshing upon form submit
  event.preventDefault();

  // Conditional statement to prevent creation of lists with blank titles
  if (input.value == "") {
    alert("Please enter a list title.");
  }

  // Alternate condition allows for list creation given any non-blank input string
  else {
    newItem = document.createElement("li");

    // Assigns a class tag to the li upon its creation to apply CSS
    newItem.classList.add("created-list");

    // Sets title of list to user's text input and sets to uppercase for consistency
    newItem.appendChild(document.createTextNode(input.value.toUpperCase()));

    // Adds li as child of ul
    ul.appendChild(newItem);

    // Resets text input field for cleaner usage
    input.value = "";
  }
}

// Future functionality:
//
//  - dropdown menu with default list title options
//    (that will auto-connect to appropriate databases)
