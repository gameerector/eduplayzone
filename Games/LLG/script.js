const mainContainer = document.getElementById('mainContainer');
const levelNo = document.getElementById('level-no');
const task = document.getElementById('task-text');
const questionElement = document.getElementById('question');
const wordOptionsElement = document.getElementById('word-options');
const answerField = document.getElementById('answer-field');
const checkButton = document.getElementById('check-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const FinalresultElement = document.getElementById('final-result');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const correctAnswerElement = document.querySelector('.correct-answer');
const correctAnswerH3 = document.getElementById('correct-answer-c');
const gameImage = document.getElementById('game-image');
const QuestionLine = document.getElementById('.question-line');
const closeButton = document.getElementById('close-btn')
// Add this code to update the progress bar
const progressBar = document.getElementById('progress-bar');

let currentQuestionIndex = 0;
let selectedWords = [];
let selectedWordsByQuestion = []; // Declare selectedWordsByQuestion array here
let correctAnswers = 0;
let incorrectAnswers = 0;

// Declare the variable for questions
let questions = [];

let subject;

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

        subject = languageCode;

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
speakButton.addEventListener('click', () => {
    const currentQuestion = questions[currentQuestionIndex];
    speakQuestion(currentQuestion.question);
});

closeButton.addEventListener('click', () =>{
    window.location.reload(); // Reload the page
});

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
let PercentageValue;

function showFinalResult() {
    questionContainer.style.display = 'none'; // Hide the question container
    resultContainer.style.display = 'flex';
    FinalresultElement.style.display = 'block';
    resultElement.style.display = 'none';
    captureAndShareButton.style.display = 'block';
    mainContainer.style.background = 'lightyellow';
    const totalQuestions = questions.length;
    let resultText = new String('Passed');    
    task.textContent = 'Results of ' + subject;

    resultContainer.style.alignItems = 'flex-start';
    resultContainer.style.height = '100px';
    resultContainer.style.flexDirection = 'row-reverse';
    
    const correctAnswers = calculateCorrectAnswers();
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;

    PercentageValue = percentage;

    if (percentage<=30) {
        resultText = "faild";
    }

    FinalresultElement.innerHTML = ` <span class ="resulttext" >Result : ${resultText}</span> <br> Correct: ${correctAnswers}<br>Incorrect: ${incorrectAnswers}<br>Percentage: ${percentage.toFixed(2)}%`;
    correctAnswerElement.style.display = "none";
    correctAnswerH3.style.display = "none";
    resultElement.style.color = "#353535f2";
    resultContainer.style.background = "#fff8bf";

    nextButton.textContent = "Back Home";

   // const myResult = 'I scored ' + PercentageValue.toFixed(2) + '% in the Learn Lingo quiz!'; 
   // console.log(myResult);

    // Add a click event listener to the Next button to reload the page
    nextButton.addEventListener('click', () => {
        window.location.reload(); // Reload the page
    });
}

function calculateCorrectAnswers() {
    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
        const selectedWords = selectedWordsByQuestion[i] || [];
        const question = questions[i];

        if (question.Mcquestion) {
            // For multiple-choice questions, check if the selected option is correct
            if (
                selectedWords.length === 1 &&
                selectedWords[0] === question.correctOption.toString()
            ) {
                correctCount++;
            }
        } else if (isAnswerCorrect(selectedWords, question.correctOrder)) {
            correctCount++;
        }
    }
    return correctCount;
}

