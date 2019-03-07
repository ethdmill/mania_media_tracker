//this is the button that creates a new list item on the page

const ul = document.getElementById("list-items");
const input = document.getElementById("title-input");
const newItem;

function createNewList () {
  newItem = document.createElement("li");
  var listTitle = input.value;
  newItem.setAttribute("id", listTitle);
  newItem.appendChild(document.createTextNode(listTitle));
  ul.appendChild(newItem);
}

//fix this functionality...something is wrong
