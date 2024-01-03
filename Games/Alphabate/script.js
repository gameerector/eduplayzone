// Define your questions and options
const questions = [
  {
    question: "A for ",
    options: [ "\u{1F34E} Apple",
               "\u{26BD} Ball ",
               "\u{1F431} Cat ",
               "\u{1F436} Dog "],
    answer: 0
  },
  {
    question: "B for ",
    options: [ "Cat \u{1F431}", 
               "Apple \u{1F34E}",
               "Ball \u{26BD}",
               "Dog \u{1F436}"],
    answer: 2
  },
  {
    question: "C for ",
    options: [ "Ball \u{26BD}",
               "Apple \u{1F34E}",
               "Dog \u{1F436}",
               "Cat \u{1F431}"],
    answer: 3
  },
  {
    question: "D for ",
    options: [ "Fish \u{1F41F}",
               "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Egg \u{1F95A}"],
    answer: 2
  },
  {
    question: "E for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 3
  },
{
    question: "F for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 2
    },
    {
    question: "G for ",
    options: [ "Giraffe \u{1F992}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "H for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Hat \u{1F3A9}"],
    answer: 3
    },
    {
    question: "I for ",
    options: [ "Ball \u{26BD}",
               "Ice-Cream \u{1F366}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 1
    },
    {
    question: "J for ",
    options: [ "Joker \u{1F0CF}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "K for ",
    options: [ "Kite \u{1FA81}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "L for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Lion \u{1F981}"],
    answer: 3
    },
    {
    question: "M for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Mango \u{1F96D}",
               "Elephant \u{1F418}"],
    answer: 2
    },
    {
    question: "N for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Nest \u{1FA86}"],
    answer: 3
    },
    {
    question: "O for ",
    options: [ "Ball \u{26BD}",
               "Owl \u{1F989}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 1
    },
    {
    question: "P for ",
    options: [ "Parrot \u{1F99C}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "Q for ",
    options: [ "Queen \u{2655}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "R for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Rose \u{1F339}",
               "Elephant \u{1F418}"],
    answer: 2
    },
    {
    question: "S for ",
    options: [ "Ball \u{26BD}",
               "Snake \u{1F40D}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 1
    },
    {
    question: "T for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Tiger \u{1F42F}"],
    answer: 3
    },
    {
    question: "U for ",
    options: [ "Umbrella \u{2614}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "V for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Van \u{1F6A8}",
               "Elephant \u{1F418}"],
    answer: 2
    },
    {
    question: "W for ",
    options: [ "Ball \u{26BD}",
               "Watermelon \u{1F349}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 1
    },
    {
    question: "X for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "X-Mas \u{0058}"],
    answer: 3
    },
    {
    question: "Y for ",
    options: [ "Yak \u{2D3F}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Elephant \u{1F418}"],
    answer: 0
    },
    {
    question: "Z for ",
    options: [ "Ball \u{26BD}",
               "Dog \u{1F436}",
               "Fish \u{1F41F}",
               "Zebra \u{1F993}"],
    answer: 3
    },
  // Add more questions here...
];

const answerAudio = {
  "Apple \u{1F34E}" : "Audio/Apple.mp3",
  "Ball \u{26BD}"   : "Audio/Ball.mp3",
  "Cat \u{1F431}"   : "Audio/Cat.mp3",
  "Dog \u{1F436}"   : "Audio/Dog.mp3",
  "Elephant \u{1F418}"   :   "Audio/Elephant.mp3",
  "Fish \u{1F41F}"  :   "Audio/Fish.mp3",
  "Giraffe \u{26BD}"  :   "Audio/Giraffe.mp3",
  "Hat \u{1F3A9}"  :   "Audio/Hat.mp3",
  "Ice-Cream \u{1F366}"  :   "Audio/Ice Cream.mp3",
  "Joker \u{1F0CF}"  :   "Audio/Joker.mp3",
  "Kite \u{1FA81}"  :   "Audio/Kite.mp3",
  "Lion \u{1F981}"  :   "Audio/Lion.mp3",
  "Mango \u{1F96D}"  :   "Audio/Mango.mp3",
  "Nest \u{1FA86}"  :   "Audio/Nest.mp3",
  "Owl \u{1F989}"  :   "Audio/Owl.mp3",
  "Parrot \u{1F99C}"  :   "Audio/Parrot.mp3",
  "Queen \u{2655}"  :   "Audio/Queen.mp3",
  "Rose \u{1F339}"  :   "Audio/Rose.mp3",
  "Snake \u{1F40D}"  :   "Audio/Snake.mp3",
  "Tiger \u{1F42F}"  :   "Audio/Tiger.mp3",
  "Umbrella \u{2614}"  :   "Audio/Umbrella.mp3",
  "Van \u{1F6A8}"  :   "Audio/Van.mp3",
  "Watermelon \u{1F349}" :    "Audio/Watermelon.mp3",
  "X-Mas \u{0058}"  :   "Audio/X Mas.mp3",
  "Yak \u{2D3F}"  :   "Audio/Yak.mp3",
  "Zebra \u{1F993}"  :   "Audio/Zebra.mp3",
  // Add more options and their audio paths if needed
};

let currentQuestion = 0;
let score = 0;

// Preload all audio files
function preloadAudio() {
  for (const option in answerAudio) {
    const audioElement = new Audio(answerAudio[option]);
    audioElement.preload = "auto";
  }
}

// Call preloadAudio before initializing the quiz
preloadAudio();

const questionsWithLineBreak = questions.map(question => {
  const optionsWithLineBreak = question.options.map(option => {
    const [emoji, text] = option.split(' ');
    return `<div>${emoji}</div><div>${text}</div>`;
  });

  return {
    ...question,
    options: optionsWithLineBreak
  };
});

// Function to initialize the quiz
function initializeQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Function to load the question and options
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const serialNumberElement = document.getElementById("QNoT");
  const optionsElement = document.getElementById("options");
  const questionData = questions[currentQuestion];
  const serialNumber = currentQuestion + 1;

  serialNumberElement.textContent = "Q" + serialNumber;
  questionElement.textContent = questionData.question + "___?";

  // Extract the question part without the "___?" symbol
  const questionText = questionData.question;
  speakText(questionText); // it will speak question part
  
  // Clear previous options
  optionsElement.innerHTML = "";

  // Create option buttons
  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsElement.appendChild(button);
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const questionData = questions[currentQuestion];
  const selectedButton = event.target;

  if (selectedOption === questionData.answer) {
     playCorrectAnswerAudio(questionData.options[selectedOption]);
     score++;
     selectedButton.classList.add("correct");
     document.getElementById("question").textContent =
     questionData.question + questionData.options[selectedOption];
     

    // Confetti code
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    selectedButton.classList.add("wrong");
  }

  // Disable options after selection
  const options = document.querySelectorAll(".option");
  options.forEach((option) => (option.disabled = true));

  // Wait for 1 second before loading the next question
  setTimeout(nextQuestion, 3000);
}

// Function to play the correct answer audio
function playCorrectAnswerAudio(option) {
  const audioElement = new Audio();
  const audioPath = answerAudio[option];
  if (audioPath) {
    audioElement.src = audioPath;
    audioElement.play();
  }
}

// Function to clear option styles
function clearOptionStyles() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("correct", "wrong");
    option.disabled = false;
  });
}

// Function to load the next question
function nextQuestion() {
  clearOptionStyles();

  // Cancel any ongoing speech synthesis
  const speechSynthesis = window.speechSynthesis;
  speechSynthesis.cancel();

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}


// Function to show the final score
function showResult() {
  const percentage = (score / questions.length) * 100;
  const quizContainer = document.getElementById("quiz-container");
  const resultHTML = `
    <h2>Your score: ${score}/${questions.length}</h2>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
    <button id="restart-btn">Restart Quiz</button>
  `;
  quizContainer.innerHTML = resultHTML;

  // Add event listener to restart button
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => {
    location.reload(); // Reload the page
  });
}

