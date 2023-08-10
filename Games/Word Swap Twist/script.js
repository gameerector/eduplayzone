const levels = [
  [
    { word: 'Day 🌞', opposite: 'Night 🌙' },
    { word: 'Hot 🔥', opposite: 'Cold 🧊' },
    { word: 'Happy 😄', opposite: 'Sad 😢' },
    { word: 'Sun ☀️', opposite: 'Moon 🌛' },
    { word: 'Summer 🏖️', opposite: 'Winter ❄️' },
    { word: 'Sky ☁️', opposite: 'Ground 🏞' }
  ],
  [
    { word: 'Up ⬆️', opposite: 'Down ⬇️' },
    { word: 'Fast 🏃‍♂️', opposite: 'Slow 🚶‍♂️' },
    { word: 'Big 🐘', opposite: 'Small 🐭' },
    { word: 'In 📩', opposite: 'Out 📤' },
    { word: 'Left ⬅', opposite: 'Right ➡️' },
    { word: 'Soft 🥞', opposite: 'Hard 💎' }
  ],
  [
    { word: 'High 🗻', opposite: 'Low 🏝️' },
    { word: 'Happy 😊', opposite: 'Sad 😭' },
    { word: 'Front 👉', opposite: 'Back 👈' },
    { word: 'Near 🏞️', opposite: 'Far 🌌' },
    { word: 'Old 👴', opposite: 'New 🆕' },
    { word: 'Open 🥅', opposite: 'Close 🚪' }
  ],
  [
    { word: 'North 🧭', opposite: 'South 🧭' },
    { word: 'Small 🐭', opposite: 'Big 🐘' },
    { word: 'Tall 📏', opposite: 'Short 📏' },
    { word: 'Happy 😄', opposite: 'Angry 😡' },
    { word: 'Empty 📭', opposite: 'Full 📭' },
    { word: 'Begin 🏁', opposite: 'End 🏁' }
  ],
  [
    { word: 'Fast 🏃‍♂️', opposite: 'Slow 🚶‍♂️' },
    { word: 'Love ❤️', opposite: 'Hate 💔' },
    { word: 'Smart 🧠', opposite: 'Dumb 🤪' },
    { word: 'Strong 💪', opposite: 'Weak 🤕' },
    { word: 'Buy 🛍️', opposite: 'Sell 💰' },
    { word: 'Open 📂', opposite: 'Close 📁' }
  ],
  [
    { word: 'Early 🌅', opposite: 'Late 🌃' },
    { word: 'Above ⬆️', opposite: 'Below ⬇️' },
    { word: 'Calm 😌', opposite: 'Chaotic 😵' },
    { word: 'Clean 🧼', opposite: 'Dirty 🛁' },
    { word: 'Empty 📭', opposite: 'Full 📦' },
    { word: 'Lost 🗺️', opposite: 'Found 🔍' }
  ],
  [
    { word: 'Happy 😃', opposite: 'Miserable 😞' },
    { word: 'Brave 🦸‍♂️', opposite: 'Timid 🐢' },
    { word: 'Rough 🌊', opposite: 'Smooth 🎵' },
    { word: 'Visible 👀', opposite: 'Invisible 🕶️' },
    { word: 'Expand ➕', opposite: 'Contract ➖' },
    { word: 'Free 🕊️', opposite: 'Captive 🦅' }
  ],
  [
    { word: 'Fresh 🍃', opposite: 'Stale 🍂' },
    { word: 'Join 👥', opposite: 'Leave 👣' },
    { word: 'Strong 💪', opposite: 'Fragile 🦋' },
    { word: 'Wild 🦁', opposite: 'Tame 🐾' },
    { word: 'Fast 🏃‍♂️', opposite: 'Still 🐢' },
    { word: 'Arrive 🛬', opposite: 'Depart 🛫' }
  ],
  [
    { word: 'Huge 🐘', opposite: 'Tiny 🐜' },
    { word: 'Laugh 😂', opposite: 'Cry 😢' },
    { word: 'Healthy 🥦', opposite: 'Sick 🤒' },
    { word: 'Open 📂', opposite: 'Shut 📕' },
    { word: 'Appear 👀', opposite: 'Disappear 🌫️' },
    { word: 'Kind 😊', opposite: 'Mean 😠' }
  ],
  [
    { word: 'Soft 🌸', opposite: 'Rough 🌵' },
    { word: 'Listen 🔈', opposite: 'Ignore 🔇' },
    { word: 'Praise 🌟', opposite: 'Criticize 💔' },
    { word: 'Brilliant 💡', opposite: 'Dull 🕯️' },
    { word: 'Simple 🎈', opposite: 'Complex 🎢' },
    { word: 'Peace ✌️', opposite: 'War ☠️' }
  ]
];


