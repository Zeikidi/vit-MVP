// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var headerContainer = document.getElementById("headerContainer");

// Get the offset position of the navbar
var sticky = headerContainer.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    headerContainer.classList.add("sticky")
  } else {
    headerContainer.classList.remove("sticky");
  }
}