function isAnswerCorrect(selectedWords, correctOrder) {
    if (!Array.isArray(selectedWords) || !Array.isArray(correctOrder)) {
        return false; // Return false if either selectedWords or correctOrder is not an array
    }
    
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


let isMcqQuestion = false;
let selectedMcqOption; // To store the selected MCQ option index

// Modify the showNextButton function to handle multiple-choice questions
function showNextButton() {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if it's a multiple-choice question
    if (currentQuestion.Mcquestion) {
        // Check if an option is selected
        if (selectedMcqOption !== undefined) {
            checkButton.style.display = 'block';
        } else {
            checkButton.style.display = 'none';
        }
    } else {
        // For other question types, check if words are selected
        if (selectedWords.length === currentQuestion.correctOrder.length) {
            checkButton.style.display = 'block';
        } else {
            checkButton.style.display = 'none';
        }
    }

    // Hide the answer container for incorrect answers
    answerField.style.display = 'flex';
    mainContainer.style.background = 'lightyellow';
    correctAnswerH3.style.display = 'flex';
}

function loadQuestion(index) {
    const currentQuestion = questions[index];
    task.textContent = currentQuestion.task;
    levelNo.textContent = `${index + 1}`; // Display the level number
    answerField.innerHTML = ''; // Clear the answer field
    console.log('Total No of level :'+ questions.length); 
    
    if (currentQuestion.voicequestion) {
        wordOptionsElement.style.flexDirection = '';
        wordOptionsElement.style.alignItems = '';
        // Automatically play the voice question
        speakQuestion(currentQuestion.voicequestion);

        // If it's a voice question, hide the question line
        document.querySelector('.question-line').style.display = 'none';
        // Show the "Play Voice Question" button
        document.getElementById('play-voice-question').style.display = 'block';
    } else if (currentQuestion.Mcquestion) {
        isMcqQuestion = true; // Set to true for multiple-choice questions
        speakQuestion(currentQuestion.Mcquestion);
        // Handle multiple-choice questions
        document.querySelector('.question-line').style.display = 'flex'; // Hide the question line
        document.getElementById('play-voice-question').style.display = 'none'; // Hide the "Play Voice Question" button
        questionElement.textContent = currentQuestion.Mcquestion; // Display the multiple-choice question
        
        wordOptionsElement.style.flexDirection = 'column';
        wordOptionsElement.style.alignItems = 'center';
        // Check if the 'options' property exists
        if (currentQuestion.options && currentQuestion.options.length > 0) {
            // Generate and display multiple-choice options
            wordOptionsElement.innerHTML = '';
            currentQuestion.options.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.textContent = option;
                optionButton.value = index;
                optionButton.classList.add('word-option');
                optionButton.addEventListener('click', () => selectMcqOption(index));
                wordOptionsElement.appendChild(optionButton);
            });
        }
    }
     else {
        wordOptionsElement.style.flexDirection = '';
        wordOptionsElement.style.alignItems = '';
        // Handle other question types (e.g., ordering words)
        document.querySelector('.question-line').style.display = 'flex'; // Show the question line
        document.getElementById('play-voice-question').style.display = 'none'; // Hide the "Play Voice Question" button
        // Speak the text question
        speakQuestion(currentQuestion.question);
        questionElement.textContent = currentQuestion.question;
    }

    selectedWords = selectedWordsByQuestion[index] || []; // Load selected words for the current question
    selectedWordsByQuestion[currentQuestionIndex] = selectedWords.slice(); // Initialize selectedWordsByQuestion

    updateAnswerField();
    // Check if the 'correctOrder' property exists before using it
    if (currentQuestion.correctOrder) {
        const shuffledWords = shuffleArray(currentQuestion.correctOrder.slice());
        wordOptionsElement.innerHTML = '';
        shuffledWords.forEach(word => {
            const wordButton = document.createElement('button');
            wordButton.textContent = word;
            wordButton.value = word;
            wordButton.classList.add('word-option');
            wordButton.addEventListener('click', () => selectWord(word));
            wordOptionsElement.appendChild(wordButton);
        });
    }

    resultContainer.style.display = 'none';

    // Update the progress bar
    updateProgressBar();
}

