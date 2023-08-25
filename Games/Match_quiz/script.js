const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const highestScoreElement = document.getElementById('highest-score');



let score = 0;
let highestScore = localStorage.getItem('highestScore') || 0; // Retrieve the highest score from localStorage
console.log('Initial highestScore:', highestScore);
let timer;
let timeLimit = 15; // in seconds

function updateHighestScore() {
    if (score > highestScore) {
        highestScore = score;
        highestScoreElement.textContent = `Highest Score: ${highestScore}`;
        localStorage.setItem('highestScore', highestScore); // Save the highest score to localStorage
         console.log('Updated highestScore:', highestScore); // Add this line

        const Hs_TextSpan = document.createElement('span'); // Create a span element for fall text
        Hs_TextSpan.textContent = 'Highest Score 🥳';
        Hs_TextSpan.classList.add('Hs-text');
        
        questionElement.appendChild(Hs_TextSpan); // Append the span inside the clicked button
    }
}

function showRetryButton() {
    retryDiv.classList.remove('hidden');
}

// Array of emojis
const happyEmojis = ["😀", "😄", "😁", "🙂", "😎"];
const sadEmojis = ["😢", "😡", "😔", "🤬", "😭"];

// Function to get a random emoji from an array
function getRandomEmoji(emojiArray) {
  const randomIndex = Math.floor(Math.random() * emojiArray.length);
  return emojiArray[randomIndex];
}

const operators = ['+', '-', '*', '/'];

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getRandomOperator() {
    return operators[Math.floor(Math.random() * operators.length)];
}

function generateQuestion() {
    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(10);
    const operator = getRandomOperator();

    let question, correctAnswer;

    if (operator === '+') {
        question = `${num1} ${operator} ${num2}`;
        correctAnswer = num1 + num2;
    } else if (operator === '-') {
        question = `${num1} ${operator} ${num2}`;
        correctAnswer = num1 - num2;
    } else if (operator === '*') {
        question = `${num1} ${operator} ${num2}`;
        correctAnswer = num1 * num2;
    } else if (operator === '/') {
        const product = num1 * num2;
        question = `${product} ${operator} ${num2}`;
        correctAnswer = num1;
    }

    const options = [correctAnswer];
    while (options.length < 3) {
        const randomOption = correctAnswer + getRandomNumber(10) - 5;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    options.sort(() => Math.random() - 0.5);

    questionElement.textContent = question;
    optionsElement.innerHTML = '';
    options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.dataset.option = option; // Assign the data-option attribute
        button.addEventListener('click', () => checkAnswer(option, correctAnswer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    clearInterval(timer);

    const selectedButton = optionsElement.querySelector(`button[data-option="${selectedOption}"]`);
    const rect = selectedButton.getBoundingClientRect();

    // Get a random happy face emoji
const randomHappyEmoji = getRandomEmoji(happyEmojis);
//console.log("Random Happy Emoji:", randomHappyEmoji);

// Get a random sad face emoji
const randomSadEmoji = getRandomEmoji(sadEmojis);
//console.log("Random Sad Emoji:", randomSadEmoji);


    if (parseFloat(selectedOption) === correctAnswer) {
        score += 10;

        const upTextSpan = document.createElement('span'); // Create a span element for fall text
        upTextSpan.textContent = '10+ '+randomHappyEmoji;
        upTextSpan.classList.add('up-text');
        
        selectedButton.appendChild(upTextSpan); // Append the span inside the clicked button
    } else {
        score -= 5;
        score = Math.max(0, score);

        const fallTextSpan = document.createElement('span'); // Create a span element for fall text
        fallTextSpan.textContent = '5- '+randomSadEmoji;
        fallTextSpan.classList.add('fall-text');
        
        selectedButton.appendChild(fallTextSpan); // Append the span inside the clicked button
    }

    scoreElement.textContent = `Score: ${score}`;
  //updateHighestScore();
    setTimeout(() => {
      generateQuestion();
      startTimer();
    }, 500); // Adjust the timeout duration as needed
}

const retryButton = document.getElementById('retry-button');
const retryDiv = document.getElementById('retry');

retryButton.addEventListener('click', () => {
    retryDiv.classList.add('hidden');
    scoreElement.style.display = "none";
    highestScoreElement.style.display = "none";
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    generateQuestion();
    startTimer();
});

function startTimer() {
    let timeLeft = timeLimit;
    timerElement.textContent = `Time: ${timeLeft}s`;

    timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time: ${timeLeft}s`;

    if (timeLeft === 0) {
        clearInterval(timer);
        retryDiv.classList.remove('hidden');
        scoreElement.style.display = "block";
        highestScoreElement.style.display = "block";
        highestScoreElement.textContent = `Highest Score: ${highestScore}`;
        questionElement.textContent = 'Time\'s up!';
        optionsElement.innerHTML = '';

        updateHighestScore();
        showRetryButton();

        // Update highestScore in localStorage after timer ends
        localStorage.setItem('highestScore', highestScore);
        }
    }, 1000);
}


// Immediately update the highest score after retrieving it from localStorage
updateHighestScore();

generateQuestion();
startTimer(); // Move the startTimer() call here