var svg = document.querySelector("svg");
var cursor = svg.createSVGPoint();
var arrows = document.querySelector(".arrows");
var randomAngle = 0;

const aimSound = new Audio('../assets/songs/aim.mp3'); // Sound for aiming the bow
const releaseSound = new Audio('../assets/songs/release.mp3'); // Sound for releasing the arrow
const hitSound = new Audio('../assets/songs/hit.wav'); // Sound for hitting the target

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    
}

// Bow rotation point
var pivot = { x: 100, y: 250 };
aim({ clientX: 320, clientY: 300 });

// Set up start drag event
window.addEventListener("mousedown", draw);

function draw(e) {
    randomAngle = (Math.random() * Math.PI * 0.03) - 0.015;
    TweenMax.to(".arrow-angle use", 0.3, { opacity: 1 });
    window.addEventListener("mousemove", aim);
    window.addEventListener("mouseup", loose);
    aim(e);
}

function aim(e) {
    const point = getMouseSVG(e);
    const angleLimit = Math.PI / 3;
    const dx = pivot.x - point.x;
    const dy = pivot.y - point.y;
    let angle = Math.atan2(dy, dx) + randomAngle;

    angle = Math.max(Math.min(angle, angleLimit), -angleLimit);
    const bowAngle = angle;

    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 50);
    const scale = Math.max(Math.min(distance / 30, 2), 1);

    TweenMax.to("#bow", 0.3, { scaleX: scale, rotation: `${bowAngle}rad`, transformOrigin: "right center" });

    const arrowX = Math.min(pivot.x - (1 / scale) * distance, 88);
    TweenMax.to(".arrow-angle", 0.3, { rotation: `${bowAngle}rad`, svgOrigin: "100 250" });
    TweenMax.to(".arrow-angle use", 0.3, { x: -distance });
    TweenMax.to("#bow polyline", 0.3, { attr: { points: `88,200 ${arrowX},250 88,300` } });

    const radius = distance * 9;
    const offset = { x: Math.cos(bowAngle) * radius, y: Math.sin(bowAngle) * radius };
    const arcWidth = offset.x * 3;

    TweenMax.to("#arc", 0.3, {
        attr: { d: `M100,250c${offset.x},${offset.y},${arcWidth - offset.x},${offset.y + 50},${arcWidth},50` },
        autoAlpha: distance / 60,
    });
    aimSound.play();
}

function loose() {
    window.removeEventListener("mousemove", aim);
    window.removeEventListener("mouseup", loose);

    TweenMax.to("#bow", 0.4, { scaleX: 1, transformOrigin: "right center", ease: Elastic.easeOut });
    TweenMax.to("#bow polyline", 0.4, { attr: { points: "88,200 88,250 88,300" }, ease: Elastic.easeOut });

    const newArrow = document.createElementNS("http://www.w3.org/2000/svg", "use");
    newArrow.classList.add("arrow");
    newArrow.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#arrow");
    arrows.appendChild(newArrow);

    const path = MorphSVGPlugin.pathDataToBezier("#arc");
    TweenMax.to(newArrow, 0.5, {
        force3D: true,
        bezier: { type: "cubic", values: path, autoRotate: ["x", "y", "rotation"] },
        onUpdate: () => hitTest(newArrow),
        onComplete: onMiss,
        ease: Linear.easeNone,
    });
    TweenMax.to("#arc", 0.3, { opacity: 0 });
    TweenMax.set(".arrow-angle use", { opacity: 0 });
    releaseSound.play();
}

function hitTest(arrow) {
    const arrowRect = arrow.getBoundingClientRect();
    const arrowX = arrowRect.x + arrowRect.width / 2;
    const arrowY = arrowRect.y + arrowRect.height / 2;

    const options = document.querySelectorAll(".option");
    for (const option of options) {
        const rect = option.getBoundingClientRect();
        const optionLeft = rect.left;
        const optionTop = rect.top;
        const optionRight = rect.right;
        const optionBottom = rect.bottom;

        if (arrowX >= optionLeft && arrowX <= optionRight && arrowY >= optionTop && arrowY <= optionBottom) {
            // Stop the arrow's animation
            TweenMax.killTweensOf(arrow);

            // Calculate the final position of the arrow within the option box
            const finalX = arrowX - optionLeft - arrowRect.width / 2;
            const finalY = optionTop + (optionBottom - optionTop) / 2 - arrowRect.height / 2;

            // Position the arrow within the option box
            arrow.style.position = 'absolute';
            arrow.style.left = `${finalX}px`;
            arrow.style.top = `${finalY}px`;

            // Rotate the arrow to make it stand upright
            arrow.style.transform = 'rotate(-90deg) scale(0.8)';

            // Handle the correct/incorrect answer logic as before
            const isCorrect = option.dataset.correct === "true";
            handleAnswer(option, isCorrect);

            // Prevent further interaction with the arrow
            arrow.style.pointerEvents = 'none';

            break; // Exit the loop once a hit is detected
        }
    }
}

