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

  let score = numText.innerHTML;

  up.addEventListener("click", function () {
    score++;
    numText.innerHTML = score;
  });

  down.addEventListener("click", function () {
    score--;
    numText.innerHTML = score;
  });
}