let currentLevel = 0;
let gameWords = [];
let flippedCard = null;
let isProcessing = false;
let score = 0;
let timerInterval;
const levelTime = 45; // Time in seconds for each level

function createCard(word) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerText = word.word;
  card.setAttribute('data-match', word.opposite);
  card.addEventListener('click', () => flipCard(card));
  return card;
}

function flipCard(card) {
  if (isProcessing || card.classList.contains('matched') || card === flippedCard) {
    return;
  }

  card.classList.add('zoom-in');

  if (flippedCard) {
    isProcessing = true;

    if (card.getAttribute('data-match') === flippedCard.innerText) {
      card.classList.add('matched');
      flippedCard.classList.add('matched');
      score += 10;
      updateScore();
      flippedCard = null;

      const allMatched = document.querySelectorAll('.matched');
      if (allMatched.length === gameWords.length) {
        clearInterval(timerInterval); // Stop the timer
        setTimeout(() => {
          loadNextLevel();
        }, 1000);
      }
    } else {
      setTimeout(() => {
        card.classList.remove('zoom-in');
        flippedCard.classList.remove('zoom-in');
        flippedCard = null;

        if (score > 0) {
          score -= 5; // Decrease score by 5 for wrong match
          updateScore();
        }
      }, 1000);
    }

    isProcessing = false;
  } else {
    flippedCard = card;
  }
}

function removeMatchedCards() {
  const matchedCards = document.querySelectorAll('.matched');
  matchedCards.forEach(card => card.remove());
}

function hideRemainingCards() {
  const cards = document.querySelectorAll('.card:not(.matched)');
  cards.forEach(card => {
    card.classList.add('hide-card');
    setTimeout(() => {
      card.classList.remove('hide-card');
    }, 1000);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateScore() {
  const scoreboard = document.getElementById('scoreboard');
  scoreboard.innerText = `Score: ${score}`;
}

function updateTimer(seconds) {
  const timer = document.getElementById('timer');
  timer.innerText = `Time: ${seconds}s`;
}

function startTimer() {
  let seconds = levelTime;
  updateTimer(seconds);
  timerInterval = setInterval(() => {
    seconds--;
    updateTimer(seconds);
    if (seconds === 0) {
      clearInterval(timerInterval);
      hideRemainingCards();
      setTimeout(() => {
        loadCurrentLevel();
      }, 1000);
    }
  }, 1000);
}

function loadNextLevel() {
  if (currentLevel >= levels.length - 1) {
    alert('Congratulations! You have completed all levels!');
    currentLevel = 0;
    score = 0; // Reset score for a new game
  } else {
    currentLevel++;
  }
  startGame();
}

function loadCurrentLevel() {
  startGame();
}

function startGame() {
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.innerHTML = '';
  flippedCard = null;
  updateScore();
  startTimer();

  gameWords = [];
  const words = levels[currentLevel];
  words.forEach(word => {
    gameWords.push({ ...word });
    gameWords.push({ word: word.opposite, opposite: word.word });
  });

  shuffleArray(gameWords);

  gameWords.forEach((word, index) => {
    setTimeout(() => {
      const card = createCard(word);
      gameBoard.appendChild(card);
    }, index * 100);
  });
}



//loading screen by time 
    document.addEventListener("DOMContentLoaded", () => {
      const loadingScreen = document.querySelector(".loading-screen");
      const loadingBar = document.querySelector(".loading-bar");
      const loadingProgress = document.querySelector(".loading-progress");
      const loadingDuration = 3000; // 3 seconds
      let loadingTime = 0;

      // Function to update the loading progress
      function updateLoadingProgress() {
        loadingTime += 10; // Increase by 10 milliseconds (adjust as needed for smoother progress)
        const progress = Math.min((loadingTime / loadingDuration) * 100, 100);
        loadingBar.style.width = progress + "%";
        loadingProgress.textContent = `Loading... ${progress.toFixed(0)}%`;

        // Check if loading is complete
        if (loadingTime >= loadingDuration) {
          // Hide the loading screen
          setTimeout(() => {
            loadingScreen.style.display = "none";
            // Automatically start the first level
            startGame();
          }, 1000); // Add a 1-second delay before hiding the loading screen

          // Call your setupGame() function or perform any other actions after loading here.
          // For demonstration, let's log a message when the loading is complete.
          console.log("Loading complete!");
        } else {
          // Update progress again after a short delay
          setTimeout(updateLoadingProgress, 10); // Repeat every 10 milliseconds (adjust as needed)
        }
      }

      // Start updating the loading progress
      updateLoadingProgress();
    });