function onMiss() {
    setTimeout(() => {
        arrows.removeChild(newArrow);
    }, 2300);
}

function getMouseSVG(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    return cursor.matrixTransform(svg.getScreenCTM().inverse());
}

let score = 0;
let aw = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let currentQuestionIndex = 0;
let roundQuestions = [];
let timerInterval;

const correctSound = new Audio('../assets/songs/acorrect.wav'); // Right answer sound
const wrongSound = new Audio('../assets/songs/awrong.wav');    // Wrong answer sound
const resultSound = new Audio('../assets/songs/applause.mp3');  // Result page sound

const timeLimit = 30;
const totalQuestions = 5; // Ensure that 5 questions are attempted

// Fetch questions from fall.json
fetch("../assets/js/fall.json")
    .then(response => response.json())
    .then(data => {
        questions = data;
        shuffleQuestions();
        loadQuestion();
    })
    .catch(error => {
        console.error("Error loading questions:", error);
    });

function shuffleQuestions() {
    // Shuffle questions and ensure exactly 5 questions are selected
    questions.sort(() => Math.random() - 0.5);
    roundQuestions = questions.slice(0, totalQuestions); // Limit to 5 questions
}

function loadQuestion() {
    // Check if all questions are answered
    if (currentQuestionIndex >= totalQuestions) {
        endGame(); // End the quiz when all questions are answered
        return;
    }

    resetArrow(); // Ensure the arrow is reset
    removeArrowEventListeners(); // Remove any existing arrow event listeners

    const questionContainer = document.getElementById("question-container");
    const questionData = roundQuestions[currentQuestionIndex];

    questionContainer.textContent = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ''; // Clear previous options

    // Shuffle options before displaying
    const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.dataset.correct = option === questionData.answer; // Retain the correct mapping
        optionElement.style.top = '-50px';
        optionElement.style.left = `${Math.random() * (optionsContainer.clientWidth - 100)}px`; // Adjusted horizontal position
        optionElement.style.animationDelay = `${index * 2}s`; // Set delay for each option
        optionsContainer.appendChild(optionElement);
    });

    startTimer(timeLimit); // Start the timer

    document.getElementById("nextButton").classList.remove("visible"); // Ensure the next button is hidden

    // Add arrow event listeners only after the question is loaded
    window.addEventListener("mousedown", draw);
}

function handleAnswer(optionElement, isCorrect) {
    stopOptions();
    removeArrowEventListeners();

    const avatarContainer = document.getElementById('avatar-container');
    const correctAvatar = document.getElementById('correct-avatar');
    const wrongAvatar = document.getElementById('wrong-avatar');

    // Reset visibility and animations
    correctAvatar.style.display = 'none';
    wrongAvatar.style.display = 'none';
    avatarContainer.classList.remove('slide-in', 'slide-out');

    clearInterval(timerInterval);

    // Determine which avatar to show
    if (isCorrect) {
        optionElement.classList.add("correct");
        score += 10;
        correctAnswers++;
        correctSound.play();
        correctAvatar.style.display = 'block';
    } else {
        optionElement.classList.add("incorrect");
        wrongAnswers++;
        aw++;
        wrongSound.play();
        wrongAvatar.style.display = 'block';
    }

    // Slide in the avatar
    avatarContainer.classList.add('slide-in');

    // Slide out the avatar after 2 seconds
    setTimeout(() => {
        avatarContainer.classList.remove('slide-in');
        avatarContainer.classList.add('slide-out');
    }, 2000);

    // Check game-over condition
    if (aw >= 2) {
        document.getElementById("nextButton").innerText = "View Results";
        document.getElementById("nextButton").onclick = endGame;
    }

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        if (option.dataset.correct === "true") {
            option.classList.add("correct");
        }
    });

    document.getElementById("nextButton").classList.add("visible");
    updateScoreboard();
    document.getElementById("explanation-container").style.display = "block";
    document.getElementById("explanation-text").textContent = roundQuestions[currentQuestionIndex].explanation || "No explanation available.";

    // Proceed to the end page if all questions are answered
    if (currentQuestionIndex === totalQuestions) {
        //showEndPage();
        endGame();

    }
}

function stopOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.animationPlayState = 'paused';
    });
}
function resetArrow() {
    // Ensure the arrow is reset to its initial state
    const arrow = document.querySelector('.arrow');
    if (arrow) {
        arrow.remove();
    }
}

