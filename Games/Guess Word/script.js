    const emojis = [ // maximum 7 charecter words  
      { emoji: "Image/snake.gif", word: "SNAKE" },
      { emoji: "Image/Ball.gif", word: "BALL" },
      { emoji: "Image/car.gif", word: "CAR" },
      { emoji: "Image/fish.gif", word: "FISH" },
      // word sond not added yet ⤵
      { emoji: "Image/rose.gif", word: "ROSE" },
      { emoji: "Image/ant.gif", word: "ANT" },
      { emoji: "Image/bat.gif", word: "BAT" },
      { emoji: "Image/horse.gif", word: "HORSE" },
      { emoji: "Image/rat.gif", word: "RAT" },
      { emoji: "Image/rocket.gif", word: "ROCKET" },
      { emoji: "Image/ghost.gif", word: "GHOST" },
      { emoji: "Image/Robot.gif", word: "ROBOT" },
      { emoji: "Image/Alien.gif", word: "ALIEN" },
      { emoji: "Image/sun.gif", word: "SUN" },
      { emoji: "Image/Fire.gif", word: "FIRE" },
      { emoji: "Image/star.gif", word: "STAR" },
      { emoji: "Image/eyes.gif", word: "EYE" },
      { emoji: "Image/ring.gif", word: "RING" },
      { emoji: "Image/owl.gif", word: "OWL" },
      { emoji: "Image/bee.gif", word: "BEE" },
      { emoji: "Image/whale.gif", word: "WHALE" },
      { emoji: "Image/sloth.gif", word: "SLOTH" },
      { emoji: "Image/globe.gif", word: "GLOBE" },
      { emoji: "Image/tornado.gif", word: "TORNADO" },
      { emoji: "Image/cake.gif", word: "CAKE" },
      { emoji: "Image/trophy.gif", word: "TROPHY" },
      { emoji: "Image/drum.gif", word: "DRUM" },
      { emoji: "Image/Skull.gif", word: "SKULL" },
      { emoji: "Image/Plant.gif", word: "PLANT" },
      { emoji: "Image/volcano.gif", word: "VOLCANO" },
      { emoji: "Image/Rainbow.gif", word: "RAINBOW" },
      { emoji: "Image/Rainbow.gif", word: "RAINBOW" },
      { emoji: "Image/Lizard.gif", word: "LIZARD" },
      { emoji: "Image/Dragon.gif", word: "DRAGON" },
      { emoji: "Image/Turtle.gif", word: "TURTLE" },
      { emoji: "Image/Rabbit.gif", word: "RABBIT" },
      { emoji: "Image/Dog.gif", word: "DOG" },
      { emoji: "Image/Pig.gif", word: "PIG" },
      { emoji: "Image/Donkey.gif", word: "DONKEY" },
      { emoji: "Image/Ox.gif", word: "OX" },
      { emoji: "Image/Goat.gif", word: "GOAT" },
      { emoji: "Image/Tiger.gif", word: "TIGER" },
      { emoji: "Image/Monkey.gif", word: "MONKEY" },
      { emoji: "Image/Eagle.gif", word: "EAGLE" },
      { emoji: "Image/Duck.gif", word: "DUCK" },
      { emoji: "Image/Peacock.gif", word: "PEACOCK" },
      { emoji: "Image/Seal.gif", word: "SEAL" },
      { emoji: "Image/Dolphin.gif", word: "DOLPHIN" },
      { emoji: "Image/Crab.gif", word: "CRAB" },
      { emoji: "Image/Octopus.gif", word: "OCTOPUS" },
      { emoji: "Image/Snail.gif", word: "SNAIL" },
      { emoji: "Image/Tomato.gif", word: "TOMATO" },
      { emoji: "Image/Balloon.gif", word: "BALLOON" },
      { emoji: "Image/Violin.gif", word: "VIOLIN" },
      { emoji: "Image/Battery.gif", word: "BATTERY" },
      { emoji: "Image/bulb.gif", word: "BULB" },
      { emoji: "Image/clock.gif", word: "CLOCK" },
      { emoji: "Image/Bell.gif", word: "BELL" },
      { emoji: "Image/Cross.gif", word: "CROSS" },
      { emoji: "Image/camera.gif", word: "CAMERA" },
      { emoji: "Image/gun.gif", word: "GUN" },
      { emoji: "Image/bomb.gif", word: "BOMB" },
      { emoji: "Image/teddy.gif", word: "TEDDY" },
      { emoji: "Image/apple.gif", word: "APPLE" },
      { emoji: "Image/grapes.gif", word: "GRAPES" },
      { emoji: "Image/joker.gif", word: "JOKER" },
      { emoji: "Image/heart.gif", word: "HEART" },
      { emoji: "Image/hand.gif", word: "HAND" },
      { emoji: "Image/leaf.gif", word: "LEAF" },
      { emoji: "Image/hen.gif", word: "HEN" },
      { emoji: "Image/ufo.gif", word: "UFO" },

    ];

    const answerContainer = document.getElementById("answer-container");
    const characterContainer = document.getElementById("character-container");
    const clearButton = document.getElementById("reset-button");
    const emojiContainer = document.getElementById("emoji-container");
    const messageContainer = document.getElementById("message-container");

    const LEVEL_STORAGE_KEY = "guessEmojisCurrentLevel";
    const POPUP_STORAGE_KEY = "guessEmojisPopupShown";
    const FIFTEEN_MINUTES = 5 * 60 * 1000; // 15 minutes in milliseconds

    let currentLevelIndex = 0;
    let currentWord = "";
    let isDragging = false;
    initializeGame();

    function initializeGame() {
      const storedLevelIndex = localStorage.getItem(LEVEL_STORAGE_KEY);
      const popupShownBefore = localStorage.getItem(POPUP_STORAGE_KEY);

      if (!popupShownBefore || (Date.now() - parseInt(popupShownBefore)) > FIFTEEN_MINUTES) {
          if (storedLevelIndex !== null && parseInt(storedLevelIndex) > 0) {
            showNewGamePopup();
          } else {
            startNewGame();
          }
          return;
        }

        if (storedLevelIndex !== null) {
          currentLevelIndex = parseInt(storedLevelIndex);
        }

      currentWord = emojis[currentLevelIndex].word;

      const prevLevel = currentLevelIndex > 0 ? currentLevelIndex - 1 : emojis.length - 1;
      const nextLevel = currentLevelIndex < emojis.length - 1 ? currentLevelIndex + 1 : 0;

      document.getElementById("prev-level").textContent = prevLevel + 1;
      document.getElementById("current-level").textContent = currentLevelIndex + 1;
      document.getElementById("next-level").textContent = nextLevel + 1;

      const emojiObj = emojis.find(obj => obj.word === currentWord);
      emojiContainer.innerHTML = `<img src="${emojiObj.emoji}" alt="${currentWord}">`;

      answerContainer.innerHTML = "";
      characterContainer.innerHTML = "";

      const characterPool = getCharacterPool(currentWord);
      characterPool.forEach(char => {
        const character = createCharacterElement(char);
        characterContainer.appendChild(character);
      });

      for (let i = 0; i < currentWord.length; i++) {
        const answerCharacter = createCharacterElement("");
        answerContainer.appendChild(answerCharacter);
      }

      answerContainer.addEventListener("dragover", handleDragOver);
      answerContainer.addEventListener("drop", handleDrop);
      clearButton.addEventListener("click", ClearAnswer);

      currentLevelIndex++;
    }

    function createCharacterElement(char) {
      const character = document.createElement("div");
      character.classList.add("character");
      character.textContent = char;
      character.draggable = true;

      character.addEventListener("dragstart", handleDragStart);
      character.addEventListener("touchstart", handleTouchStart);
      character.addEventListener("touchmove", handleTouchMove);
      character.addEventListener("touchend", handleTouchEnd);

      return character;
    }

    //function for play charecter audio after Dropped  
    function playCharacterAudio(character) {
      const audio = new Audio(`Audio/Alphabet/${character.toLowerCase()}.mp3`);
      audio.play();
    }

    /*//function for play Guessed Word audio  
    function playWordAudio(word) {
      const audio = new Audio(`Audio/Word/${word}.mp3`);
      audio.play();
    }*/

    // Function for speaking the guessed word
    function playWordAudio(word) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.voiceURI = 'Google हिन्दी'; // Voice URI for English India (Tenzin) Male
        utterance.lang = 'en-IN';
        speechSynthesis.speak(utterance);
      } else {
        console.log('Speech synthesis is not supported.');
      }
    }


    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    function handleDragStart(event) {
      if (event.target.parentNode.id === "character-container") {
        event.dataTransfer.setData("text/plain", event.target.textContent);
        event.target.classList.add("draggingPc");
      }
    }


    function handleTouchStart(event) {
      const targetCharacter = event.target;

      if (targetCharacter.classList.contains("character") && targetCharacter.parentNode.id === "character-container" && targetCharacter.textContent !== "") {
        isDragging = true;
        targetCharacter.classList.add("dragging");
        targetCharacter.style.position = "absolute";
        targetCharacter.style.left = event.touches[0].clientX + "px";
        targetCharacter.style.top = event.touches[0].clientY + "px";
      }
    }


    function handleDragOver(event) {
      event.preventDefault();
    }

    function handleDrop(event) {
      event.preventDefault();
      const draggedCharacter = event.dataTransfer.getData("text/plain");
      const targetCharacter = event.target;

      let answerCharacter;
      if (targetCharacter.classList.contains("character") && targetCharacter.textContent === "") {
        answerCharacter = targetCharacter;
      } else if (
        targetCharacter.parentNode.classList.contains("character") &&
        targetCharacter.parentNode.textContent === ""
      ) {
        answerCharacter = targetCharacter.parentNode;
      }

      if (answerCharacter) {
         // Play audio for the dropped character
        playCharacterAudio(draggedCharacter);

        answerCharacter.textContent = draggedCharacter;
      }

      if (checkWord()) {
        if (answerContainer.textContent !== currentWord) {
          messageContainer.textContent = "It's wrong. Try again!";
          setTimeout(() => {
            messageContainer.textContent = "";
            resetGame();
          }, 1000);
        } else {
          messageContainer.textContent = "Congratulations! You guessed the word correctly!";
          setTimeout(()=>{
            playWordAudio(currentWord);
            // Confetti code
                fire(0.25, {
                  spread: 26,
                  startVelocity: 55,
                });
                fire(0.2, {
                  spread: 60,
                });
                fire(0.35, {
                  spread: 100,
                  decay: 0.91,
                  scalar: 0.8
                });
                fire(0.1, {
                  spread: 120,
                  startVelocity: 25,
                  decay: 0.92,
                  scalar: 1.2
                });
                fire(0.1, {
                  spread: 120,
                  startVelocity: 45,
                });
          },500)
          setTimeout(() => {
            messageContainer.textContent = "";  
            resetGame();
          }, 2000);

          characterContainer.innerHTML = "";
          const successMessage = document.createElement("div");
          successMessage.classList.add("success-message");
          successMessage.textContent = "Successfully Guessed!";
          characterContainer.appendChild(successMessage);
        }
      }
    }

    function handleTouchMove(event) {
      event.preventDefault();
      const touch = event.touches[0];
      const draggedCharacter = characterContainer.querySelector(".dragging");

      if (isDragging && draggedCharacter && draggedCharacter.classList.contains("character")) {
        draggedCharacter.style.left = touch.clientX + "px";
        draggedCharacter.style.top = touch.clientY + "px";
      }
    }

    function handleTouchEnd(event) {
      event.preventDefault();
      const touch = event.changedTouches[0];
      const targetCharacter = document.elementFromPoint(touch.clientX, touch.clientY);

      if (isDragging) {
        const draggedCharacter = characterContainer.querySelector(".dragging");

        if (draggedCharacter) {
          draggedCharacter.style.position = "";
          draggedCharacter.style.left = "";
          draggedCharacter.style.top = "";
          draggedCharacter.classList.remove("dragging");

          if (targetCharacter.classList.contains("character") && targetCharacter.textContent === "") {
            targetCharacter.textContent = draggedCharacter.textContent;

            // Play audio for the dropped character
            playCharacterAudio(draggedCharacter.textContent);
          }
        }

        isDragging = false;
      }

      if (checkWord()) {
        if (answerContainer.textContent !== currentWord) {
          messageContainer.textContent = "It's wrong. Try again!";
          setTimeout(() => {
            messageContainer.textContent = "";
            resetGame();
          }, 1000);
        } else {
          messageContainer.textContent = "Congratulations! You guessed the word correctly!";
          setTimeout(()=>{
            playWordAudio(currentWord);

          // Confetti code
                fire(0.25, {
                  spread: 26,
                  startVelocity: 55,
                });
                fire(0.2, {
                  spread: 60,
                });
                fire(0.35, {
                  spread: 100,
                  decay: 0.91,
                  scalar: 0.8
                });
                fire(0.1, {
                  spread: 120,
                  startVelocity: 25,
                  decay: 0.92,
                  scalar: 1.2
                });
                fire(0.1, {
                  spread: 120,
                  startVelocity: 45,
                });
          },500)
          setTimeout(() => {
            messageContainer.textContent = "";
            resetGame();
          }, 2000);

          characterContainer.innerHTML = "";
          const successMessage = document.createElement("div");
          successMessage.classList.add("success-message");
          successMessage.textContent = "Successfully Guessed!";
          characterContainer.appendChild(successMessage);
        }
      }
    }

    function checkWord() {
      const answerCharacters = answerContainer.querySelectorAll(".character");
      let guess = Array.from(answerCharacters).map(character => character.textContent.toLowerCase()).join("");

      console.log("Current Word:", currentWord);
      console.log("Guess:", guess);

      return guess.toLowerCase() === currentWord.toLowerCase();
    }

    function saveCurrentLevel() {
      localStorage.setItem(LEVEL_STORAGE_KEY, currentLevelIndex.toString());
    }

    function resetGame() {
      emojiContainer.innerHTML = "";
      answerContainer.innerHTML = "";
      characterContainer.innerHTML = "";
      answerContainer.removeEventListener("dragover", handleDragOver);
      answerContainer.removeEventListener("drop", handleDrop);
      //resetButton.removeEventListener("click", resetGame);
      saveCurrentLevel();
      initializeGame();
    }

    function ClearAnswer() {
      const answerCharacters = answerContainer.querySelectorAll(".character");
      answerCharacters.forEach((character) => {
        character.textContent = "";
      });
    }

    function getRandomWord() {
      return emojis[Math.floor(Math.random() * emojis.length)].word;
    }

    function getCharacterPool(word) {
      const usedCharacters = new Set(word.split(""));
      const pool = Array.from(usedCharacters);

      for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
        let randomChar;
        do {
          randomChar = getRandomCharacter();
        } while (usedCharacters.has(randomChar));

        pool.push(randomChar);
      }

      return shuffleArray(pool);
    }

    function getRandomCharacter() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return characters[Math.floor(Math.random() * characters.length)];
    }

    function shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }

