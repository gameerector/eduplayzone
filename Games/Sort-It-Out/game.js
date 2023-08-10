// Get references to the necessary elements
var nameForm = document.getElementById("nameForm");
var nameInput = document.getElementById("nameInput");
var scoreValue = document.getElementById("scoreValue");
var popupContainer = document.getElementById("popupContainer");
var userNameDisplay = document.getElementById("userNameDisplay");

// Load the user's name from localStorage (if available)
var userName = localStorage.getItem("userName");
if (userName) {
  nameInput.value = userName;
  userNameDisplay.textContent = userName;
} else {
  // Show the popup if the user's name is not available
  popupContainer.style.display = "block";
}

// Handle form submission
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Get the user's name
  userName = nameInput.value;

  // Save the user's name to localStorage
  localStorage.setItem("userName", userName);

  // Update the username display
  userNameDisplay.textContent = userName;

  // Hide the name form and show the game content
  popupContainer.style.display = "none";
  document.getElementById("gameContent").style.display = "block";
});

// Function to update the score
function updateScore() {
  scoreValue.textContent = score;
}

// ... Rest of the game logic ...

// Attach event listener to the restart button
restartBtn.addEventListener("click", function () {
  // Clear the saved user name from localStorage
  localStorage.removeItem("userName");

  // Reload the page
  location.reload();
});
