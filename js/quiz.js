const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const startBtn = document.querySelector(".start"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen"),
  nextBtn = document.querySelector(".next"),
  endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score"),
  explanationDiv = document.querySelector(".explanation"),
  explanationText = document.querySelector("#explanation-text"),
  closeButton = document.querySelector(".close-explanation");


  document.addEventListener("DOMContentLoaded", () => {
    const instructionContainer = document.getElementById("instruction-container");
    const closeInstructions = document.getElementById("close-instructions");

    // Close instructions and avatar
    closeInstructions.addEventListener("click", () => {
        instructionContainer.style.display = "none";
        const cartoonImage = document.getElementById("cartoonImage");
        cartoonImage.style.animation = "slide-back 2s forwards";
    });

    // Ensure avatar slides in when the instructions are displayed
    const cartoonImage = document.getElementById("cartoonImage");
    cartoonImage.style.animation = "slide-in 2s forwards";
});

// Start the quiz
document.querySelector(".start").addEventListener("click", () => {
    // Ensure instructions are hidden before starting
    const instructionContainer = document.getElementById("instruction-container");
    instructionContainer.style.display = "none";
    const startScreen = document.querySelector(".start-screen");
    startScreen.classList.remove("hide");
});

document.addEventListener("DOMContentLoaded", () => {
  // Ensure that the result container and avatar are available
  const resultContainer = document.getElementById("result-container");
  const resultAvatar = document.getElementById("resultAvatar");

  // Trigger the avatar slide-in animation when the result page is loaded
  if (resultAvatar) {
      resultAvatar.style.animation = "slide-in 2s forwards"; // Animation for result avatar
  }

  // Check if the result container is present and then display it
  if (resultContainer) {
      resultContainer.classList.remove("hide"); // Show the result container
  }
});

let questions = [],
  time = 30, // Fixed time per question
  score = 0,
  currentQuestion = 0,
  timer,
  correctAnswers = 0,
  wrongAnswers = 0;

// Fetch questions from JSON
const fetchQuestions = async () => {
  try {
    const response = await fetch('../assets/js/questions.json'); // Ensure the file path is correct
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // Log HTTP errors
    }
    const data = await response.json();
    questions = getRandomQuestions(data.questions, 6); // Get 6 random questions
    startQuiz();
  } catch (error) {
    console.error("Error loading questions:", error); // Debug fetch errors
  }
};

// Start quiz
const startQuiz = () => {
  currentQuestion = 0;
  score = 0;

  if (questions.length === 0) {
    console.error("No questions available!");
    return; // Exit early if questions are empty
  }

  startScreen.classList.add("hide");
  quiz.classList.remove("hide");

  showQuestion(questions[currentQuestion]);
};

startBtn.addEventListener("click", fetchQuestions);

// Show question
const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper"),
    questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [...question.options];
  answersWrapper.innerHTML = "";
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((answer) => {
    const answerDiv = document.createElement("div");
    answerDiv.className = "answer";
    answerDiv.innerHTML = `<span class="text">${answer}</span>`;
    answerDiv.addEventListener("click", () => handleAnswerClick(answerDiv, answer));
    answersWrapper.appendChild(answerDiv);
  });

  questionNumber.innerHTML = `Question <span class="current">${currentQuestion + 1}</span> / <span class="total">${questions.length}</span>`;

  startTimer(time); // Start the timer for each question
};

// Handle answer click
const handleAnswerClick = (selectedAnswerDiv = null, selectedAnswer = null) => {
  clearInterval(timer); // Stop the timer when an answer is clicked or time runs out

  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.classList.add("checked");
    answer.style.pointerEvents = "none"; // Disable further clicks
  });

  const correctSound = document.getElementById("correct-sound");
  const wrongSound = document.getElementById("wrong-sound");

  if (selectedAnswer === questions[currentQuestion].correct_answer) {
    correctAnswers++;
    score += 10;
    if (selectedAnswerDiv) selectedAnswerDiv.classList.add("correct");
    correctSound.play(); // Play correct answer sound
    showConfetti();
  } else {
    wrongAnswers++;
    answersDiv.forEach((answer) => {
      if (answer.querySelector(".text").innerHTML === questions[currentQuestion].correct_answer) {
        answer.classList.add("correct"); // Highlight the correct answer in green
      }
    });
    if (selectedAnswerDiv) selectedAnswerDiv.classList.add("wrong"); // Mark the selected wrong answer in red
    wrongSound.play(); // Play wrong answer sound
  }

  explanationText.innerHTML = questions[currentQuestion].explanation || "No explanation available.";
  explanationDiv.style.display = "block"; // Ensure the explanation is visible

  nextBtn.style.display = "block"; // Show the "Next" button after answering
  updateScoreboard();
};

