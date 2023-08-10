const levels = [
    {
        question: {
            shape: "circle",
            text: "Circle",
        },
        options: [
            { shape: "circle", image: "images/tyre.png" },
            { shape: "square", image: "images/giftbox.png" },
            { shape: "triangle", image: "images/pizza.png" }
        ],
    },
    {
        question: {
            shape: "square",
            text: "Square",
        },
        options: [
            { shape: "square", image: "images/giftbox.png" },
            { shape: "triangle", image: "images/pizza.png" },
            { shape: "oval", image: "images/ballons.png" }

        ],
    },
    {
        question: {
            shape: "triangle",
            text: "Triangle",
        },
        options: [
            { shape: "rhombus", image: "images/kite.png" },
            { shape: "triangle", image: "images/pizza.png" },
            { shape: "circle", image: "images/tyre.png" }
        ],
    },
    {
        question: {
            shape: "rhombus",
            text: "Rhombus",
        },
        options: [
            { shape: "rhombus", image: "images/kite.png" },
            { shape: "triangle", image: "images/pizza.png" },
            { shape: "square", image: "images/giftbox.png" }
        ],
    },
    {
        question: {
            shape: "oval",
            text:  "Oval",
        },
        options: [
            { shape: "rhombus", image: "images/kite.png" },
            { shape: "triangle", image: "images/pizza.png" },
            { shape: "oval", image: "images/ballons.png" }
        ],
    },
    {
        question: {
            shape: "star",
            text:  "Star",
        },
        options: [
            { shape: "star", image: "images/star-fruit.png" },
            { shape: "triangle", image: "images/pizza.png" },
            { shape: "oval", image: "images/ballons.png" }
        ],
    },
    {
        question: {
            shape: "cylinder",
            text:  "Cylinder",
        },
        options: [
            { shape: "cylinder", image: "images/can.png" },
            { shape: "circle", image: "images/tyre.png" },
            { shape: "oval", image: "images/ballons.png" }
        ],
    },
    {
        question: {
            shape: "crescent",
            text:  "Crescent",
        },
        options: [
            { shape: "crescent", image: "images/moon.png" },
            { shape: "circle", image: "images/tyre.png" },
            { shape: "oval", image: "images/ballons.png" }
        ],
    },
    {
        question: {
            shape: "cone",
            text:  "Cone",
        },
        options: [
            { shape: "cone", image: "images/ice-cream.png" },
            { shape: "cone", image: "images/pizza.png" },
            { shape: "rhombus", image: "images/kite.png" }
        ],
    },
    {
        question: {
            shape: "triangular",
            text:  "Triangular",
        },
        options: [
            { shape: "cone", image: "images/ice-cream.png" },
            { shape: "triangle", image: "images/pizza.png" },
            { shape: "triangular", image: "images/tent.png" }
        ],
    },
    {
        question: {
            shape: "hexagonal",
            text:  "Hexagonal",
        },
        options: [
            { shape: "cone", image: "images/ice-cream.png" },
            { shape: "hexagonal", image: "images/nut.png" },
            { shape: "triangular", image: "images/tent.png" }
        ],
    },
    {
        question: {
            shape: "ellipse",
            text:  "Ellipse",
        },
        options: [
            { shape: "ellipse", image: "images/makeup.png" },
            { shape: "circle", image: "images/tyre.png" },
            { shape: "oval", image: "images/ballons.png" }
        ],
    }

    // Add more levels with different shapes and options
];

let currentLevel = 0;
let allowClick = true; // To prevent clicks during shake animation

// Create audio elements for sound effects
const matchSound = new Audio("SFX/match_sound.mp3");
const nonMatchSound = new Audio("SFX/non_match_sound.mp3");

// Preload the audio files
matchSound.preload = "auto";
nonMatchSound.preload = "auto";
matchSound.load();
nonMatchSound.load();

// Get DOM elements
const questionShape = document.querySelector(".question-shape");
const questionText = document.querySelector(".question-text");
const shapes = document.querySelectorAll(".shape");
const levelDisplay = document.querySelector(".level-display");
const nextButton = document.querySelector(".next-button");

// Function to set the question shape and options for the current level
function setShapes() {
    const currentLevelData = levels[currentLevel];
    const question = currentLevelData.question.shape;
    const questionTextContent = currentLevelData.question.text;
    const options = [...currentLevelData.options];

    // Set question shape image and text
    questionShape.style.backgroundImage = `url('images/${question}.png')`;
    questionText.textContent = questionTextContent;
    levelDisplay.textContent = `Level: ${currentLevel + 1}`;

    // Shuffle the options to randomize their order
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    // Set shape options
    shapes.forEach((shape, index) => {
        shape.style.backgroundImage = `url('${options[index].image}')`;
        shape.dataset.shape = options[index].shape;
        shape.style.display = "block"; // Reset shape option opacity
        shape.classList.remove("fade-out");
        shape.classList.remove("match"); // Remove the 'match' class from all shapes
        shape.classList.remove("wrong-match"); // Remove the 'wrong-match' class from all shapes
    });

    allowClick = true; // Reset the allowClick flag
    nextButton.style.display = "none"; // Hide the Next Level button

        // Reset the bounce-in animation by removing and re-adding the class
    questionShape.classList.remove("bounce-in");
    void questionShape.offsetWidth; // Trigger reflow (Forcing a repaint) to restart the animation
    questionShape.classList.add("bounce-in");  

    // Re-enable click event listeners after a short delay
    setTimeout(() => {
        shapes.forEach((shape) => {
            shape.onclick = allowClick ? checkAnswer : null;
        });
    }, 200); // Adjust the delay (ms) as needed to ensure the click events are set after resetting the flag
}

