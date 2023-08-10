// Function to create a food element with a random emoji based on its type
function createFoodElement(type) {
  var foodElement = document.createElement("span");
  foodElement.className = "food";
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
      var fastFoodEmojis = ["\uD83C\uDF54", "\uD83C\uDF5F", "\uD83C\uDF55", "\uD83E\uDD6A", ];
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

window.onload = function() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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

 var touchStartPosition = { x: 0, y: 0 };
  var currentDraggedElement = null;

  // Function to get the position of the touch event relative to the viewport
  function getTouchPosition(event) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  }

  // Function to move the dragged food element
  function moveFoodElement(touchPosition) {
    currentDraggedElement.style.left = touchPosition.x - currentDraggedElement.offsetWidth / 2 + "px";
    currentDraggedElement.style.top = touchPosition.y - currentDraggedElement.offsetHeight / 2 + "px";
  }

  // Function to handle touchstart event
  function touchStart(event) {
    event.preventDefault();
    var foodId = event.target.id;
    var foodElement = document.getElementById(foodId);
    foodElement.style.transform = "scale(1.02)"; // Optional: Add a visual feedback for touch
    foodElement.classList.add("dragging");
    
    var touchPosition = getTouchPosition(event);

    touchStartPosition.x = touchPosition.x;
    touchStartPosition.y = touchPosition.y;
    currentDraggedElement = foodElement;

    // Attach touchmove and touchend listeners to the food element
    foodElement.addEventListener("touchmove", touchMove);
    foodElement.addEventListener("touchend", touchEnd);
  }

  // Function to handle touchmove event
  function touchMove(event) {
    event.preventDefault();
    var touchPosition = getTouchPosition(event);
    var deltaX = touchPosition.x - touchStartPosition.x;
    var deltaY = touchPosition.y - touchStartPosition.y;
    moveFoodElement(touchPosition);
   currentDraggedElement.style.transform = "translate(" + deltaX + "px, " + deltaY + "px) scale(1.5)";

  }

function touchEnd(event) {
  event.preventDefault();
  var foodId = event.target.id;
  var foodElement = document.getElementById(foodId);
  var bucketElement = null;

  // Check if the food element overlaps with a bucket
  var foodRect = foodElement.getBoundingClientRect();
  var buckets = document.getElementsByClassName("bucket");
  for (var i = 0; i < buckets.length; i++) {
    var bucketRect = buckets[i].getBoundingClientRect();
    if (
      foodRect.left >= bucketRect.left &&
      foodRect.right <= bucketRect.right &&
      foodRect.top >= bucketRect.top &&
      foodRect.bottom <= bucketRect.bottom
    ) {
      bucketElement = buckets[i];
      break;
    }
  }
     foodElement.classList.remove("dragging");
  // Reset the transform style of the dragged element
  currentDraggedElement.style.transform = "none";

  if (bucketElement) {
    foodElement.style.transform = "rotate(" + getRandomRotation() + "deg)"; // Set random rotation
    bucketElement.classList.add("inside-bucket");
    foodElement.classList.add("inside-bucket");
    bucketElement.appendChild(foodElement);
  }

  checkGameStatus();

  // Remove touchmove and touchend listeners from the food element
  currentDraggedElement.removeEventListener("touchmove", touchMove);
  currentDraggedElement.removeEventListener("touchend", touchEnd);
  currentDraggedElement = null;
}



  // Attach touch event listeners for touch feedback and custom drag and drop on mobile
function attachTouchListeners() {
    var foodItems = document.querySelectorAll(".food");
    foodItems.forEach(function(foodItem) {
      foodItem.addEventListener("touchstart", touchStart);
      foodItem.addEventListener("touchend", touchEnd);
      foodItem.addEventListener("touchmove", touchMove);
    });
  }
  // Remove touch event listeners on desktop
  function removeTouchListeners() {
    var foodItems = document.querySelectorAll(".food");
    foodItems.forEach(function(foodItem) {
      foodItem.removeEventListener("touchstart", touchStart);
      foodItem.removeEventListener("touchmove", touchMove);
      foodItem.removeEventListener("touchend", touchEnd);
    });
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

    checkGameStatus();
  }

  function checkGameStatus() {
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
        restartBtn.textContent = "Next Level";
      } else {
        result.textContent = "Oops! Some food items are not sorted correctly.";
        score -= 5;
        restartBtn.textContent = "Try Again";
      }

      updateScore();

      // Show the restart button
      restartBtn.style.display = "block";
    }
  }

  function spawnFoodItems(type) {
  for (var i = 1; i <= 10; i++) {
    var randomTypeIndex = Math.floor(Math.random() * foodTypes.length);
    var foodType = foodTypes[randomTypeIndex];
    var foodElement = createFoodElement(foodType);
    foodElement.id = foodType + "_" + i;

    if (isMobile) {
      // For mobile devices, add touch event listeners for touch feedback
      foodElement.addEventListener("touchstart", touchStart);
      foodElement.addEventListener("touchend", touchEnd);
      foodElement.addEventListener("touchmove", touchMove);
    }
     else {
      // For desktop devices, add drag event listeners for drag and drop
      foodElement.draggable = true;
      foodElement.addEventListener("dragstart", drag);
      foodElement.addEventListener("dragend", function() {
        foodElement.style.transform = "none"; // Reset transform after drag
      });
    }

    foodContainer.appendChild(foodElement);
  }
}

  function getRandomRotation() {
    var minRotation = -10; // Minimum rotation in degrees
    var maxRotation = 10; // Maximum rotation in degrees
    var randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
    return randomRotation;
  }

// Attach touch or drag event listeners to food items based on the device type
var foodItems = document.querySelectorAll(".food");
if (isMobile) {
  // For mobile devices, add touch event listeners for touch feedback and custom drag and drop
    foodItems.forEach(function(foodItem) {
      foodItem.addEventListener("touchstart", touchStart);
    });
} else {
  // For desktop devices, add drag event listeners for drag and drop
  foodItems.forEach(function(foodItem) {
    foodItem.draggable = true;
    foodItem.addEventListener("dragstart", drag);
    foodItem.addEventListener("dragend", function() {
      foodItem.style.transform = "none"; // Reset transform after drag
    });
  });

  // Attach drop event listener to buckets (only for desktop devices)
  var buckets = document.getElementsByClassName("bucket");
  for (var j = 0; j < buckets.length; j++) {
    buckets[j].addEventListener("drop", drop);
    buckets[j].addEventListener("dragover", allowDrop);
  }
}

  // Attach event listener to the restart button
  restartBtn.addEventListener("click", function() {
    // Reload the page
    location.reload();
  });

  // Initial spawn of food items
  spawnFoodItems();
};
