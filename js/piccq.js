let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let rounds = [];
let selectedQuestions = [];
let countdownTimer;
let gameStarted = true;  // Set this to true, so the game starts immediately

const correctSound = new Audio('../assets/songs/acorrect.wav'); // Right answer sound
const wrongSound = new Audio('../assets/songs/awrong.wav');    // Wrong answer sound
const resultSound = new Audio('../assets/songs/applause.mp3');  // Result page sound

// Load JSON data
function loadJSON() {
    fetch('../assets/js/piccq.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            rounds = data.pic;
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
    // Load the initial score from Round 2 (Connection Quiz)
    const quiz2Score = localStorage.getItem('quiz2Score') || 0;
    const quiz2CorrectAnswers = localStorage.getItem('quiz2CorrectAnswers') || 0;
    const quiz2WrongAnswers = localStorage.getItem('quiz2WrongAnswers') || 0;

    score += parseInt(quiz2Score);
    correctAnswers += parseInt(quiz2CorrectAnswers);
    wrongAnswers += parseInt(quiz2WrongAnswers);

    updateScoreboard();
    loadJSON();
};

// Load the question
function loadQuestion(questionIndex) {
    if (selectedQuestions.length === 0 || questionIndex >= selectedQuestions.length) {
        console.error('Invalid question index or questions data is empty.');
        return;
    }

    // Reset the styles for all options
    document.querySelectorAll('.image-option').forEach(option => {
        option.classList.remove('correct', 'wrong');
        option.style.pointerEvents = 'auto'; // Re-enable clicking
    });

    let question = selectedQuestions[questionIndex];
    document.getElementById("text-prompt").textContent = question.text;
    document.getElementById("article-part").textContent = question.article_part;
    document.getElementById("option1").style.backgroundImage = `url(../assets/${question.options[0]})`;
    document.getElementById("option2").style.backgroundImage = `url(../assets/${question.options[1]})`;
    document.getElementById("option3").style.backgroundImage = `url(../assets/${question.options[2]})`;
    document.getElementById("option4").style.backgroundImage = `url(../assets/${question.options[3]})`;

    document.getElementById("option1").onclick = () => checkAnswer('option1');
    document.getElementById("option2").onclick = () => checkAnswer('option2');
    document.getElementById("option3").onclick = () => checkAnswer('option3');
    document.getElementById("option4").onclick = () => checkAnswer('option4');

    startAnalogTimer();
}

// Function to Show Confetti
function showConfetti() {
    const confettiWrapper = document.createElement("div");
    confettiWrapper.className = "confetti-wrapper";

    // Generate multiple confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = randomColor();
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confettiWrapper.appendChild(confetti);
    }

    document.body.appendChild(confettiWrapper);

    // Remove confetti after animation
    setTimeout(() => {
        confettiWrapper.remove();
    }, 5000);
}

// Function to Generate Random Confetti Colors
function randomColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFFF33"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Check the selected answer
function checkAnswer(selectedOption) {
    clearInterval(countdownTimer);

    // Get the correct answer from the current question
    const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

    // Disable further interaction with options
    document.querySelectorAll('.image-option').forEach(option => {
        option.style.pointerEvents = 'none'; // Disable further clicks on options

        // Mark options as correct or wrong
        if (option.id === selectedOption) {
            option.classList.add(selectedOption === correctAnswer ? 'correct' : 'wrong');
        }

        // Highlight the correct answer
        if (option.id === correctAnswer) {
            option.classList.add('correct');
        }
    });

    // Check if the selected option is correct
    if (selectedOption === correctAnswer) {
        score += 10;
        correctAnswers++;
        showConfetti(); // Trigger confetti for a correct answer
        correctSound.play();
    } else {
        wrongAnswers++;
        wrongSound.play();
    }

    // Update the scoreboard
    updateScoreboard();

    // Display explanation
    const explanation = selectedQuestions[currentQuestionIndex].explanation || "No explanation available.";
    document.getElementById("explanationText").textContent = explanation;
    document.getElementById("explanation").style.display = 'block';

    // Show the "Next Question" button
    document.getElementById("next-question").style.display = 'block';
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
    let correctAnswer = selectedQuestions[currentQuestionIndex].answer;
    document.querySelectorAll('.image-option').forEach(option => {
        option.style.pointerEvents = 'none'; // Disable further clicks on options

        if (option.id === correctAnswer) {
            option.classList.add('correct'); // Mark the correct answer in green
        }
    });
    wrongAnswers++;
    updateScoreboard();
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
    localStorage.setItem('quiz3Score', score);
    localStorage.setItem('quiz3CorrectAnswers', correctAnswers);
    localStorage.setItem('quiz3WrongAnswers', wrongAnswers);

    // Display result section and hide game section
    document.querySelector('.game-container').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    const resultDetails = document.getElementById('result-details');
    resultDetails.innerHTML = `
        <p>Your score: ${score}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
    `;
    showConfetti();

    if (wrongAnswers >= 15) {
        document.getElementById('restart-btn').style.display = 'block';
        resultDetails.innerHTML += `<p>You have been disqualified. Please try again!</p>`;
    } else {
        document.getElementById('next-level-btn').style.display = 'block';
        resultDetails.innerHTML += `<p>Congratulations! You have qualified for the next round.</p>`;
    }
    resultSound.play();
}

// Restart the quiz from the beginning
function restartQuiz() {
    window.location.href = '../pages/quiz.html'; // Redirect to the start of Round 2
}

function proceedToNextLevel() {
    // Store scores in local storage
    localStorage.setItem('totalScore', score);
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);

    // Redirect to Arrow Game
    window.location.href = '../pages/arrowFront.html'; // Change the URL to the Arrow Game
}

// Skip the video if available
function skipVideo() {
    document.getElementById("vertical-frame").style.display = 'none';
}

// Close the explanation box
function closeExplanation() {
    document.getElementById("explanation").style.display = 'none';
}