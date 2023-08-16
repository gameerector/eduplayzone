let gameLevel = [
  [
    { name: "lion", match: "child-lion" },
    { name: "elephant", match: "baby-elephant" },
    { name: "giraffe", match: "baby-giraffe" }
  ],
  [
    { name: "football", match: "ball" },
    { name: "cricket", match: "cricket bat" },
    { name: "PV Sindhu", match: "PV Sindhu-badminton" }
  ],
  [
    { name: "bee", match: "hive-bee" },
    { name: "frog", match: "marsh-frog" },
    { name: "spider", match: "web-spider" }
  ],
  [
    { name: "cat", match: "child-cat" },
    { name: "dog", match: "child-dog" },
    { name: "henn", match: "child-henn" }
  ],
  [
    { name: "ant", match: "shell-ant" },
    { name: "bird", match: "nest-bird" },
    { name: "rat", match: "hole-rat" }
  ],
  [
    { name: "cow", match: "milk-cows" },
    { name: "hen", match: "egg-hens" },
    { name: "sheep", match: "fur-sheep" }
  ],
  [
    { name: "train", match: "track-train" },
    { name: "boat", match: "sea-boat" },
    { name: "bus", match: "road-bus" }
  ],
  [
    { name: "arvind", match: "aap-arvind" },
    { name: "naren", match: "bjp-naren" },
    { name: "rahul", match: "bjd-rahul" }
  ],
  [
    { name: "bitter", match: "clim-bitter" },
    { name: "carrot", match: "tree-carrot" },
    { name: "watermelon", match: "creep-watermelon" }
  ],
  [
    { name: "apple", match: "tree-apple" },
    { name: "banana", match: "tree-banana" },
    { name: "coconut", match: "tree-coconut" }
  ],
  [
    { name: "bear", match: "snow-bear" },
    { name: "buck", match: "doe-buck" },
    { name: "bee-drone", match: "drone" },
    { name: "lionn", match: "lioness-lionn" },
    { name: "bull", match: "cow-bull" }
  ],
  [
    { name: "ballon", match: "red-ballon" },
    { name: "gapple", match: "green-gapple" },
    { name: "minnion", match: "yellow-minnion" },
    { name: "bcar", match: "blue-bcar" },
    { name: "orange", match: "o-orange" }
  ],
  [
    { name: "cA", match: "sa-cA" },
    { name: "cR", match: "sr-cR" },
    { name: "cP", match: "sp-cP" },
    { name: "cI", match: "si-cI" },
    { name: "cT", match: "st-cT" }
    
  ],
  [
    { name: "body", match: "shirts-body" },
    { name: "foot", match: "shoe-foot" },
    { name: "hand-globe", match: "globe" },
    { name: "head", match: "hat-head" },
    { name: "leg", match: "pant-leg" }
  ],
  [
    { name: "D", match: "doc-D" },
    { name: "A", match: "apple-A" },
    { name: "S", match: "sun-S" },
    { name: "H", match: "heart-H" },
    { name: "M", match: "Mango-M" }
  ],
  [
    { name: "butterfly", match: "flower-butterfly" },
    { name: "bwool", match: "Shirt-bwool" },
    { name: "Gapplee", match: "jam-Gapplee" },
    { name: "Jlemon", match: "juice-Jlemon" },
    { name: "paint", match: "pic-paint" }
  ],
  [
    { name: "button", match: "niddle-button" },
    { name: "hanger", match: "cloth-hanger" },
    { name: "cloud", match: "umb-cloud" },
    { name: "pencil", match: "notes-pencil" },
    { name: "water", match: "fish-water" }
  ],
  [
    { name: "Hospital", match: "Ambulance-Hospital" },
    { name: "Building-Ctruck", match: "Ctruck" },
    { name: "Rocket", match: "earth-Rocket" },
    { name: "firehouse-Firetruck", match: "Firetruck" },
    { name: "School-Sbus", match: "Sbus" }
  ],
  [
    { name: "bbird", match: "fp-bbird" },
    { name: "croc", match: "fp-croc" },
    { name: "eleph", match: "fp-eleph" },
    { name: "hhorse", match: "fp-hhorse" },
    { name: "tiger", match: "fp-tiger" }
  ],
  [
    { name: "monkey", match: "banana-monkey" },
    { name: "rabbitt", match: "carrot-rabbitt" },
    { name: "bbear", match: "honey-bbear" },
    { name: "ccat", match: "fish-ccat" },
    { name: "ddog", match: "bone-ddog" }
  ],
  [
    { name: "bru", match: "s-bru" },
    { name: "toot", match: "b-toot" },
    { name: "cln", match: "t-cln" },
    { name: "dust", match: "j-dust" },
    { name: "hair", match: "c-hair" }
  ],
  [
    { name: "arc", match: "arr-arc" },
    { name: "badd", match: "shu-badd" },
    { name: "boardd", match: "dart-boardd" },
    { name: "bowling", match: "pin-bowling" },
    { name: "disc", match: "bo-disc" }
  ],
  [
    { name: "A 200", match: "d-A 200" },
    { name: "A 315", match: "d-A 315" },
    { name: "A 620", match: "d-A 620" },
    { name: "A 700", match: "d-A 700" },
    { name: "A 1145", match: "d-A 1145" }
  ],
  [
    { name: "axe", match: "wd-axe" },
    { name: "ham", match: "kn-ham" },
    { name: "karat", match: "woo-karat" },
    { name: "pana", match: "bol-pana" },
    { name: "test", match: "scr-test" }
  ],
  [
    { name: "drw", match: "cmp-drw" },
    { name: "Mcpy", match: "bag-Mcpy" },
    { name: "ncpy", match: "pen-ncpy" },
    { name: "painttt", match: "bro-painttt" },
    { name: "rulr", match: "pec-rulr" }
  ],
  [
    { name: "crossing", match: "sign-crossing" },
    { name: "firstaid", match: "thermo-firstaid" },
    { name: "frypan", match: "fire-frypan" },
    { name: "key", match: "lock-key" },
    { name: "piggybank", match: "coin-piggybank" }
  ],
  [
    { name: "hump", match: "sign-hump" },
    { name: "petrolpump", match: "sign-petrolpump" },
    { name: "rightturn", match: "sign-rightturn" },
    { name: "roadwork", match: "sign-roadwork" },
    { name: "twoway", match: "sign-twoway" }
  ],
  [
    { name: "blue", match: "color-blue" },
    { name: "orangee", match: "color-orangee" },
    { name: "reed", match: "color-reed" },
    { name: "violet", match: "color-violet" },
    { name: "yelloow", match: "color-yelloow" }
  ],
  [
    { name: "angry", match: "f-angry" },
    { name: "cry", match: "f-cry" },
    { name: "Happy", match: "f-Happy" },
    { name: "sad", match: "f-sad" },
    { name: "sleep", match: "f-sleep" }
  ],
  [
    { name: "autumn", match: "t-autumn" },
    { name: "rainy", match: "t-rainy" },
    { name: "spring", match: "t-spring" },
    { name: "summer", match: "t-summer" },
    { name: "winter", match: "t-winter" }
  ],
  // Add more levels and their corresponding image pairs
];