function removeArrowEventListeners() {
    // Remove arrow-related event listeners to prevent unintended arrow releases
    window.removeEventListener("mousedown", draw);
    window.removeEventListener("mousemove", aim);
    window.removeEventListener("mouseup", loose);
}

function closeExplanation() {
    document.getElementById("explanation-container").style.display = "none";
}

function nextQuestion() {
    currentQuestionIndex++;  // Increment the index to move to the next question
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();  // Load the next question
    } else if (currentQuestionIndex === totalQuestions) {
        //showEndPage();  // Show end page only after all questions are attempted
        endGame();
    }

    document.getElementById("nextButton").classList.remove("visible"); // Hide the "Next Question" button

    // Clear any previous answer styles
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.remove("correct", "incorrect");
    });

    // Hide the explanation after moving to the next question
    document.getElementById("explanation-container").style.display = "none";

    // Add arrow event listeners only after the question is loaded
    window.addEventListener("mousedown", draw);
}

function startTimer(time) {
    const timerBar = document.getElementById("progressBar");
    timerBar.style.width = "0%";
    let timeRemaining = time;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining -= 0.1;
        timerBar.style.width = `${(1 - timeRemaining / time) * 100}%`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleUnattemptedQuestion(); // Handle the unattempted question when time is up
        }
    }, 100);
}

function handleUnattemptedQuestion() {
    stopOptions(); // Stop the options falling
    removeArrowEventListeners(); // Remove arrow event listeners to prevent unintended arrow releases

    wrongAnswers++; // Increment the wrong answers count
    aw++;
    showCorrectAnswer();

    // End the quiz if the user answers two questions incorrectly
    if (aw >= 2) {
        document.getElementById("nextButton").innerText = "View Results"; // Change the button text to "View Results"
        document.getElementById("nextButton").onclick = endGame; // Change the button action to show end page
    }

    updateScoreboard(); // Update the scoreboard with the new wrong answer count
}

function showCorrectAnswer() {
    const correctOption = document.querySelector('.option[data-correct="true"]');
    correctOption.classList.add("correct");

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        if (option !== correctOption) {
            option.classList.add("incorrect");
        }
    });

    const explanationText = document.getElementById("explanation-text");
    explanationText.textContent = roundQuestions[currentQuestionIndex].explanation || "No explanation available.";
    document.getElementById("explanation-container").style.display = "block";

    document.getElementById("nextButton").classList.add("visible"); // Show the next button
}

function updateScoreboard() {
    // Update the scoreboard with the current score, correct answers, and wrong answers
    document.getElementById("score-value").textContent = score;
    document.getElementById("correct-answers").textContent = correctAnswers;
    document.getElementById("wrong-answers").textContent = wrongAnswers;
}

function showEndPage() {
    // Ensure the end page is shown only when all questions have been attempted.
    localStorage.setItem('totalScore', score);
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);

    const gameContainer = document.getElementById("game-container");

    const resultMessage = aw >= 2 ? "Game Over. You have answered two questions incorrectly." : "You have completed the quiz.";
    const buttonHTML = '<button onclick="restartQuiz()">Restart Quiz</button>';

    gameContainer.innerHTML = `
        <h1>Quiz Completed</h1>
        <p>${resultMessage}</p>
        <p>Your final score: ${score}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
        ${buttonHTML}
    `;
}

function restartQuiz() {
    // Logic to restart the quiz
    window.location.href = '../pages/quiz.html';
}

document.getElementById("nextButton").addEventListener("click", nextQuestion);

window.onload = function() {
    // Load the initial score from Round 2 (Connection Quiz)
    const quiz5Score = localStorage.getItem('quiz4Score') || 0;
    const quiz5CorrectAnswers = localStorage.getItem('quiz4CorrectAnswers') || 0;
    const quiz5WrongAnswers = localStorage.getItem('quiz4WrongAnswers') || 0;

    score += parseInt(quiz5Score);
    correctAnswers += parseInt(quiz5CorrectAnswers);
    wrongAnswers += parseInt(quiz5WrongAnswers);

    updateScoreboard();

    // Load the questions
    fetch("../assets/js/fall.json")
        .then(response => response.json())
        .then(data => {
            questions = data;
            shuffleQuestions();
            loadQuestion();
        })
        .catch(error => {
            console.error("Error loading questions:", error);
        });
};

// Example function to save final scores
function saveFinalScores() {
    // Assuming `score`, `correctAnswers`, and `wrongAnswers` are defined in fall.js
    localStorage.setItem('finalScore', score);
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);
}

// Call this function when the game ends (e.g., after the last question)
function endGame() {
    // Save the scores before redirecting to the end page
    saveFinalScores();

    // Redirect to the end page to show final scores
    window.location.href = '../pages/endPage.html';
}

// Add this for the close explanation button
document.getElementById("close-explanation-button").addEventListener("click", closeExplanation);