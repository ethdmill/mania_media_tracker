// This javascript hides/shows the quote div and includes an extra
// hide function for an added element of responsive design

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


// Function to hide div separately from
// main hideShowQuote function
function autoHide() {
  $('#quoteArea').hide();
}

// Checks for screen width and automatically hides quote div
// to create more screen space on initial page load if user
// is on a mobile device (for smoother user experience)
if (screen.width < 769) {
  $(document).ready(autoHide);
}