let selectedImage1 = null;
let selectedImage2 = null;
let matchCount = 0;
let currentLevel = 0;

// Create audio elements for sound effects
const matchSound = new Audio("SFX/match_sound.mp3");
const nonMatchSound = new Audio("SFX/non_match_sound.mp3");
const nextLevelButton = document.getElementById("next-level-button");


// Preload the audio files
matchSound.preload = "auto";
nonMatchSound.preload = "auto";
matchSound.load();
nonMatchSound.load();

document.addEventListener("DOMContentLoaded", () => {
  // Check if game level is saved
  const savedLevel = localStorage.getItem("lastPlayedLevel");
  if (savedLevel && savedLevel <= Object.keys(gameLevel).length) {
    currentLevel = parseInt(savedLevel);
    showPopup();
  } else {
      setupGame();
  }
});

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  const continueButton = document.getElementById("continue-button");
  const newGameButton = document.getElementById("new-game-button");

  continueButton.addEventListener("click", () => {
    popup.style.display = "none";
    currentLevel = parseInt(localStorage.getItem("lastPlayedLevel") - 1); // Update current level
    setupGame();
  });

  newGameButton.addEventListener("click", () => {
    localStorage.removeItem("lastPlayedLevel");
    currentLevel = 0;
    popup.style.display = "none";
    setupGame();
    location.reload();
  });
}