function selectMcqOption(optionIndex) {
    selectedMcqOption = optionIndex; // Set the selected MCQ option

    // Remove the class 'word-option-selected' from all MCQ option buttons
    const mcqOptionButtons = wordOptionsElement.querySelectorAll('.word-option');
    mcqOptionButtons.forEach(button => {
        button.classList.remove('word-option-selected');
    });

    // Update selectedWordsByQuestion for multiple-choice questions
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.Mcquestion) {
        selectedWordsByQuestion[currentQuestionIndex] = [optionIndex.toString()];
    }

    // Add the class 'word-option-selected' to the selected MCQ option button
    const selectedOptionButton = mcqOptionButtons[optionIndex];
    selectedOptionButton.classList.add('word-option-selected');

    showNextButton(); // Call showNextButton after selecting an option
}


document.getElementById('play-voice-question').addEventListener('click', () => {
    const currentQuestion = questions[currentQuestionIndex];
    speakQuestion(currentQuestion.voicequestion);
});


function selectWord(word) {
    const wordIndex = selectedWords.indexOf(word);
    if (wordIndex === -1) {
        // Determine the language of the selected word
        const language = detectLanguage(word);

        // Speak the selected word with the correct language
        speakWord(word, language);

        selectedWords.push(word);

        // Store selected word for the current question
        selectedWordsByQuestion[currentQuestionIndex] = selectedWords.slice();

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

    // Find an English voice (en-IN)
    selectedVoice = voices.find(voice => voice.lang === 'en-IN');

    if (selectedVoice) {
        utterance.voice = selectedVoice;

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
    } else {
        // If no English voice is found, log an error
        console.error(`No suitable English voice found.`);
    }
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

// Create audio elements for correct and incorrect audio
const correctAudio = new Audio('Audio/correct.wav');
const incorrectAudio = new Audio('Audio/incorrect.wav');

// Function to play correct audio
function playCorrectAudio() {
    correctAudio.play();
}

// Function to play incorrect audio
function playIncorrectAudio() {
    incorrectAudio.play();
}

function checkOrder() {
    const currentQuestion = questions[currentQuestionIndex];

    // Initialize selectedWords if it's undefined
    if (!selectedWords) {
        selectedWords = [];
    }

    // Disable pointer events on elements within the answerField
    answerField.childNodes.forEach(wordSpan => {
        if (wordSpan instanceof HTMLElement) {
            wordSpan.style.pointerEvents = 'none';
        }
    });

    checkButton.style.display = 'none';

    if (currentQuestion.Mcquestion) {
        // Handle multiple-choice question here
        if (selectedMcqOption !== undefined) {
            // Get the selected option and correct option
            const selectedOption = currentQuestion.options[selectedMcqOption];
            const correctOption = currentQuestion.options[currentQuestion.correctOption];

            if (selectedOption === correctOption) {
                // Change the image to a success image
                conditionImages = successImages;
                playCorrectAudio();

                mainContainer.style.background = 'linear-gradient(0deg, rgba(77,224,1,1) 0%, rgba(200,255,177,1) 35%, rgba(255,255,255,1) 100%)';
                resultElement.textContent = getRandomMessage(correctMessages);
                resultElement.style.color = 'rgb(236 58 45 / 95%)';
                correctAnswers++;
                correctAnswerH3.style.display = 'none';
                correctAnswerElement.textContent = 'Correct';
                resultContainer.style.background = 'rgba(197 236 174 / 76%)';
            } else {
                // Change the image to a lose image
                conditionImages = loseImages;
                playIncorrectAudio();
                mainContainer.style.background = 'linear-gradient(0deg, rgba(224,1,1,1) 0%, rgba(255,177,177,1) 35%, rgba(255,255,255,1) 100%)';
                resultElement.textContent = getRandomMessage(incorrectMessages);
                resultElement.style.color = 'rgb(236 58 45 / 95%)';
                incorrectAnswers++;
                resultContainer.style.background = 'rgba(255, 217, 212, 0.9)';

                correctAnswerElement.textContent = correctOption;
            }

            // Randomly select an image for the condition
            const randomImage = conditionImages[Math.floor(Math.random() * conditionImages.length)];
            gameImage.src = randomImage;

            resultContainer.style.display = 'flex';
        }
    } else {
        // Handle other question types here
        const userAnswer = selectedWords.join(' ');

        if (userAnswer === currentQuestion.correctOrder.join(' ')) {
            // Change the image to a success image
            conditionImages = successImages;
            playCorrectAudio();

            mainContainer.style.background = 'linear-gradient(0deg, rgba(77,224,1,1) 0%, rgba(200,255,177,1) 35%, rgba(255,255,255,1) 100%)';
            resultElement.textContent = getRandomMessage(correctMessages);
            resultElement.style.color = 'rgb(236 58 45 / 95%)';
            correctAnswers++;
            correctAnswerH3.style.display = 'none';
            correctAnswerElement.textContent = 'Correct';
            resultContainer.style.background = 'rgba(197 236 174 / 76%)';
        } else {
            // Change the image to a lose image
            conditionImages = loseImages;
            playIncorrectAudio();
            mainContainer.style.background = 'linear-gradient(0deg, rgba(224,1,1,1) 0%, rgba(255,177,177,1) 35%, rgba(255,255,255,1) 100%)';
            resultElement.textContent = getRandomMessage(incorrectMessages);
            resultElement.style.color = 'rgb(236 58 45 / 95%)';
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

// Modify the speakQuestion function to accept a parameter for the question
function speakQuestion(question) {
    // Replace underscores with spaces
    question = question.replace(/___/g, 'Dash');
    
    // Determine the language of the current question
    const language = detectLanguage(question);

    // Check if the language is English or Hindi before speaking
    if (language === 'en' || language === 'hi') {
        // Cancel the previous speech synthesis if it's still speaking
        if (currentUtterance && speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(question);

        // Set the voice based on the language
        const voices = speechSynthesis.getVoices();
        let selectedVoice = null;

        if (language === 'hi') {
            // Use an Indian Hindi voice
            selectedVoice = voices.find(voice => voice.lang === 'hi-IN');
        } else if (language === 'en') {
            // Use an Indian English voice
            selectedVoice = voices.find(voice => voice.lang === 'en-IN');
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
// Create a button for capturing and sharing
const captureAndShareButton = document.getElementById('screenshot-btn');
captureAndShareButton.textContent = 'Share';

// Add an event listener to the capture and share button
captureAndShareButton.addEventListener('click', () => {
    // Capture the full screen as an image
    html2canvas(document.body).then(function (canvas) {
      // Crop the image to 500px by 500px from the center
      const ctx = canvas.getContext('2d');
      const sourceX = (canvas.width - 500) / 2;
      const sourceY = (canvas.height - 500) / 2;
      const sourceWidth = 500;
      const sourceHeight = 500;
  
      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = sourceWidth;
      croppedCanvas.height = sourceHeight;
  
      const croppedCtx = croppedCanvas.getContext('2d');
      croppedCtx.drawImage(canvas, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight);
  
      // Convert the cropped canvas to a Blob object
      croppedCanvas.toBlob((blob) => {
        // Create a shareable file from the Blob
        const shareableFile = new File([blob], 'screenshot.png', { type: 'image/png' });
        const myResult = 'I scored ' + PercentageValue.toFixed(2) + '% in the Learn Lingo Game!';
        const shareData = {
          title: 'Check out my Learn Lingo result!',
          text: myResult,
          url: 'https://eduplayzone.online/Games/LLG/', // Add the URL you want to share
          files: [shareableFile],
        };
        console.log(myResult);
  
        // Check if the Web Share API is supported
        if (navigator.share) {
          navigator
            .share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
          // Fallback for browsers that do not support Web Share API
          alert('Web Share API is not supported in your browser. You can manually share the image.');
        }
      }, 'image/png');
    });
  });
   