// Close explanation
closeButton.addEventListener("click", () => {
  explanationDiv.style.display = "none"; // Hide explanation when the close button is clicked
});

// Get random questions
const getRandomQuestions = (questions, numQuestions) => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};

// Timer function
const startTimer = (time) => {
  timer = setInterval(() => {
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      clearInterval(timer);
      handleAnswerClick(); // Automatically check the answer when time runs out
    }
  }, 1000);
};

const progress = (value) => {
  const percentage = (value / 30) * 100; // Timer adjuster
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

// Next question
const nextQuestion = () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(questions[currentQuestion]);
    nextBtn.style.display = "none"; // Hide "Next" button until an answer is selected
    explanationDiv.style.display = "none"; // Hide explanation for the next question
  } else {
    showScore();
  }
};

// Show score and handle buttons visibility based on the number of wrong answers
const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = `Your final score is ${score}`;
  totalScore.innerHTML = `Total Questions: ${questions.length}`;
  showConfetti();
  const applauseSound = document.getElementById("applause-sound");
  applauseSound.play();
  
  if (wrongAnswers >= 6) {
    const message = `You can't reach round 2. Try again!<br>Wrong answers: ${wrongAnswers}`;
    document.querySelector(".score-text").innerHTML = message;
    document.querySelector(".NextRound").style.display = "none";
    document.querySelector(".Restart").style.display = "block";
  } else {
    const message = `Congratulations! You can proceed to round 2.<br>Correct answers: ${correctAnswers}`;
    document.querySelector(".score-text").innerHTML = message;
    document.querySelector(".NextRound").style.display = "block";
    document.querySelector(".Restart").style.display = "none";
  }
  // Store the score in local storage
  localStorage.setItem('quiz1Score', score);
  localStorage.setItem('quiz1CorrectAnswers', correctAnswers);
  localStorage.setItem('quiz1WrongAnswers', wrongAnswers);
};

// Update the scoreboard
const updateScoreboard = () => {
  const correctAnswersSpan = document.querySelector(".scoreboard .correct-answers span");
  const wrongAnswersSpan = document.querySelector(".scoreboard .wrong-answers span");
  const realTimeScoreSpan = document.querySelector(".scoreboard .current-score span");

  correctAnswersSpan.innerText = correctAnswers;
  wrongAnswersSpan.innerText = wrongAnswers;
  realTimeScoreSpan.innerText = score;
};

// Next Round button
document.querySelector(".NextRound").addEventListener("click", () => {
  window.location.href = '../pages/Connection.html'; // Redirect to Connection.html
});

// Restart button
document.querySelector(".Restart").addEventListener("click", () => {
  // Reset variables
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  currentQuestion = 0;
  
  // Reset the progress bar and scoreboard
  progressBar.style.width = "0%";
  progressText.innerHTML = time;

  // Hide the end screen and explanation, show start screen and quiz
  endScreen.classList.add("hide");
  startScreen.classList.remove("hide");
  quiz.classList.add("hide");

  // Reset the scoreboard
  updateScoreboard();

  // Hide the confetti effect
  const confettiEffect = document.getElementById("confetti-effect");
  confettiEffect.classList.remove("show");
  confettiEffect.classList.add("hidden");
});

// Show confetti
const showConfetti = () => {
  const confettiEffect = document.getElementById("confetti-effect");
  confettiEffect.classList.remove("hidden");
  confettiEffect.classList.add("show");

  setTimeout(() => {
    confettiEffect.classList.remove("show");
    confettiEffect.classList.add("hidden");
  }, 5000); // Hide after 5 seconds
};

nextBtn.addEventListener("click", nextQuestion);

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}