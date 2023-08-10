// Function to load resources (images)
function loadResources() {
  const images = document.querySelectorAll('img');
  const totalImages = images.length;
  let loadedImages = 0;

  return new Promise((resolve, reject) => {
    function imageLoaded() {
      loadedImages++;
      const progress = Math.floor((loadedImages / totalImages) * 100);
      updateLoadingProgress(progress);

      if (loadedImages === totalImages) {
        resolve();
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded);
      }
    });
  });
}

// Function to update the loading progress
function updateLoadingProgress(progress) {
  const loadingProgress = document.querySelector('.loading-progress');
  const loadingBar = document.querySelector('.loading-bar');
  loadingProgress.textContent = `Loading... ${progress}%`;
  loadingBar.style.width = `${progress}%`;
}

// Function to hide the loading screen after a delay
function hideLoadingScreenWithDelay() {
  const loadingScreen = document.querySelector('.loading-screen');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 2500); // 1500 milliseconds = 1.5 seconds
}

// Add an event listener to wait for all resources to load
window.addEventListener('load', () => {
  loadResources()
    .then(() => {
      // Resources loaded successfully, hide the loading screen with a delay
      hideLoadingScreenWithDelay();
    })
    .catch(() => {
      // Error loading resources, handle the error if needed
      console.error('Error loading resources.');
      hideLoadingScreenWithDelay();
    });
});


// Store the original order of game cards
const gameCardsContainer = document.getElementById('game-cards');
const originalGameCards = Array.from(gameCardsContainer.getElementsByClassName('game-card'));

// Function to filter game cards based on search input
function filterGameCards(searchInput) {
  const gameCards = Array.from(gameCardsContainer.getElementsByClassName('game-card'));

  // Create an array to store the matched cards
  const matchedCards = [];

  // Loop through each game card and check for a match
  gameCards.forEach(function (card) {
    const gameName = card.querySelector('.game-name');
    const cardName = gameName.textContent.toLowerCase();

    if (cardName.includes(searchInput)) {
      matchedCards.push(card);
    }
  });

  // Remove all game cards from the container
  gameCardsContainer.innerHTML = '';

  // Add the matched cards to the container first
  matchedCards.forEach(function (card) {
    card.classList.add('matched');
    gameCardsContainer.appendChild(card);
  });

  // Add the remaining cards to the container in the original order
  originalGameCards.forEach(function (card) {
    if (!matchedCards.includes(card)) {
      card.classList.remove('matched');
      gameCardsContainer.appendChild(card);
    }
  });
}

// Function to request microphone permission
function requestMicrophonePermission() {
  return navigator.mediaDevices.getUserMedia({ audio: true });
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', function () {
  const searchInput = this.value.trim();

  // Check if search input has at least 3 characters
  if (searchInput.length >= 3) {
    filterGameCards(searchInput.toLowerCase());
  } else {
    // Show all game cards if search input has less than 3 characters
    gameCardsContainer.innerHTML = '';
    originalGameCards.forEach(function (card) {
      card.classList.remove('matched');
      gameCardsContainer.appendChild(card);
    });
  }
});

// Voice recognition
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true; // Enable interim results
  recognition.lang = 'en-US';

  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-btn');

  // Event listener for voice search button
  searchButton.addEventListener('click', function () {
    requestMicrophonePermission()
      .then(function (stream) {
        // Permission granted, start speech recognition
        recognition.start();
        searchButton.classList.add('active');
        searchInput.placeholder = 'Listening...';
      })
      .catch(function (error) {
        // Permission denied or error occurred
        console.error('Error accessing microphone:', error);
        searchInput.value = '';
        searchInput.placeholder = 'Speech recognition not available';
      });
  });

  // Event listener for voice recognition result
  recognition.onresult = function (event) {
    const speechResult = event.results[0][0].transcript;
    if (speechResult) {
      searchInput.value = speechResult;
      filterGameCards(speechResult.toLowerCase()); // Filter game cards with the voice input
    }
  };

  // Event listener for voice recognition end
  recognition.onend = function () {
    searchButton.classList.remove('active');
    searchInput.placeholder = 'Search...';
  };
}