function setupGame() {
  const leftImagesContainer = document.getElementById("left-images");
  const rightImagesContainer = document.getElementById("right-images");

  const currentLevelData = gameLevel[currentLevel];

  // Create image elements and add event listeners for the current level
  for (let i = 0; i < 5; i++) {
    const leftRow = document.createElement("div");
    leftRow.classList.add("image-row");

    const rightRow = document.createElement("div");
    rightRow.classList.add("image-row");

    const matchedPairs = [];

    for (let j = 0; j < 5; j++) {
      const index = i * 5 + j;
      if (index >= currentLevelData.length) {
        break;
      }

      const leftImage = createImageElement(currentLevelData[index].name, "left", index);
      leftRow.appendChild(leftImage);

      const rightImage = createImageElement(currentLevelData[index].match, "right", index);
      rightRow.appendChild(rightImage);

      matchedPairs.push(index);
    }

    shuffleArray(matchedPairs); // Shuffle the matched pairs

    // Append the matched pairs to the right row
    matchedPairs.forEach((pairIndex) => {
      rightRow.appendChild(rightRow.children[pairIndex]);
    });

    shuffleArray(leftRow.children); // Shuffle the left images within the row

    leftImagesContainer.appendChild(leftRow);

    // Append the right row only if there are matched pairs
    if (matchedPairs.length > 0) {
      rightImagesContainer.appendChild(rightRow);
    }
  }
  updateLevelText();
  console.log(`Level ${currentLevel + 1} is being played.`);
}

// Rest of the code...

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createImageElement(imageId, side, index) {
  const imageElement = document.createElement("div");
  imageElement.classList.add("image");
  imageElement.id = `${imageId}-${side}-${index}`; // Update the ID to include the index
  imageElement.style.backgroundImage = `url('${getImageURL(imageId)}')`;
  imageElement.dataset.name = imageId; // Store the name for comparison
  imageElement.addEventListener("click", () => imageClickHandler(imageElement, side));

  return imageElement;
}

function imageClickHandler(imageElement, side) {
  selectImage(imageElement, side);
}

function selectImage(imageElement, side) {
  // Ignore clicks on already matched images or when two images are already selected
  if (imageElement.classList.contains("matched") || imageElement.classList.contains("selected")) {
    return;
  }

  // Update the selected image based on the side
  if (selectedImage1 === null) {
    selectedImage1 = imageElement;
    selectedImage1.classList.add("selected");
  } else if (selectedImage2 === null) {
    selectedImage2 = imageElement;
    selectedImage2.classList.add("selected");

    // Disable clicking on other images temporarily
    disableImageClicks();

    // Delay before checking the match
    setTimeout(() => {
      checkMatch();
      // Re-enable clicking on other images
      enableImageClicks();
    }, 500);
  }
}

function checkMatch() {
  const name1 = selectedImage1.dataset.name;
  const name2 = selectedImage2.dataset.name;

  if (name1.includes(name2) || name2.includes(name1)) {
    matchCount++;
    selectedImage1.classList.add("matched");
    selectedImage2.classList.add("matched");

 // Play the match sound effect
      playSound(matchSound);

    selectedImage1.classList.remove("selected");
    selectedImage2.classList.remove("selected");

    selectedImage1.removeEventListener("click", () => selectImage(selectedImage1, selectedImage1.dataset.side));
    selectedImage2.removeEventListener("click", () => selectImage(selectedImage2, selectedImage2.dataset.side));

    selectedImage1 = null;
    selectedImage2 = null;

    if (matchCount === gameLevel[currentLevel].length) {
      setTimeout(() => {
        showResultPanel();
      }, 500);
    }
  } else {
    selectedImage1.classList.add("wrong-match");
    selectedImage2.classList.add("wrong-match");

    // Play the non-match sound effect
      playSound(nonMatchSound);

    setTimeout(() => {
      selectedImage1.classList.remove("selected", "wrong-match");
      selectedImage2.classList.remove("selected", "wrong-match");
      selectedImage1 = null;
      selectedImage2 = null;
    }, 500);
  }
}

  function playSound(audio) {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
  }

