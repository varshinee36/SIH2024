let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let rounds = [];
let selectedQuestions = [];
let countdownTimer;
let gameStarted = false;  // Add this line at the top

const correctSound = new Audio('../assets/songs/acorrect.wav'); // Right answer sound
const wrongSound = new Audio('../assets/songs/awrong.wav');    // Wrong answer sound
const resultSound = new Audio('../assets/songs/applause.mp3');  // Result page sound

// Load JSON data
function loadJSON() {
    fetch('../assets/js/conn.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            rounds = data.conn;
            selectRandomQuestions();
            loadQuestion(currentQuestionIndex);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// Select five random questions
function selectRandomQuestions() {
    while (selectedQuestions.length < 5) {
        let randomIndex = Math.floor(Math.random() * rounds.length);
        if (!selectedQuestions.includes(rounds[randomIndex])) {
            selectedQuestions.push(rounds[randomIndex]);
        }
    }
}

// Initialize the game
window.onload = function() {
    // Load the initial score from Quiz 1
    const quiz1Score = localStorage.getItem('quiz1Score') || 0;
    const quiz1CorrectAnswers = localStorage.getItem('quiz1CorrectAnswers') || 0;
    const quiz1WrongAnswers = localStorage.getItem('quiz1WrongAnswers') || 0;

    score += parseInt(quiz1Score);
    correctAnswers += parseInt(quiz1CorrectAnswers);
    wrongAnswers += parseInt(quiz1WrongAnswers);
    cw = 0;
    cr = 0;

    updateScoreboard();
    loadJSON();
};

function loadQuestion(questionIndex) {
    if (selectedQuestions.length === 0 || questionIndex >= selectedQuestions.length) {
        console.error('Invalid question index or questions data is empty.');
        return;
    }
    let question = selectedQuestions[questionIndex];
    document.getElementById("clue1").style.backgroundImage = `url(../assets/${question.clues[0]})`;
    document.getElementById("clue2").style.backgroundImage = `url(../assets/${question.clues[1]})`;
    document.getElementById("clue3").style.backgroundImage = `url(../assets/${question.clues[2]})`;
    document.getElementById("article-part").textContent = question.article_part;
    document.getElementById("result").textContent = "Guess the connection between these images.";
    displayOptions(question.options);

    if (gameStarted) {
        startAnalogTimer(); // Start the timer only when the game has started
    }
}

// Shuffle the options array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Display the options
function displayOptions(options) {
    let optionsContainer = document.getElementById("mcq-options");
    optionsContainer.innerHTML = "";
    
    shuffleArray(options); // Shuffle the options before displaying
    
    options.forEach(option => {
        let optionDiv = document.createElement('div');
        optionDiv.classList.add('mcq-option');
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionDiv);
    });
}

// Confetti Effect
function showConfetti() {
    const confettiEffect = document.createElement("div");
    confettiEffect.className = "confetti-wrapper";

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = randomColor();
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confettiEffect.appendChild(confetti);
    }

    document.body.appendChild(confettiEffect);

    setTimeout(() => {
        confettiEffect.remove(); // Remove confetti after animation
    }, 5000);
}

// Generate random confetti colors
function randomColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFFF33"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Integration: Add confetti effect on correct answer
function checkAnswer(userAnswer = null) {
    clearInterval(countdownTimer);
    let correctAnswer = selectedQuestions[currentQuestionIndex].answer;

    document.querySelectorAll('.mcq-option').forEach(option => {
        option.classList.remove('correct', 'wrong');
        option.style.pointerEvents = 'none'; // Disable further clicks on options

        if (userAnswer !== null) {
            if (option.textContent === userAnswer) {
                option.classList.add(userAnswer === correctAnswer ? 'correct' : 'wrong');
                if (userAnswer === correctAnswer) {
                    correctSound.play();
                    showConfetti(); // Trigger confetti
                } else {
                    wrongSound.play();
                }
            }
        }

        // Mark the correct answer in green
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });

    // Update score and stats
    if (userAnswer === correctAnswer) {
        score += 10;
        correctAnswers++;
        cr++;
    } else if (userAnswer !== null) {
        wrongAnswers++;
        cw++;
    } else {
        wrongAnswers++;
        cw++;
    }
    updateScoreboard();

    // Show explanation
    document.getElementById("explanationText").textContent = selectedQuestions[currentQuestionIndex].explanation || "No explanation available.";
    document.getElementById("explanation").style.display = 'block';

    // Show the "Next Question" button
    document.getElementById("next-question").style.display = 'block';
}

// Show confetti on successful round completion
function showFinalResult() {
    localStorage.setItem('quiz2Score', score);
    localStorage.setItem('quiz2CorrectAnswers', correctAnswers);
    localStorage.setItem('quiz2WrongAnswers', wrongAnswers);

    document.querySelector('.game-container').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    const resultDetails = document.getElementById('result-details');
    resultDetails.innerHTML = `
        <p>Round 2</p>
        <p>Correct Answers: ${cr}</p>
        <p>Wrong Answers: ${cw}</p>
        <p>Your score: ${score}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
    `;

    if (cw >= 5) {
        document.getElementById('restart-btn').style.display = 'block';
        resultDetails.innerHTML += `<p>You have been disqualified. Please try again!</p>`;
    } else {
        document.getElementById('next-level-btn').style.display = 'block';
        resultDetails.innerHTML += `<p>Congratulations! You have qualified for the next round.</p>`;
        showConfetti(); // Show confetti if the player qualifies
    }
}

