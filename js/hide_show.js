// This javascript hides/shows the quote div

// Selects quote area div
let quoteArea = document.getElementById("quoteArea");

// Hides or shows quote area on click
function hideShowQuote() {

  // Conditional statement checks to see if area is already hidden
  if (quoteArea.style.display === "none") {

    // If so, jQuery reveals it with a slideDown function
    $('#quoteArea').slideDown(450);
  }

  // Otherwise, jQuery hides it with a slideUp function
  else {
    $('#quoteArea').slideUp(450);
  }
}