function disableImageClicks() {
  const images = document.getElementsByClassName("image");
  for (let i = 0; i < images.length; i++) {
    images[i].removeEventListener("click", () => selectImage(images[i], images[i].dataset.side));
  }
}

function enableImageClicks() {
  const images = document.getElementsByClassName("image");
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => selectImage(images[i], images[i].dataset.side));
  }
}

function showResultPanel() {
  const resultPanel = document.getElementById("result-panel");
  const LevelText = document.getElementById("level-text");
  const victoryText = document.getElementById("victory-text");
  const nextLevelButton = document.getElementById("next-level-button");
  const didYouKnowSection = document.getElementById("did-you-know-section");
  const didYouKnowImage = document.getElementById("did-you-know-image");
  const didYouKnowText = document.getElementById("did-you-know-text");
  const speakButton = document.getElementById("speak-button");

  LevelText.textContent = `Level ${currentLevel + 1}`;
  victoryText.textContent = `Completed! You matched all the pairs.`;
  resultPanel.style.display = "block";

  // Update the "Did You Know" section based on the current level
  if (didYouKnowData[currentLevel + 1]) {
    const { image, text } = didYouKnowData[currentLevel + 1];
    didYouKnowImage.src = image;
    didYouKnowText.textContent = text;
    didYouKnowSection.style.display = "block";

    speakButton.addEventListener("click", () => {
      speakText(text);
    });
  } else {
    didYouKnowSection.style.display = "none";
  }

  nextLevelButton.addEventListener("click", nextLevelButtonClick);
}

function nextLevelButtonClick() {
  const resultPanel = document.getElementById("result-panel");
  const continueButton = document.getElementById("continue-button");
  const newGameButton = document.getElementById("new-game-button");
  const textMessage = document.getElementById("message-TEXT");

  if (currentLevel === Object.keys(gameLevel).length - 1) {
    // Show the popup
    resultPanel.style.display = "none";
    textMessage.textContent = " Congratulations you completed all levels"
    continueButton.style.display = "none";
    newGameButton.textContent = "Play Again";
    newGameButton.style.color = "white";
    showPopup();
  } else {
    // Proceed to the next level
    resultPanel.style.display = "none";
    nextLevel();
  }
}

function speakText(text, rate = 0.8) {
  const speechSynthesis = window.speechSynthesis;
  const nextLevelButton = document.getElementById("next-level-button");
  const speakButton = document.getElementById("speak-button");


  // Disable the next level button
  speakButton.style.color = "orangered";
  nextLevelButton.disabled = true;
  nextLevelButton.style.opacity = 0.5;

   // Add the 'pulse' class to the speak button
  speakButton.classList.add("pulse");

  // Cancel any ongoing speech synthesis
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance( text);
  utterance.lang = "hi-IN"; // Set the language code for Indian accent
  utterance.rate = rate; // Set the speech rate (0.1 - 10.0)


  // Event listener for when speech synthesis finishes
  utterance.onend = () => {
    // Enable the next level button
    speakButton.style.color = "black";
    nextLevelButton.disabled = false;
    nextLevelButton.style.opacity = 1;
      // Remove the 'pulse' class from the speak button
    speakButton.classList.remove("pulse");
  };

  speechSynthesis.speak(utterance);
}



