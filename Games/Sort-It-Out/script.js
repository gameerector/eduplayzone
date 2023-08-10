document.addEventListener("DOMContentLoaded", function () {
  var foodContainer = document.getElementById("foodContainer");
  var restartBtn = document.getElementById("restartBtn");
  var result = document.getElementById("result");
  var scoreValue = document.getElementById("scoreValue");

  var foodTypes = ["apple", "book", "car", "Watermelon", "mango", "auto", "ball",];

  var score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;

  //function for play Drop audio after Dropped  
  function playDropAudio() {
    const audio = new Audio(`audio/Pop.mp3`);
    audio.play();
  }

   //function for play Win audio   
  function playWinAudio() {
    const winaudio = new Audio(`audio/win.mp3`);
    winaudio.play();
  }
  //function for play Lose audio   
  function playLoseAudio() {
    const loseaudio = new Audio(`audio/lose.mp3`);
    loseaudio.play();
  }

  // Function to update the score
  function updateScore() {
    scoreValue.textContent = score;
    localStorage.setItem("score", score.toString());
  }
updateScore();

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

    if (bucketElement.classList.contains("bucket-inner")) {
      playDropAudio();
      var bucketInner = bucketElement;
      bucketInner.classList.add("inside-bucket");
      foodElement.classList.add("inside-bucket");
      foodElement.style.transform = "rotate(" + getRandomRotation() + "deg)"; // Set random rotation
      bucketInner.appendChild(foodElement);
    }
    // Check if all food items are placed in the buckets
    var foodItems = document.querySelectorAll(".food");
    var isAllFoodPlaced = true;

    foodItems.forEach(function (foodItem) {
      if (!foodItem.parentNode.classList.contains("bucket-inner")) {
        isAllFoodPlaced = false;
        return;
      }
    });

    // Display the result and update the score
    if (isAllFoodPlaced) {
      var isSortedCorrectly = true;

      // Check if each food item is placed in the correct bucket
      foodItems.forEach(function (foodItem) {
        var foodType = foodItem.getAttribute("data-type");
        var bucketId = foodItem.parentNode.parentNode.getAttribute("id");

        if (
          (bucketId === "appleBucket" && foodType !== "apple") ||
          (bucketId === "bookBucket" && foodType !== "book") ||
          (bucketId === "carBucket" && foodType !== "car") ||
          (bucketId === "mangoBucket" && foodType !== "mango") ||
          (bucketId === "autoBucket" && foodType !== "auto") ||
          (bucketId === "ballBucket" && foodType !== "ball")
        ) {
          isSortedCorrectly = false;
        }
      });

      // Display the result and update the score
      if (isSortedCorrectly) {
        playWinAudio();
        result.textContent = "Congratulations! Level UP";
        result.style.color = "blue";
        score += 10;
        restartBtn.textContent = "Next Level";
      } else {
        playLoseAudio();
        result.textContent = "Oops! You Got Wrong";
        score -= 5;
        restartBtn.textContent = "Try Again";
        restartBtn.style.background = "red";
        result.style.color = "red";  
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
      case "apple":
        emoji = "🍎";
        break;
      case "book":
        emoji = "📘";
        break;
      case "car":
        emoji = "🚗";
        break;
      case "nut":
        emoji = "🌰";
        break;
      case "mango":
        emoji = "🥭";
        break;
      case "auto":
        emoji = "🛺";
        break;
      case "ball":
        emoji = "⚽";
        break;
      case "Watermelon":
        emoji = "🍉";
        break;  
      default:
        emoji = "🍽️"; // Fork and knife emoji
        break;
    }

    foodElement.innerText = emoji;
    return foodElement;
  }

  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to randomly generate bucket questions
  function generateBucketQuestions() {
    var bucketsContainer = document.getElementById("bucketsContainer");
    var buckets = document.getElementsByClassName("bucket");

    // Remove any existing buckets
    while (bucketsContainer.firstChild) {
      bucketsContainer.removeChild(bucketsContainer.firstChild);
    }

    // Randomly select 3 unique food types
    var bucketFoodTypes = getRandomUniqueFoodTypes(3);

    // Create a bucket for each selected food type
    bucketFoodTypes.forEach(function (foodType) {
      var bucket = document.createElement("div");
      bucket.className = "bucket";
      bucket.id = foodType + "Bucket";

      var bucketTitle = document.createElement("h2");
      bucketTitle.textContent = getEmoji(foodType) + "  ";
      var itemCount = getRandomNumber(2, 5);
      var bucketItemCount = document.createElement("span");
      bucketItemCount.textContent = itemCount;
      bucketTitle.appendChild(bucketItemCount);
      bucket.appendChild(bucketTitle);

      var bucketInner = document.createElement("div");
      bucketInner.className = "bucket-inner";
      bucket.appendChild(bucketInner);

      bucketsContainer.appendChild(bucket);
    });
  }

  // Function to get emoji based on food type
  function getEmoji(foodType) {
    var emoji;

    switch (foodType) {
      case "apple":
        emoji = "🍎";
        break;
      case "book":
        emoji = "📘";
        break;
      case "car":
        emoji = "🚗";
        break;
      case "nut":
        emoji = "🌰";
        break;
      case "mango":
        emoji = "🥭";
        break;
      case "auto":
        emoji = "🛺";
        break;
      case "ball":
        emoji = "⚽";
        break;
      case "Watermelon":
        emoji = "🍉";
        break;  
      default:
        emoji = "🍽️"; // Fork and knife emoji
        break;
    }

    return emoji;
  }

  // Function to get random unique food types
  function getRandomUniqueFoodTypes(count) {
    var uniqueFoodTypes = [];
    var availableFoodTypes = foodTypes.slice();

    for (var i = 0; i < count; i++) {
      var randomIndex = getRandomNumber(0, availableFoodTypes.length - 1);
      var foodType = availableFoodTypes[randomIndex];
      uniqueFoodTypes.push(foodType);
      availableFoodTypes.splice(randomIndex, 1);
    }

    return uniqueFoodTypes;
  }

  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Spawn random food items
  function spawnFoodItems() {
    var bucketElements = document.getElementsByClassName("bucket");

    Array.from(bucketElements).forEach(function (bucketElement) {
      var foodType = bucketElement.id.replace("Bucket", "");
      var itemCount = parseInt(bucketElement.querySelector("span").textContent);

      for (var i = 1; i <= itemCount; i++) {
        var foodElement = createFoodElement(foodType);
        foodElement.id = foodType + "_" + i;
        foodElement.addEventListener("dragstart", drag);
        foodElement.addEventListener("touchstart", touchStart);
        foodElement.addEventListener("touchmove", touchMove);
        foodElement.addEventListener("touchend", touchEnd);
        foodContainer.appendChild(foodElement);
      }
    });

    // Shuffle the food items
    var foodItems = document.querySelectorAll(".food");
    foodItems.forEach(function (foodItem) {
      foodItem.style.order = Math.floor(Math.random() * foodItems.length) + 1;
    });
  }

  // Attach drop event listener to buckets
  var bucketsContainer = document.getElementById("bucketsContainer");
  bucketsContainer.addEventListener("drop", drop);
  bucketsContainer.addEventListener("dragover", allowDrop);

  // Attach event listener to the restart button
  restartBtn.addEventListener("click", function () {
    // Reload the page

    location.reload();
  });

  // Generate bucket questions and spawn food items
  generateBucketQuestions();
  spawnFoodItems();

  // Touch event handling for mobile devices
  var touchStartPosition;
  var currentDraggedElement;

  function touchStart(event) {
    event.preventDefault();
    var touch = event.touches[0];
    touchStartPosition = {
      x: touch.clientX,
      y: touch.clientY
    };
    currentDraggedElement = event.target;
    currentDraggedElement.classList.add("dragging");
  }

  function touchMove(event) {
  event.preventDefault();
  var touch = event.touches[0];
  var deltaX = touch.clientX - touchStartPosition.x;
  var deltaY = touch.clientY - touchStartPosition.y;
  currentDraggedElement.style.transform = "translate(" + deltaX + "px, " + deltaY + "px) scale(2)";
}

 function touchEnd(event) {
  event.preventDefault();
  currentDraggedElement.classList.remove("dragging");
  currentDraggedElement.style.transform = "";
  currentDraggedElement.style.transform = "scale(1)";


  var foodElement = currentDraggedElement;
  var bucketElement = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);

  if (bucketElement.classList.contains("bucket-inner")) {
      playDropAudio();
    var bucketInner = bucketElement;
    bucketInner.classList.add("inside-bucket");
    foodElement.classList.add("inside-bucket");
    foodElement.style.transform = "rotate(" + getRandomRotation() + "deg)"; // Set random rotation
    bucketInner.appendChild(foodElement);
  }
  // Check if all food items are placed in the buckets
    var foodItems = document.querySelectorAll(".food");
    var isAllFoodPlaced = true;

    foodItems.forEach(function (foodItem) {
      if (!foodItem.parentNode.classList.contains("bucket-inner")) {
        isAllFoodPlaced = false;
        return;
      }
    });

    // Display the result and update the score
    if (isAllFoodPlaced) {
      var isSortedCorrectly = true;

      // Check if each food item is placed in the correct bucket
      foodItems.forEach(function (foodItem) {
        var foodType = foodItem.getAttribute("data-type");
        var bucketId = foodItem.parentNode.parentNode.getAttribute("id");

        if (
          (bucketId === "appleBucket" && foodType !== "apple") ||
          (bucketId === "bookBucket" && foodType !== "book") ||
          (bucketId === "carBucket" && foodType !== "car") ||
          (bucketId === "mangoBucket" && foodType !== "mango") ||
          (bucketId === "autoBucket" && foodType !== "auto") ||
          (bucketId === "ballBucket" && foodType !== "ball")
        ) {
          isSortedCorrectly = false;
        }
      });

     // foodContainer.style.display = "none";

      // Display the result and update the score
      if (isSortedCorrectly) {
        playWinAudio();
        result.textContent = "Congratulations! Level UP";
        result.style.color = "blue";
        score += 10;
        restartBtn.textContent = "Next Level";
      } else {
        playLoseAudio();
        result.textContent = "Oops! You Got Wrong";
        score -= 5;
        restartBtn.textContent = "Try Again";
        restartBtn.style.background = "red";
        result.style.color = "red"; 
      }

      updateScore();

      // Show the restart button
      restartBtn.style.display = "block";
      
    }
  

  currentDraggedElement = null;
}

});
