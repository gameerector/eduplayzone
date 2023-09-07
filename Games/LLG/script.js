const mainContainer = document.getElementById('mainContainer');
const levelNo = document.getElementById('level-no');
const task = document.getElementById('task-text');
const questionElement = document.getElementById('question');
const wordOptionsElement = document.getElementById('word-options');
const answerField = document.getElementById('answer-field');
const checkButton = document.getElementById('check-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const correctAnswerElement = document.querySelector('.correct-answer');
const correctAnswerH3 = document.getElementById('correct-answer-c');
const gameImage = document.getElementById('game-image');

// Add this code to update the progress bar
const progressBar = document.getElementById('progress-bar');

let currentQuestionIndex = 0;
let selectedWords = [];
let selectedWordsByQuestion = []; // Declare selectedWordsByQuestion array here
let correctAnswers = 0;
let incorrectAnswers = 0;

// Declare the variable for questions
let questions = [];

// Function to load questions from a JSON file
function loadQuestions(jsonFileURL) {
  // Fetch and load the questions for the selected language
  fetch(jsonFileURL)
    .then(response => response.json())
    .then(loadedQuestions => {
      // Now you have the questions for the selected language in the 'loadedQuestions' variable
      questions = loadedQuestions; // Assign the loaded questions to the global 'questions' variable
      loadQuestion(currentQuestionIndex); // Load the first question
    })
    .catch(error => {
      console.error(`Error loading questions: ${error}`);
    });
}

// Add an event listener to the "Start Game" button
document.getElementById('startGameButton').addEventListener('click', () => {
    const selectedLanguage = document.querySelector('.language-card.selected');

    if (selectedLanguage) {
        const languageCode = selectedLanguage.getAttribute('data-language');
        const jsonFileURL = `${languageCode}.json`;

        // Hide the language selection and show the game section
        document.getElementById('language-selection').classList.add('hidden');
        document.getElementById('mainContainer').classList.add('show-game');

        // Call the function to load questions
        loadQuestions(jsonFileURL);
    } else {
        alert('Please select a language.');
    }
});

// Add click event listeners to the language cards for selection
const languageCards = document.querySelectorAll('.language-card');
languageCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove the "selected" class from all cards
        languageCards.forEach(card => card.classList.remove('selected'));

        // Add the "selected" class to the clicked card
        card.classList.add('selected');
    });
});


const speakButton = document.getElementById('speak-btn');

// Add an event listener to the speak button
speakButton.addEventListener('click', speakQuestion);

checkButton.addEventListener('click', checkOrder);
      
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        conditionImages = idleImages;   
    // Randomly select an image for the condition
    const randomImage = conditionImages[Math.floor(Math.random() * conditionImages.length)];
    gameImage.src = randomImage;

        loadQuestion(currentQuestionIndex);
    } else {
        showFinalResult();
    }
});

const successImages = [
    'images/success-image-1.png',
    'images/success-image-2.png',
    'images/success-image-3.png',
];

const loseImages = [
    'images/lose-image-1.png',
    'images/lose-image-2.png',
    'images/lose-image-3.png',
];

const idleImages = [
    'images/idle-image-1.png',
    'images/idle-image-2.png',
    'images/idle-image-3.png',
];

function preloadImages(imageArray) {
    for (const imagePath of imageArray) {
        const img = new Image();
        img.src = imagePath;
    }
}

// Preload images for each condition
preloadImages(successImages);
preloadImages(loseImages);
preloadImages(idleImages);

// Initialize the conditionImages variable
let conditionImages = idleImages;

// Randomly select an image for the condition
const randomImage = conditionImages[Math.floor(Math.random() * conditionImages.length)];
gameImage.src = randomImage;


