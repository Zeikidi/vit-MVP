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

/* Set the width of the side navigation to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

dateHax();

function dateHax() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
}