//search waypoint 
 document.addEventListener("DOMContentLoaded", function() {
  const waypointButton = document.getElementById("waypoint-button");
  const searchSection = document.getElementById("search-section");

  waypointButton.addEventListener("click", function() {
      // Scroll the page to the search section
      searchSection.scrollIntoView({ behavior: "smooth" });
    });

  // Function to check if the search section is in view
  function isSearchSectionInView() {
    const rect = searchSection.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to handle the scroll event and show/hide the waypoint button
  function handleScroll() {
    if (isSearchSectionInView()) {
      waypointButton.classList.add("hidden");
    } else {
      waypointButton.classList.remove("hidden");
    }
  }

  // Add event listener for scroll
  window.addEventListener("scroll", handleScroll);

  // Initial check to hide/show waypoint button based on scroll position
  handleScroll();
});

      //-------user name---------//

// Get references to the username element, overlay, and the popup
  const usernameElement = document.getElementById('username');
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');

  // Load the username from local storage if available
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    usernameElement.textContent = savedUsername;
  }

  // Function to show the popup
  function showPopup() {
    overlay.style.display = 'flex';
    popup.style.display = 'block';
    nameInput.focus(); // Focus on the input field
  }

  // Show the popup when user clicks on the username
  usernameElement.addEventListener('click', showPopup);

  // Save the new username when user clicks the save button
  saveBtn.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    if (newName) {
      usernameElement.textContent = newName;
      localStorage.setItem('username', newName);
    }
    // Hide the popup after saving
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  // Hide the popup when clicking outside the popup
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.style.display = 'none';
      popup.style.display = 'none';
    }
  });

  // Check if the user name is empty in local storage on page load
  if (!savedUsername) {
    showPopup();
  } else {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  }

   // Get the header element 
  const header = document.querySelector("header");

  // Variable to store the previous scroll position
  let prevScrollPos = window.pageYOffset;

  // Function to handle the scroll event
  function onScroll() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // If scrolling up, make the header visible
      header.style.top = "0";
    } else {
      // If scrolling down, hide the header
      header.style.top = `-${header.offsetHeight}px`;
    }
    prevScrollPos = currentScrollPos;
  }

  // Attach the onScroll function to the scroll event
  window.addEventListener("scroll", onScroll);

//-----------------------------------------

//---------profile Photo Section-----------

// Get the avatar image element
const avatarImg = document.getElementById("avatar");
const tooltip = document.getElementById("tooltip");

// Function to handle the click event on the avatar image
function onAvatarClick() {
  // Create an input element of type 'file'
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  // Listen for the 'change' event when the user selects an image
  input.addEventListener("change", handleImageSelection);

  // Trigger the file input dialog
  input.click();
}

// Function to handle the image selection
function handleImageSelection(event) {
  const file = event.target.files[0];
  if (!file) return; // If no file selected, do nothing

  const reader = new FileReader();

  reader.onload = function (e) {
    // Set the selected image as the source for the avatar image
    avatarImg.src = e.target.result;

    // Save the image data to local storage
    localStorage.setItem("avatarImage", e.target.result);
  };

  // Read the selected image as a data URL
  reader.readAsDataURL(file);
}

// Attach the onAvatarClick function to the click event of the avatar image
avatarImg.addEventListener("click", onAvatarClick);

// Load the saved image from local storage, if available
const savedImage = localStorage.getItem("avatarImage");
if (savedImage) {
  avatarImg.src = savedImage;
}

showTooltip(); 

 function showTooltip() {
    if(!localStorage.getItem("avatarImage")){
      tooltip.style.display = "block";
      setTimeout(() => {
        tooltip.style.display = "none";
      }, 5500);
    }else{
        tooltip.style.display = "none";
      
    }
        // Show the tooltip automatically on every 1-minute interval
    setInterval(showTooltip, 10000); // 10 second in milliseconds
 }  