// Function to update the progress bar
function updateProgressBar() {
    const totalQuestions = questions.length;
    const percentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${percentage}%`;

    // Calculate the gradient colors based on correctness
    const greenValue = Math.min(255, Math.round(255 * (1 - (incorrectAnswers / totalQuestions))));
    const redValue = Math.min(255, Math.round(255 * (incorrectAnswers / totalQuestions)));
    
    const gradientColor = `linear-gradient(to left, rgb(${redValue}, ${greenValue}, 0) 0%, rgb(${redValue}, ${greenValue}, 0) 100%)`;
    
    progressBar.style.background = gradientColor;
}

// Add this function to show the "Check" button when all words are selected
function showNextButton() {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedWords.length === currentQuestion.correctOrder.length) {
        checkButton.style.display = 'block';
    } else {
        checkButton.style.display = 'none';
    }
    // Hide the answer container for incorrect answers
    answerField.style.display = 'flex';
    mainContainer.style.background = 'lightyellow';
    correctAnswerH3.style.display = 'flex'; 

}

function showFinalResult() {
    questionContainer.style.display = 'none'; // Hide the question container
    resultContainer.style.display = 'flex';

    const totalQuestions = questions.length;

    for (let i = 0; i < totalQuestions; i++) {
        const selectedWords = selectedWordsByQuestion[i] || [];
        const question = questions[i];

        if (isAnswerCorrect(selectedWords, question.correctOrder)) {
            correctAnswers++;
        }
    }

    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;

    resultElement.innerHTML = `Correct: ${correctAnswers}<br>Incorrect: ${incorrectAnswers}<br>Percentage: ${percentage.toFixed(2)}%`;
    
    correctAnswerElement.style.display = "none";
    correctAnswerH3.style.display = "none";
    resultElement.style.color = "#353535f2";
    resultContainer.style.background = "#fff8bf";

    nextButton.textContent = "Back Home";

    // Add a click event listener to the Next button to reload the page
    nextButton.addEventListener('click', () => {
        window.location.reload(); // Reload the page
    });
}
function isAnswerCorrect(selectedWords, correctOrder) {
    if (selectedWords.length !== correctOrder.length) {
        return false;
    }
    
    for (let i = 0; i < selectedWords.length; i++) {
        if (selectedWords[i] !== correctOrder[i]) {
            return false;
        }
    }
    
    return true;
}

function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;
    task.textContent = currentQuestion.task;
    levelNo.textContent = `${index + 1}`; // Display the level number
    answerField.innerHTML = ''; // Clear the answer field
    
    // Automatically speak the question when it's loaded
    speakQuestion();
    
    selectedWords = selectedWordsByQuestion[index] || [];
    updateAnswerField();

    const shuffledWords = shuffleArray(currentQuestion.correctOrder.slice());
    wordOptionsElement.innerHTML = '';
    shuffledWords.forEach(word => {
        const wordButton = document.createElement('button');
        wordButton.textContent = word;
        wordButton.value = word;
        wordButton.classList.add('word-option');
        wordButton.addEventListener('click', () => selectWord(word, index));
        wordOptionsElement.appendChild(wordButton);
    });

    resultContainer.style.display = 'none';

     // Update the progress bar
    updateProgressBar();
}

function selectWord(word) {
    const wordIndex = selectedWords.indexOf(word);
    if (wordIndex === -1) {
        // Determine the language of the selected word
        const language = detectLanguage(word);

        // Speak the selected word with the correct language
        speakWord(word, language);

        selectedWords.push(word);
        updateAnswerField();
        const selectedButton = wordOptionsElement.querySelector(`button[value="${word}"]`);
        selectedButton.style.display = 'none';
        showNextButton(); // Call this function after selecting a word
    }
}
let currentUtterance = null; // Declare a variable to store the current utterance

function speakWord(word, language) {
    // Cancel the previous speech synthesis if it's still speaking
    if (currentUtterance && speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(word);

    // Determine the language of the current word
    const voices = speechSynthesis.getVoices();
    let selectedVoice = null;

    if (language === 'hi') {
        // Use an Indian Hindi voice
        selectedVoice = voices.find(voice => voice.lang === 'hi-IN');
    } else if (language === 'odia') {
        // Use an Odia voice if available
        selectedVoice = voices.find(voice => voice.lang === 'or-IN');
    } else if (language === 'en-IN') {
        // Use an Indian English voice
        selectedVoice = voices.find(voice => voice.lang === 'en-IN');
    } else if (language === 'mr') {
        // Use an Indian Marathi voice if available
        selectedVoice = voices.find(voice => voice.lang === 'mr-IN');
    } else if (language === 'bn') {
        // Use an Indian Bengali voice if available
        selectedVoice = voices.find(voice => voice.lang === 'bn-IN');
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // Add a short delay between words
    utterance.rate = 0.8; // Adjust the rate as needed
    utterance.onboundary = (event) => {
        if (event.name === 'word') {
            setTimeout(() => {
                speechSynthesis.pause();
                speechSynthesis.resume();
            }, 100); // Delay between words in milliseconds
        }
    };

    // Set the current utterance to the new one
    currentUtterance = utterance;

    speechSynthesis.speak(utterance);
}


function updateAnswerField() {
    answerField.innerHTML = ''; // Clear the answer field
    selectedWords.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;
        wordSpan.classList.add('selected-word');
        wordSpan.addEventListener('click', () => returnWord(word)); // Add click event listener
        answerField.appendChild(wordSpan);
    });
    showNextButton(); // Call this function after updating the answer field
}

// Function to return a selected word to the word options
function returnWord(word) {
    const wordIndex = selectedWords.indexOf(word);
    if (wordIndex !== -1) {
        selectedWords.splice(wordIndex, 1); // Remove the word from the selectedWords array
        const wordButton = document.createElement('button');
        wordButton.textContent = word;
        wordButton.value = word;
        wordButton.classList.add('word-option');
        wordButton.addEventListener('click', () => selectWord(word)); // Reassign the click event listener
        wordOptionsElement.appendChild(wordButton);
        updateAnswerField(); // Update the answer field

        // Remove the returned word button from the word options
        const returnedWordButton = wordOptionsElement.querySelector(`button[value="${word}"]`);
        if (returnedWordButton) {
            returnedWordButton.remove();
        }
    }
}

const correctMessages = ['👏 Nice!', '🌟 Very good!', '🎉 Awesome!', '👍 Well done!', '🏆 Excellent!', '👌 You got it!', '🙌 Perfect!'];
const incorrectMessages = ['❌ Failed.', '❗ Not quite right.', '🚫 Keep practicing.', '😬 Oops!', '❎ Incorrect.', '🤔 Not there yet.'];


function checkOrder() {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = selectedWords.join(' ');
    
    // Disable pointer events on elements within the answerField
    answerField.childNodes.forEach(wordSpan => {
        if (wordSpan instanceof HTMLElement) {
            wordSpan.style.pointerEvents = 'none';
        }
    });

    checkButton.style.display = 'none';

    if (userAnswer === currentQuestion.correctOrder.join(' ')) {
        // Change the image to a success image
         conditionImages = successImages;

        mainContainer.style.background = 'linear-gradient(0deg, rgba(77,224,1,1) 0%, rgba(200,255,177,1) 35%, rgba(255,255,255,1) 100%)';
        resultElement.textContent = getRandomMessage(correctMessages);
        resultElement.style.color ='rgb(236 58 45 / 95%)';
        correctAnswers++;
        correctAnswerH3.style.display = 'none';
        correctAnswerElement.textContent = 'Correct';
        resultContainer.style.background = 'rgba(197 236 174 / 76%)';
    } else {
        // Change the image to a lose image
        conditionImages = loseImages;

        mainContainer.style.background = 'linear-gradient(0deg, rgba(224,1,1,1) 0%, rgba(255,177,177,1) 35%, rgba(255,255,255,1) 100%)';
        resultElement.textContent = getRandomMessage(incorrectMessages);
        resultElement.style.color ='rgb(236 58 45 / 95%)';
        incorrectAnswers++;
        
        resultContainer.style.background = 'rgba(255, 217, 212, 0.9)';

        // Hide the answer container for incorrect answers
        //answerField.style.display = 'none';

        // Show the correct answer
        showCorrectAnswer(currentQuestion.correctOrder);
    }
        // Randomly select an image for the condition
    const randomImage = conditionImages[Math.floor(Math.random() * conditionImages.length)];
    gameImage.src = randomImage;

        
    resultContainer.style.display = 'flex';
}

function showCorrectAnswer(correctOrder) {
    correctAnswerElement.textContent = correctOrder.join(' ');
}

// Function to get a random message from an array
function getRandomMessage(messagesArray) {
    const randomIndex = Math.floor(Math.random() * messagesArray.length);
    return messagesArray[randomIndex];
}

// Fisher-Yates Shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function speakQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const utterance = new SpeechSynthesisUtterance(currentQuestion.question);

    // Determine the language of the current question
    const language = detectLanguage(currentQuestion.question);

    // Set the voice based on the language
    const voices = speechSynthesis.getVoices();
    let selectedVoice = null;

    if (language === 'hi') {
        // Use an Indian Hindi voice
        selectedVoice = voices.find(voice => voice.lang === 'hi-IN');
    } else if (language === 'odia') {
        // Use an Odia voice if available
        selectedVoice = voices.find(voice => voice.lang === 'or-IN');
    } else if (language === 'en-IN') {
        // Use an Indian English voice
        selectedVoice = voices.find(voice => voice.lang === 'en-IN');
    } else if (language === 'mr') {
        // Use an Indian Marathi voice if available
        selectedVoice = voices.find(voice => voice.lang === 'mr-IN');
    } else if (language === 'bn') {
        // Use an Indian Bengali voice if available
        selectedVoice = voices.find(voice => voice.lang === 'bn-IN');
    }


    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // Add a short delay between words
    utterance.rate = 0.8; // Adjust the rate as needed
    utterance.onboundary = (event) => {
        if (event.name === 'word') {
            setTimeout(() => {
                speechSynthesis.pause();
                speechSynthesis.resume();
            }, 100); // Delay between words in milliseconds
        }
    };

    speechSynthesis.speak(utterance);
}


// Function to detect the language of a text (Hindi, Odia, or English)
function detectLanguage(text) {
    // You can implement a language detection logic here
    // For simplicity, we'll check if the text contains any characters from Hindi, Odia, or English scripts
    // You can enhance this logic as needed
    const hindiCharacters = /[\u0900-\u097F]/; // Unicode range for Hindi characters
    const odiaCharacters = /[\u0B00-\u0B7F]/; // Unicode range for Odia characters

    if (hindiCharacters.test(text)) {
        return 'hi'; // Hindi
    } else if (odiaCharacters.test(text)) {
        return 'odia'; // Odia
    } else {
        return 'en'; // English
    }
}