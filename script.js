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
