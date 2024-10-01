function alertUser() {
  alert("Hi VC++!");
}

function changeColor() {
  // Select the button by its ID
  const button = document.getElementById("changeColor");

  // Add an event listener for the 'click' event
  button.addEventListener("click", function () {
    // Change the button's background color when clicked
    button.style.backgroundColor = "#F44336"; // Red color
    button.innerText = "Clicked!"; // Change button text
  });
}

function sum() {
  let up = document.getElementById("inc");
  let down = document.getElementById("dec");

  let numText = document.getElementById("num");

  let score = parseInt(numText.innerHTML); // Convert string to number

  up.addEventListener("click", function () {
    score++;
    numText.innerHTML = score;
  });

  down.addEventListener("click", function () {
    score--;
    numText.innerHTML = score;
  });
}

// Call the function once to set up event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", sum);

function garlicHamster() {
  const hamster = document.getElementById("hamster");
  const responsetext = document.getElementById("responsetext");
  var response = "";
  hamster.addEventListener("mouseover", function () {
    response = prompt("what do you think of the garlic hamster?");
    //prompt is one way of getting input from a user
    //by saving the response in a variable, you can use that input later
    responsetext.innerText = "you said " + response + " about the hamster";
  });
}
