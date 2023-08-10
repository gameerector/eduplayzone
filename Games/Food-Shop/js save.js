// ...
window.onload = function() {
  var popupCard = document.getElementById("popupCard");
  var closePopupBtn = document.getElementById("closePopupBtn");

  closePopupBtn.addEventListener("click", function() {
    popupCard.style.display = "none";
    sessionStorage.setItem("popupDisplayed", "true");
    sessionStorage.setItem("lastPopupTime", new Date().getTime().toString());
  });

  var currentTime = new Date().getTime();
  var lastPopupTime = sessionStorage.getItem("lastPopupTime");
  var timeDifference = currentTime - parseInt(lastPopupTime || 0);

  if (timeDifference >= 60000 || !sessionStorage.getItem("popupDisplayed")) {
    popupCard.style.display = "block";
    sessionStorage.setItem("popupDisplayed", "true");
    sessionStorage.setItem("lastPopupTime", currentTime.toString());
  } else {
    popupCard.style.display = "none";
  }
};


document.addEventListener("DOMContentLoaded", function() {
  var foodContainer = document.getElementById("foodContainer");
  var restartBtn = document.getElementById("restartBtn");
  var result = document.getElementById("result");
  var scoreValue = document.getElementById("scoreValue");

  var foodTypes = ["fruit", "veggies", "fastFood"];

  var score = 0;

  // Function to update the score
  function updateScore() {
    scoreValue.textContent = score;
  }

  // Function to handle drag and drop events
  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    var foodId = event.dataTransfer.getData("text");
    var foodElement = document.getElementById(foodId);
    var bucketElement = event.target;

    if (bucketElement.classList.contains("bucket")) {
      bucketElement.classList.add("inside-bucket");
      foodElement.classList.add("inside-bucket");
      foodElement.style.transform = "rotate(" + getRandomRotation() + "deg)"; // Set random rotation
      bucketElement.appendChild(foodElement);
    }

    // Check if all food items are placed in the buckets
    var foodItems = document.querySelectorAll(".food");
    var isAllFoodPlaced = true;

    foodItems.forEach(function(foodItem) {
      if (!foodItem.classList.contains("inside-bucket")) {
        isAllFoodPlaced = false;
        return;
      }
    });

    // Display the result and update the score
    if (isAllFoodPlaced) {
      var isSortedCorrectly = true;

      // Check if each food item is placed in the correct bucket
      foodItems.forEach(function(foodItem) {
        var foodType = foodItem.getAttribute("data-type");
        var bucketId = foodItem.parentNode.getAttribute("id");

        if (
          (bucketId === "fruitBucket" && foodType !== "fruit") ||
          (bucketId === "veggiesBucket" && foodType !== "veggies") ||
          (bucketId === "fastFoodBucket" && foodType !== "fastFood")
        ) {
          isSortedCorrectly = false;
        }
      });

      // Display the result and update the score
      if (isSortedCorrectly) {
        result.textContent = "Congratulations! All food items are correctly sorted!";
        score += 10;
        restartBtn.textContent = "Next Level"
      } else {
        result.textContent = "Oops! Some food items are not sorted correctly.";
        score -= 5;
        restartBtn.textContent = "Try Again"

      }

      updateScore();

      // Show the restart button
      restartBtn.style.display = "block";
    }
  }

  function getRandomRotation() {
    var minRotation = -10; // Minimum rotation in degrees
    var maxRotation = 10; // Maximum rotation in degrees
    var randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
    return randomRotation;
  }

  // Function to create a food element with a random emoji based on its type
  function createFoodElement(type) {
    var foodElement = document.createElement("span");
    foodElement.className = "food";
    foodElement.draggable = true;
    foodElement.setAttribute("data-type", type);

    var emoji;

    switch (type) {
      case "fruit":
        var fruitEmojis = ["\uD83C\uDF49", "\uD83C\uDF4E", "\uD83E\uDD6D", "\uD83C\uDF47", "\uD83C\uDF53"];
        emoji = fruitEmojis[Math.floor(Math.random() * fruitEmojis.length)];
        break;
      case "veggies":
        var veggiesEmojis = ["\uD83C\uDF46", "\uD83C\uDF3D", "\uD83C\uDF45", "\uD83E\uDD66", "\uD83E\uDD54"];
        emoji = veggiesEmojis[Math.floor(Math.random() * veggiesEmojis.length)];
        break;
      case "fastFood":
        var fastFoodEmojis = ["\uD83C\uDF54", "\uD83C\uDF5F", "\uD83C\uDF55", "\uD83E\uDD6A", "\uD83E\uDD5A"];
        emoji = fastFoodEmojis[Math.floor(Math.random() * fastFoodEmojis.length)];
        break;
      // Add more food types here
      default:
        emoji = "\uD83C\uDF7D"; // Fork and knife emoji
        break;
    }

    foodElement.innerText = emoji;
    return foodElement;
  }

  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Spawn random food items
  function spawnFoodItems() {
    for (var i = 1; i <= 10; i++) {
      var randomTypeIndex = Math.floor(Math.random() * foodTypes.length);
      var foodType = foodTypes[randomTypeIndex];
      var foodElement = createFoodElement(foodType);
      foodElement.id = foodType + "_" + i;
      foodElement.addEventListener("dragstart", drag);
      foodContainer.appendChild(foodElement);
    }
  }

  // Attach drop event listener to buckets
  var buckets = document.getElementsByClassName("bucket");
  for (var j = 0; j < buckets.length; j++) {
    buckets[j].addEventListener("drop", drop);
    buckets[j].addEventListener("dragover", allowDrop);
  }

  // Attach event listener to the restart button
  restartBtn.addEventListener("click", function() {
    // Reload the page
    location.reload();
  });

  // Initial spawn of food items
  spawnFoodItems();
});