function resetSelections() {
  selectedImage1.classList.remove("selected");
  selectedImage2.classList.remove("selected");

  selectedImage1 = null;
  selectedImage2 = null;
}
// Function to update the level text
function updateLevelText() {
  const prevLevelElement = document.getElementById("prev-level");
  const currentLevelElement = document.getElementById("current-level");
  const nextLevelElement = document.getElementById("next-level");

  const currentLevel = parseInt(localStorage.getItem("lastPlayedLevel")) || 1;
  const prevLevel = currentLevel > 1 ? currentLevel - 1 : "";
  const nextLevel = currentLevel < Object.keys(gameLevel).length ? currentLevel + 1 : "";

  prevLevelElement.textContent = prevLevel;
  currentLevelElement.textContent = currentLevel;
  nextLevelElement.textContent = nextLevel;
}

// Function to handle next level
function nextLevel() {
  console.log(`Next Level button pressed. Level ${currentLevel}`);
  matchCount = 0;
  const prevLevel = currentLevel;
  currentLevel++;

  if (currentLevel > Object.keys(gameLevel).length) {
    alert("Congratulations! You have completed all levels.");
    return
  }

  // Save the current level in localStorage
  localStorage.setItem("lastPlayedLevel", currentLevel);

  // Update the level text
  updateLevelText();

  // Clear the game board
  const leftImagesContainer = document.getElementById("left-images");
  const rightImagesContainer = document.getElementById("right-images");
  leftImagesContainer.innerHTML = "";
  rightImagesContainer.innerHTML = "";

  // Setup the game for the next level
  setupGame();

  // Update the level text after setting up the game
  const nextLevel = currentLevel < Object.keys(gameLevel).length ? currentLevel + 1 : "";
  document.getElementById("prev-level").textContent = prevLevel + 1;
  document.getElementById("current-level").textContent = currentLevel + 1;
  document.getElementById("next-level").textContent = nextLevel + 1;
}


// Add event listener to the next level button
nextLevelButton.addEventListener("click", () => {
  resultPanel.style.display = "none";
  nextLevel();
});

function getImageURL(imageId) {
  // Assuming the images are located in a folder named "images/"
  const imageUrl = `images/${imageId}.jpg`; // Adjust the file extension based on your image file format
  return imageUrl;
}


document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const loadingBar = document.querySelector(".loading-bar");

  // Array to store image URLs
  const imageUrls = [];

  // Function to get the image URL for each level
  function getLevelImageUrls(levelData) {
    return levelData.reduce((urls, imageData) => {
      const imageName1 = imageData.name;
      const imageName2 = imageData.match;
      urls.push(getImageURL(imageName1));
      urls.push(getImageURL(imageName2));
      return urls;
    }, []);
  }

  // Divide the levels into first 5 and the rest
  const firstFiveLevels = gameLevel.slice(0, 5);
  const remainingLevels = gameLevel.slice(5);

  // Get image URLs for the first 5 levels
  const firstFiveImageUrls = firstFiveLevels.flatMap(getLevelImageUrls);
  imageUrls.push(...firstFiveImageUrls);

  let loadedImageCount = 0;

  // Function to preload images and update progress bar
  function preloadImage(url) {
    const img = new Image();
    img.onload = () => {
      loadedImageCount++;
      const progress = (loadedImageCount / imageUrls.length) * 100;
      loadingBar.style.width = progress + "%";
      document.querySelector(".loading-progress").textContent = `Loading... ${progress.toFixed(0)}%`;

      // Check if all images are loaded
      if (loadedImageCount === imageUrls.length) {
        // Hide the loading screen and start the game
        setTimeout(() => {
          loadingScreen.style.display = "none";
          // Call the function to start loading remaining images in the background
          loadRemainingImagesInBackground();
        }, 500);
      }
    };
    img.src = url;
  }

  // Start preloading images for the first 5 levels
  imageUrls.forEach(preloadImage);

  // Function to load remaining images in the background
  function loadRemainingImagesInBackground() {
    // Get image URLs for the remaining levels
    const remainingImageUrls = remainingLevels.flatMap(getLevelImageUrls);
    
    // Start preloading images for the remaining levels in the background
    remainingImageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }
});