// Function to check if the clicked shape matches the question shape
function checkAnswer(event) {
    const clickedShape = event.target;
    const selectedOptionShape = clickedShape.dataset.shape;
    const correctShape = levels[currentLevel].question.shape;

    if (selectedOptionShape === correctShape) {
        showMessageInQuestion("Correct! Click Next Level to proceed.");
        allowClick = false; // Prevent clicks during message display
        shapes.forEach((shape, index) => {
          if (shape !== clickedShape) {
            setTimeout(() => {
              shape.classList.add('fade-out');
            }, 150 * index); // Delay each shape's fade-out animation by 500ms * index
          }
        });

        // After the animation is completed, hide the shapes by setting their display to "none"
        setTimeout(() => {
          shapes.forEach((shape) => {
            if (shape !== clickedShape) {
                shape.style.display = "none";
            }
          });
        }, 150 * shapes.length); // Wait for the last shape to finish its animation before hiding them all

        playSound(matchSound);
        clickedShape.classList.add("match"); // Apply the 'match' class to the clicked shape
        nextButton.style.display = "block"; // Show the Next Level button
    } else {
        // If the answer is wrong, shake the question shape and display a message
        allowClick = false; // Prevent clicks during shake animation
        playSound(nonMatchSound);
        questionShape.classList.add("shake");
        showMessageInQuestion("Wrong! Try again.");
        shapes.forEach((shape) => {
            shape.classList.remove("match"); // Remove the 'match' class from all shapes
        });
        clickedShape.classList.add("wrong-match"); // Apply the 'wrong-match' class to the clicked shape
        setTimeout(() => {
            questionShape.classList.remove("shake");
            questionShape.classList.remove("bounce-in"); 
            allowClick = true; // Re-enable clicks after shake animation
            shapes.forEach((shape) => {
                shape.classList.remove("wrong-match"); // Remove the 'wrong-match' class from all shapes
                showMessageInQuestion(levels[currentLevel].question.text); // Show the shape text back after 3 seconds
            });
        }, 1000);
    }
}

// Function to show a message in the question text
function showMessageInQuestion(message) {
    questionText.textContent = message;
}

// Function to proceed to the next level
function nextLevel() {
     setTimeout(() => {
            currentLevel++;
            setShapes(); // Reset shapes and start the next level     
        }, 500);
}

function playSound(audio) {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
}

// Function to preload images and audio files
function preloadResources() {
  const currentLevelData = levels[currentLevel];
  const questionImage = `images/${currentLevelData.question.shape}.png`;
  const optionImages = currentLevelData.options.map((option) => option.image);
  const audioFiles = ["SFX/match_sound.mp3", "SFX/non_match_sound.mp3"]; // Add more audio files here if needed

  const totalResources = optionImages.length + audioFiles.length + 1; // +1 for the question image
  let resourcesLoaded = 0;

// Function to check if all resources are loaded
function checkAllResourcesLoaded() {
  resourcesLoaded++;
  const loadingBar = document.querySelector(".loading-bar");
  const loadingProgressText = document.querySelector(".loading-progress");
  const progress = (resourcesLoaded / totalResources) * 100;

  // Update the loading bar and text
  loadingBar.style.width = `${progress}%`;
  loadingProgressText.textContent = `Loading... ${Math.round(progress)}%`;

  if (resourcesLoaded === totalResources) {
    if (progress >= 90) {
      setTimeout(() => {
        hideLoadingScreen();
        setShapes(); // Start the game after all resources are loaded
      }, 1000); // Add a 1-second (1000ms) delay after reaching 90% progress
    } else {
      const remainingProgress = 90 - progress;
      setTimeout(() => {
        hideLoadingScreen();
        setShapes(); // Start the game after all resources are loaded
      }, remainingProgress * 10); // Add a delay proportional to the remaining progress needed to reach 90%
    }
  }
}

  // Preload the question image
  const questionImageElement = new Image();
  questionImageElement.src = questionImage;
  questionImageElement.onload = checkAllResourcesLoaded;

  // Preload option images
  optionImages.forEach((imagePath) => {
    const optionImageElement = new Image();
    optionImageElement.src = imagePath;
    optionImageElement.onload = checkAllResourcesLoaded;
  });

  // Preload audio files
  audioFiles.forEach((audioPath) => {
    const audio = new Audio();
    audio.src = audioPath;
    audio.oncanplaythrough = checkAllResourcesLoaded;
  });
}

// Function to hide the loading screen
function hideLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
}

// Call the function to preload resources before showing the game content
preloadResources();