//This javascript hides/shows the quote div

// Selects quote area div
let hide = document.getElementById("quoteArea");

//Hides or shows quote area on click
function hideShowQuote() {

  //Conditional statement checks to see if area is already hidden
  if (hide.style.display === "none") {

    //If so, it is set to shown
    hide.style.display = "block";
  }

  //Otherwise, it is hidden
  else {
    hide.style.display = "none";
  }
}

// Things to do:
//
// - need jquery for smooth animations
//   (will need to link jquery to whole thing)