function speakText(text, rate = 0.8) {
  const speechSynthesis = window.speechSynthesis;

  // Cancel any ongoing speech synthesis
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text); // Use the 'text' parameter here
  utterance.lang = "hi-IN"; // Set the language code for Indian accent
  utterance.rate = rate; // Set the speech rate (0.1 - 10.0)

  // Event listener for when speech synthesis finishes
  utterance.onend = () => {
    // Enable the next level button
  };

  speechSynthesis.speak(utterance);
}

//loading screen by time 
    document.addEventListener("DOMContentLoaded", () => {
      const loadingScreen = document.querySelector(".loading-screen");
      const loadingBar = document.querySelector(".loading-bar");
      const loadingProgress = document.querySelector(".loading-progress");
      const loadingDuration = 3000; // 3 seconds
      let loadingTime = 0;

      // Function to update the loading progress
      function updateLoadingProgress(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;

        const progress = Math.min((elapsedTime / loadingDuration) * 100, 100);
        loadingBar.style.width = progress + "%";
        loadingProgress.textContent = `Loading... ${progress.toFixed(0)}%`;

        if (progress < 100) {
          requestAnimationFrame(updateLoadingProgress);
        } else {
          // Hide the loading screen
          loadingScreen.style.display = "none";
          // Start the quiz
          initializeQuiz();
        }
      }

      // Call updateLoadingProgress to start the loading animation
      let startTime;
      requestAnimationFrame(updateLoadingProgress);

    });