// Start the analog timer
function startAnalogTimer() {
    let timeLeft = 30; // Reset timer to 30 seconds
    document.getElementById("timer-label").textContent = `Time Left: ${timeLeft}s`;

    let pointer = document.getElementById("timer-pointer");
    pointer.style.transform = 'rotate(0deg)'; // Reset the pointer

    countdownTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer-label").textContent = `Time Left: ${timeLeft}s`;
        let rotation = 360 * (timeLeft / 30);
        pointer.style.transform = `rotate(${360 - rotation}deg)`; // Rotate the pointer

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            handleAnswerClickTimeout();
        }
    }, 1000);
}

// Handle timeout by revealing correct answer and disabling options
function handleAnswerClickTimeout() {
    checkAnswer(); // Call checkAnswer with no parameters to mark the question as unanswered
    document.getElementById("next-question").style.display = 'block'; // Show the "Next Question" button
}

// Update the scoreboard
function updateScoreboard() {
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("correct").textContent = `Correct Answers: ${correctAnswers}`;
    document.getElementById("wrong").textContent = `Wrong Answers: ${wrongAnswers}`;
}

// Show the popup message
function showPopup(message, type) {
    document.getElementById("popupMessage").textContent = message;
    document.getElementById("popup").style.display = 'block';
}

// Close the popup and move to next question
function closePopup() {
    document.getElementById("popup").style.display = 'none';
}

// Move to next question or finish the quiz
function nextQuestion() {
    document.getElementById("explanation").style.display = 'none'; // Hide explanation
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion(currentQuestionIndex);
        document.getElementById("next-question").style.display = 'none'; // Hide the Next button again until the next answer
    } else {
        showFinalResult();
    }
}

// Show final result
function showFinalResult() {
    // Store the final scores in local storage
    localStorage.setItem('quiz2Score', score);
    localStorage.setItem('quiz2CorrectAnswers', correctAnswers);
    localStorage.setItem('quiz2WrongAnswers', wrongAnswers);

    // Display result section and hide game section
    document.querySelector('.game-container').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    const resultDetails = document.getElementById('result-details');
    resultDetails.innerHTML = `
        <p>Round 2</p>
        <p>Correct Answers: ${cr}</p>
        <p>Wrong Answers: ${cw}</p>
        <p>Your score: ${score}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
    `;
    resultSound.play();

    if (cw >= 5) {
        document.getElementById('restart-btn').style.display = 'block';
        resultDetails.innerHTML += `<p>You have been disqualified. Please try again!</p>`;
    } else {
        document.getElementById('next-level-btn').style.display = 'block';
        resultDetails.innerHTML += `<p>Congratulations! You have qualified for the next round.</p>`;
    }
}

// Restart the quiz from the beginning
function restartQuiz() {
    window.location.href = 'index.html'; // Redirect to the start of round 1
}

// Proceed to the next level
function proceedToNextLevel() {
    window.location.href = 'piccqFront.html'; // Redirect to round 3
}

// Skip the video if available
function skipVideo() {
    document.getElementById("vertical-frame").style.display = 'none';
}

// Close the explanation box
function closeExplanation() {
    document.getElementById("explanation").style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const instructionContainer = document.getElementById("instruction-container");
    const closeInstructions = document.getElementById("close-instructions");

    // Close instructions and avatar
    closeInstructions.addEventListener("click", () => {
        instructionContainer.style.display = "none"; // Hide the instruction box
        const cartoonImage = document.getElementById("cartoonImage");
        cartoonImage.style.animation = "slide-back 2s forwards"; // Slide the avatar out
        startQuiz(); // Start the quiz after closing the instructions
    });

    // Ensure avatar slides in when the instructions are displayed
    const cartoonImage = document.getElementById("cartoonImage");
    cartoonImage.style.animation = "slide-in 2s forwards"; // Show the avatar when the instructions are shown
});

document.getElementById("close-instructions").addEventListener("click", () => {
    const instructionContainer = document.getElementById("instruction-container");
    instructionContainer.style.display = "none"; // Hide the instruction box

    gameStarted = true;  // Mark the game as started

    // Load the first question and start the timer
    loadQuestion(currentQuestionIndex);
});

// Start the quiz when instructions are closed
function startQuiz() {
    const startScreen = document.querySelector(".start-screen");
    const quiz = document.querySelector(".quiz");

    startScreen.classList.add("hide");
    quiz.classList.remove("hide");
}

// For Result Avatar Animation
document.addEventListener("DOMContentLoaded", () => {
  const resultAvatar = document.getElementById("resultAvatar");
  
  // Trigger the avatar slide-in animation when the result page is loaded
  if (resultAvatar) {
      resultAvatar.style.animation = "slide-in 2s forwards"; // Animation for result avatar
  }
});