function showContinuePopup() {
  const popup = document.getElementById('game-popup');
  const continueButton = document.getElementById('continue-button');

  // Attach the event listener to the "Continue" button
  continueButton.addEventListener('click', continueGame);

  popup.style.display = 'block';
}

function continueGame() {
  const popup = document.getElementById('game-popup');
  const continueButton = document.getElementById('continue-button');

  // Remove the event listener from the "Continue" button
  continueButton.removeEventListener('click', continueGame);

  // Load the saved level and initialize the game
  loadSavedLevel();
  initializeGame(); // Call the initializeGame() function to start the game with the saved level

  // Hide the popup
  popup.style.display = 'none';
}


function loadSavedLevel() {
  const storedLevelIndex = localStorage.getItem(LEVEL_STORAGE_KEY);

  if (storedLevelIndex !== null) {
    currentLevelIndex = parseInt(storedLevelIndex);
  }

  initializeGame();
}


    function showNewGamePopup() {
      const popup = document.getElementById('game-popup');
      const newGameButton = document.getElementById('new-game-button');

      newGameButton.addEventListener('click', startNewGame);

      popup.style.display = 'block';
    }

    function startNewGame() {
      const popup = document.getElementById('game-popup');
      const newGameButton = document.getElementById('new-game-button');

      newGameButton.removeEventListener('click', startNewGame);
      localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString()); // Store the current timestamp

      localStorage.removeItem(LEVEL_STORAGE_KEY);
      currentLevelIndex = 0;
      initializeGame();

      popup.style.display = 'none';
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
