const correctSound = new Audio('../assets/songs/correct-answer.mp3'); // Right answer sound
const wrongSound = new Audio('../assets/songs/wrong-answer.mp3');    // Wrong answer sound
const spinAudio = new Audio('../assets/songs/spinaudio.mp3');  // Result page sound    


const questions = {
    red: [
        {
    "question": "What is Part 4 of the Indian Constitution?",
    "answer": "DPSP"
  },
   {
    "question": "What do Directive Principles of State Policy provide?",
    "answer": "Guidelines"
  },
  {
    "question": "Are Directive Principles enforceable in courts?",
    "answer": "No"
  },
   {
    "question": "What is the purpose of DPSP?",
    "answer": "Justice"
  },
   {
    "question": "How many Directive Principles are there?",
    "answer": "14"
  },
   {
    "question": "Are DPSPs justiciable?",
    "answer": "No"
  },
  {
    "question": "Which part of the Constitution contains DPSP?",
    "answer": "Part 4"
  },
  {
    "question": "Are DPSP part of Fundamental Rights?",
    "answer": "No"
  },
   {
    "question": "Do DPSP guide governance?",
    "answer": "Yes"
  },
   {
    "question": "What does DPSP promote?",
    "answer": "Welfare"
  }
          

    ],
    blue: [
        {
    "question": "Can DPSP override Fundamental Rights?",
    "answer": "No"
  },
  {
    "question": "Are DPSP enforceable by the judiciary?",
    "answer": "No"
  },
   {
    "question": "Are DPSPs considered non-justiciable?",
    "answer": "Yes"
  },
   {
    "question": "Can DPSP affect legislation?",
    "answer": "Yes"
  },
   {
    "question": "Which article contains DPSP?",
    "answer": "Article36"
  },
   {
    "question": "What is the key focus of DPSP?",
    "answer": "Socialism"
  },
   {
    "question": "Are DPSPs fundamental for state policy?",
    "answer": "Yes"
  },
  {
    "question": "What is aimed at promoting scientific temper?",
    "answer": "Temper"
  },
  {
    "question": "What principle focuses on providing legal aid?",
    "answer": "Aid"
  },
   {
    "question": "What is the focus of Article 45?",
    "answer": "Education"
  }
    ],
    darkgreen: [
      {
        "question": "What is the main focus of Directive Principles?",
        "answer": "Welfare"
      },
      {
        "question": "What principle aims to provide free and compulsory education?",
        "answer": "Education"
      },
      {
        "question": "What is aimed at reducing inequalities in income?",
        "answer": "Equality"
      },
      {
        "question": "What principle ensures adequate means of livelihood for all citizens?",
        "answer": "Livelihood"
      },
        
           {
            "question": "What does Article 46 focus on?",
            "answer": "Welfare"
          },
          {
            "question": "What is aimed at securing a humane work environment?",
            "answer": "Environment"
          },
          {
            "question": "What principle focuses on promoting social equality?",
            "answer": "Equality"
          },
           {
            "question": "What does Article 39(b) focus on?",
            "answer": "Ownership"
          },
          
           {
            "question": "What is the role of DPSP in India?",
            "answer": "Guidance"
          },
           {
            "question": "Can the state be held accountable for DPSP?",
            "answer": "No"
          }
    ],
    yellow: [
         
          {
            "question": "What do DPSP aim to achieve?",
            "answer": "Justice"
          },
           {
            "question": "Does DPSP affect social laws?",
            "answer": "Yes"
          },
           {
            "question": "Are DPSP a part of the Constitution's vision?",
            "answer": "Yes"
          },
           {
            "question": "Which article talks about public health?",
            "answer": "Article47"
          },
           {
            "question": "Does DPSP influence policy making?",
            "answer": "Yes"
          },
           {
            "question": "What does Article 44 aim for?",
            "answer": "Uniformity"
          },
           {
            "question": "What does Article 39(c) aim for?",
            "answer": "Distribution"
          },
           {
            "question": "Is DPSP legally enforceable?",
            "answer": "No"
          },
          {
            "question": "What ensures the state promotes the health of its people?",
            "answer": "Health"
          },
          {
            "question": "What principle focuses on promoting justice?",
            "answer": "Justice"
          }
           
    ],
    darkblue: [
        
        
           {
            "question": "What does Article 41 focus on?",
            "answer": "Work"
          },
          {
            "question": "What is aimed at securing a living wage for workers?",
            "answer": "Wage"
          },
          {
            "question": "What ensures the protection of children and youth?",
            "answer": "Protection"
          },
          {
            "question": "What principle focuses on public assistance?",
            "answer": "Assistance"
          },
          {
            "question": "What is aimed at ensuring equal pay for equal work?",
            "answer": "Pay"
          },
           
           {
            "question": "What does Article 43A focus on?",
            "answer": "Workers"
          },
           {
            "question": "What is the goal of DPSP?",
            "answer": "Welfare"
          },
           {
            "question": "What is the role of DPSP in poverty eradication?",
            "answer": "Guidance"
          },
          {
            "question": "What principle ensures the state promotes cultural interests?",
            "answer": "Cultural"
          },
          {
            "question": "What is aimed at promoting health care?",
            "answer": "Healthcare"
          }
    ],
    lightgreen: [
         {
            "question": "What is the main idea behind DPSP?",
            "answer": "Welfare"
          },
          
           {
            "question": "Does DPSP influence economic policies?",
            "answer": "Yes"
          },
          
          {
            "question": "What principle focuses on protecting the environment?",
            "answer": "Environment"
          },
          {
            "question": "What ensures the state provides early childhood care?",
            "answer": "Care"
          },
          {
            "question": "What is aimed at promoting agriculture?",
            "answer": "Agriculture"
          },
          {
            "question": "What principle ensures the state promotes village panchayats?",
            "answer": "Panchayats"
          },
          {
            "question": "What focuses on promoting international peace?",
            "answer": "Peace"
          },
          {
            "question": "What ensures the state secures the right to work?",
            "answer": "Work"
          },
           
           {
            "question": "What is the focus of Article 41?",
            "answer": "Employment"
          },
           {
            "question": "What does Article 43 refer to?",
            "answer": "Living Wage"
          }
    ],
    gold: [
      {
        "question": "What ensures the state promotes cottage industries?",
        "answer": "Industries"
      },
      {
        "question": "What focuses on promoting welfare of minorities?",
        "answer": "Minorities"
      },
      {
        "question": "What principle ensures the separation of judiciary from executive?",
        "answer": "Separation"
      },
      {
        "question": "What is aimed at protecting the weaker sections?",
        "answer": "Protection"
      },
         
   {
    "question": "Does DPSP affect Indian state structure?",
    "answer": "Yes"
  },
   {
    "question": "What is the goal of Article 45?",
    "answer": "Childhood"
  },
   
   {
    "question": "What is the aim of Article 39(a)?",
    "answer": "Livelihood"
  },
   {
    "question": "Which article promotes the protection of the environment?",
    "answer": "Article48A"
  },
   {
    "question": "What is the aim of Article 46?",
    "answer": "Welfare"
  },
   {
    "question": "Does DPSP have a judicial review?",
    "answer": "No"
  },
  
    ],
    orange: [
      {
        "question": "What principle ensures the state promotes public health?",
        "answer": "Health"
      },
      {
        "question": "What is aimed at ensuring fair distribution of resources?",
        "answer": "Resources"
      },
      {
        "question": "What principle focuses on promoting a uniform civil code?",
        "answer": "Uniform"
      },
      {
        "question": "What ensures the state promotes early childhood care?",
        "answer": "Care"
      },
         {
            "question": "What is the role of DPSP in India's development?",
            "answer": "Directive"
          },
           {
            "question": "Which article addresses the economic welfare of workers?",
            "answer": "Article43"
          },
           {
            "question": "What does DPSP serve as for lawmakers?",
            "answer": "Framework"
          },
           
           {
            "question": "Does DPSP include the right to work?",
            "answer": "Yes"
          },
           {
            "question": "What does DPSP aim for?",
            "answer": "Equity"
          },
           
           {
            "question": "What is the key objective of DPSP?",
            "answer": "Welfare"
          },
           

    ]
};



let questionCount = 0; // Track the number of questions asked
const maxQuestions = 10; // Maximum number of questions

let previousAngle = 0;



let score = 0;
let diamonds = 0;
let colorsSpun = new Set();
let bonusSpinActive = false;


window.onload = function () {
  const phrase = document.querySelector('#phrase');

  const timeUp = document.querySelector('#time-up');
  const segmentContainer = document.querySelector('#segment-container');
  const cardsContainer = document.querySelector('#cards-container');
  const wheelWrapper = document.querySelector('.wheel-wrapper');
  const resultBox = document.querySelector('#result-box');
  const scoreDisplay = document.querySelector('#score');
  const diamondDisplay = document.querySelector('#diamonds');

  phrase.style.display = 'block';
  setTimeout(function () {
    phrase.style.opacity = 1;
  }, 500);

  setTimeout(function () {
    phrase.style.display = 'none';
    resultBox.style.display = 'block';
    segmentContainer.style.display = 'block';
    scoreDisplay.classList.remove('hidden');
    cardsContainer.classList.remove('hidden');

    cardsContainer.style.display = 'grid';
    wheelWrapper.style.pointerEvents = 'auto';

    startTimer(timeUp, cardsContainer, wheelWrapper, scoreDisplay, segmentContainer, resultBox);
  }, 2500);
};
document.addEventListener("DOMContentLoaded", function() {
  const segments = ["LIGHTGREEN", "DARKBLUE", "GOLD", "ORANGE", "YELLOW", "DARKGREEN", "BLUE", "RED"];
  const segmentColors = {
      "LIGHTGREEN": "#90EE90",
      "DARKBLUE": "#00008B",
      "GOLD": "#FFD700",
      "ORANGE": "#FFA500",
      "YELLOW": "#FFFF00",
      "DARKGREEN": "#006400",
      "BLUE": "#0000FF",
      "RED": "#FF0000"
  };
const leaderNames = {
  blue: "Mr.Khaitan",
  darkblue:"Dr.Ambedkar",
  lightgreen:"Mr.Muhammed Saadulah",
  darkgreen:"Mr.Krishnaswamy Ayyer",
  yellow:"Mr.Gopalaswami Ayyangar",
  red:"Mr.Munshi",
  orange:"Mr.Madhava Rao",
  gold:"Indian Emblem"
};
const leaderDetails = {
   
      


  "darkblue": [
    "The First Indian to get an economics doctorate degree abroad.",
    "The first law minister of Independent India.",
    "Resigned as law minister when his women rights bill was opposed by Parliament.",
    "Passed the Coal Mines Safety (Stowing) Amendment Bill to help workers and the Mica Mines Labor Welfare Fund.",
    "The Reserve Bank of India (RBI) was based on the ideas he gave to the Hilton Young Commission.",
    "Designed Damodar Valley Project, Hirakud project and Sone River valley project.",
    "The Chairman of the Indian Constitution drafting committee and played an important role in it.",
    "Worked hard to fight social discrimination and help marginalized communities.",
    "Worked on the Hindu Code Bill to give women equal rights, including property and divorce rights.",
    "Helped create the Indian Labour Party and fought for workers' rights, minimum wages, and social security."
  ],
  "darkgreen": [
    "Became a famous lawyer and was the Advocate-General of Madras from 1929 to 1944.",
    "In 1930, he was given the title Dewan Bahadur for his work for the country.",
    "A member of the Constituent Assembly and helped shape the Indian Constitution.",
    "Made important contributions to discussions on citizenship, rights, and emergency rules.",
    "Supported universal voting rights, believing that everyone could help in democratic governance.",
    "Supported a secular state and helped include rules for secularism and religious freedom in India.",
    "After his time in the Constituent Assembly, he returned to his legal work and kept shaping legal ideas.",
    "Stressed the importance of balancing power between the central and state governments.",
    "Dedicated to protecting minority rights and worked on the Indian Constitution.",
    "Wrote many legal articles and papers, helping develop legal literature in India."
  ],
  "yellow": [
    "Served as the Prime Minister of the princely state of Jammu and Kashmir from 1937 to 1943.",
    "A member of the Council of State from 1943 to 1947; led the Committee for Indianising the Army.",
    "Joined the Madras Civil Service in 1905; worked as Deputy Collector, Collector, and District Magistrate.",
    "Elected to the Constituent Assembly in 1946 and helped create the Indian Constitution.",
    "Helped draft Article 370, giving special autonomy to Jammu and Kashmir.",
    "Helped with administrative reforms in India, focusing on good governance and a strong civil service.",
    "Helped Jammu and Kashmir join India and assisted in its integration.",
    "Supported the promotion of scientific research and innovation in India.",
    "Helped expand and modernize Indian Railways as Minister of Railways and Transport.",
    "A key figure in setting up the Planning Commission of India."
  ],
  "red": [
    "Founded Bharatiya Vidya Bhavan to promote Indian culture and education in 1938.",
    "Took part in the Indian independence struggle, including Bardoli Satyagraha and Quit India.",
    "Was the Minister of Agriculture and Food from 1950 to 1952 after independence.",
    "Played an important role in integrating Hyderabad into the Indian Union.",
    "Helped renovate the Somnath Temple, which was destroyed in invasions.",
    "An important member of the Fundamental Rights Committee in the Constituent Assembly.",
    "Focused on politics, culture, and national unity.",
    "A skilled lawyer and played a key role in important legal cases in India.",
    "Worked to preserve Indian languages and literature, highlighting cultural heritage.",
    "Involved in charity work, including starting schools and supporting social causes."
  ],
  "blue": [
    "A member of the Constituent Assembly and helped draft the Indian Constitution.",
    "Known for his legal skill and helped shape India's legal system.",
    "Co-founded Khaitan & Co., one of India's oldest law firms in 1911.",
    "Played a key role in India's industrial growth, including in jute, tea, and electricity.",
    "His knowledge of commercial law helped shape India's business laws.",
    "Guided young lawyers, helping their careers and teaching hard work and honesty.",
    "His work in law education has had a lasting impact.",
    "A lawyer and also wrote a lot about different legal topics.",
    "Supported economic reforms to improve India's industries and businesses."
  ],
  "lightgreen": [
    "Elected to Assam's Legislative Council and held roles in Education and Agriculture.",
    "Became Assam's first Premier, forming a coalition with non-Congress parties.",
    "Started health programs to fight diseases and improve rural healthcare.",
    "His work in the Assembly focused on Assam's financial stability and minority rights.",
    "Worked on rural growth, ending unemployment, land reform, and cottage industries.",
    "As leader of Assam, made changes for fair land distribution and tenant rights.",
    "Stressed the importance of education and helped improve schools in Assam.",
    "In the Constituent Assembly, supported minority rights in the new Constitution.",
    "Focused on Assam's economic growth, promoting agriculture, cottage industries, and trade.",
    "Strongly supported secularism and worked to maintain peace between communities."
  ],
  "orange": [
    "Handled food shortages during World War II and fixed the Sivasamudram Power Station.",
    "Joined the Round Table Conferences and helped draft the Government of India Act, 1935.",
    "Worked to protect Mysore's environment and resources while promoting sustainable growth.",
    "Supported the cooperative movement and encouraged forming societies to improve farming.",
    "A member of the Constituent Assembly and helped shape the Indian Constitution.",
    "Helped rebuild infrastructure and boost the economy after the war.",
    "Started health programs to improve healthcare and fight common diseases in Mysore.",
    "Under his leadership, Mysore saw major improvements in city services and infrastructure.",
    "Supported arts and culture, backing cultural programs and institutions in Mysore.",
    "Started welfare programs to help the poor, focusing on reducing poverty and ensuring social justice."
  ],
  "gold": [
    "The Emblem and Constitution are symbols of India's identity, showing its democracy and diversity.",
    "The Preamble of the Indian Constitution shows values like justice, freedom, equality, and unity, like the Emblem.",
    "The Indian Emblem was adopted on January 26, 1950, the same day India became a Republic.",
    "The Indian Emblem is based on the Lion Capital of Ashoka at Sarnath, representing India’s history.",
    "The four lions stand for power, courage, confidence, and pride, matching the Constitution's values.",
    "The Indian Emblem is the official seal of the Government, showing its authority from the Constitution.",
    "The Emblem, reflecting ancient Indian culture, matches the Constitution’s value of cultural heritage.",
    "The Emblem's use by government institutions represents the authority and structure set by the Constitution.",
    "Adopting the Emblem on Republic Day marks India’s establishment as a Republic, based on the Constitution.",
    "The Emblem's parts, like the Dharma Chakra, represent values like justice, duty, and fairness."
  ]


};


function startTimer(timeUpElement, cardsContainer, wheelWrapper, scoreDisplay, segmentContainer, resultBox) {

  const interval = setInterval(function () {

    if (questionCount >= maxQuestions) {
      // clearInterval(interval);

      const questionsContainer = document.getElementById('questions-container');
      questionsContainer.style.display = 'none';
      const correctAnswerBox = document.getElementById('correct-answer-box');
      correctAnswerBox.style.display = 'none';
      timeUpElement.classList.remove('hidden');
      timeUpElement.style.display = 'block';
      document.body.classList.add('shadowed');
      cardsContainer.style.display = 'none';
      scoreDisplay.classList.add('hidden');
      segmentContainer.style.display = 'none';
      const resultBox = document.querySelector('#result-box');
      resultBox.style.display = 'none';
      const timerQn = document.getElementById('timer-container-vertical');
      timerQn.style.display = 'none';
      const leaderDetailsBox = document.getElementById("leader-details-box");
      leaderDetailsBox.style.display = 'none';
      wheelWrapper.style.pointerEvents = 'none';

      displayFinalScore(score);

    }
  }, 3000);
}

function displayFinalScore(finalScore) {
  const finalScoreBox = document.getElementById('final-score-box');
  const finalScoreText = document.getElementById('final-score-text');
  finalScoreText.innerHTML = `YOUR SCORE : ${finalScore}`;
  finalScoreBox.style.display = 'block';
}
function displayCorrectAnswer(correctAnswer) {
  const correctAnswerBox = document.getElementById('correct-answer-box');
  const correctAnswerText = document.getElementById('correct-answer-text');
  correctAnswerText.innerHTML = `CORRECT ANSWER: ${correctAnswer}`;
  correctAnswerBox.style.display = 'block';
}


let timerInterval; // Define timerInterval globally

function startQuestionTimer(correctAnswer) {
  clearInterval(timerInterval); // Clear any existing timer
  const timerQn = document.getElementById('timer-container-vertical');
  timerQn.style.display = 'block';
  const timerProgress = document.getElementById('timer-progress-vertical');
  const timerText = document.getElementById('timer-text');
  const totalTime = 20; // Total time in seconds
  let timeRemaining = totalTime;

  timerProgress.style.height = '100%'; // Reset progress bar height
  timerText.innerText = timeRemaining; // Reset timer text

  timerInterval = setInterval(() => {
    timeRemaining -= 1;
    const progressHeight = (timeRemaining / totalTime) * 100;
    timerProgress.style.height = `${progressHeight}%`;
    timerText.innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerText.innerText = '0';
      // Handle time up logic here
      showFeedback("Time's up!", "yellow");
      displayCorrectAnswer(correctAnswer);
      disableInputsAndButton(); // Disable inputs and button when time is up

      // Enable wheel spin after time is up
      const wheelWrapper = document.querySelector('.wheel-wrapper');
      wheelWrapper.style.pointerEvents = 'auto';
      questionCount++;

      setTimeout(() => enableSpin(), 2000); // Enable spinning the wheel after feedback
    }
  }, 1000); // Update every second
}

function showLeaderDetails(color) {
  const leaderDetailsBox = document.getElementById("leader-details-box");
  leaderDetailsBox.innerHTML = ""; // Clear previous details

  if (leaderDetails[color]) {
      const detailsList = leaderDetails[color];
      const randomDetail = detailsList[Math.floor(Math.random() * detailsList.length)];

      // Split the detail into lines and append each line as a paragraph
      randomDetail.split('. ').forEach(line => {
          const detailLineElement = document.createElement('p');
          detailLineElement.innerText = line;
          leaderDetailsBox.appendChild(detailLineElement);
      });

      leaderDetailsBox.style.display = 'block'; // Make sure the box is visible
      leaderDetailsBox.classList.remove('hidden');
  } else {
      leaderDetailsBox.style.display = 'none'; // Hide the box if no details are available
  }
}

function getSegmentFromAngle(angle) {
  if (angle >= 0 && angle < 45) return "LIGHTGREEN";
  else if (angle >= 45 && angle < 90) return "RED";
  else if (angle >= 90 && angle < 135) return "BLUE";
  else if (angle >= 135 && angle < 180) return "DARKGREEN";
  else if (angle >= 180 && angle < 225) return "YELLOW";
  else if (angle >= 225 && angle < 270) return "ORANGE";
  else if (angle >= 270 && angle < 315) return "GOLD";
  else if (angle >= 315 && angle < 360) return "DARKBLUE";
}
function showQuestion(color) {

  const questionList = questions[color];
  const randomIndex = Math.floor(Math.random() * questionList.length);
  const selectedQuestion = questionList[randomIndex];

  const questionsContainer = document.getElementById('questions-container');
  questionsContainer.style.display = 'block';
  const existingQuestionBox = document.querySelector('.question-box');
  if (existingQuestionBox) {
    existingQuestionBox.remove();
  }

  const questionElement = document.createElement('div');
  questionElement.classList.add('question-box');
  questionElement.innerHTML = `
        <p id="question-text">${selectedQuestion.question} <i class="fas fa-volume-up voice-icon" onclick="readQuestionAloud('${selectedQuestion.question}')"></i></p>
        <div id="blanks-container"></div> <!-- Blanks will be generated here -->
        <button id="submit-button" onclick="submitAnswer('${selectedQuestion.answer}')">Submit</button>
    `;
  questionsContainer.appendChild(questionElement);

  generateBlanks(selectedQuestion.answer); // Generate the blanks for the answer

  // Enable the submit button for the new question
  const submitButton = document.getElementById('submit-button');
  if (submitButton) {
    submitButton.disabled = false;
  }

  // Disable wheel spin
  const wheelWrapper = document.querySelector('.wheel-wrapper');
  wheelWrapper.style.pointerEvents = 'none';

  startQuestionTimer(selectedQuestion.answer);

}


function generateBlanks(answer) {
  const blanksContainer = document.getElementById("blanks-container");
  const answerWords = answer.split(' ');

  // Clear previous blanks before generating new ones
  blanksContainer.innerHTML = '';

  let firstBlankInput = null;  // Track the first input to focus after question

  // Create blanks for each word in the answer
  answerWords.forEach((word, wordIndex) => {
    const wordContainer = document.createElement('div'); // Each word will be wrapped in a div
    wordContainer.classList.add('word-container');
    for (let i = 0; i < word.length; i++) {
      const blankInput = document.createElement('input');
      blankInput.type = 'text';
      blankInput.maxLength = 1; // Limit input to 1 character
      blankInput.classList.add('blank-input');
      blankInput.dataset.word = word; // Store the word in data attribute for validation
      blankInput.dataset.index = `${wordIndex}-${i}`;

      // Automatically move focus to the next blank when a character is typed
      blankInput.addEventListener('input', function (e) {
        if (e.target.value.length === 1) {
          // Move focus to the next input field
          const nextInput = blanksContainer.querySelector(`input[data-index="${wordIndex}-${i + 1}"]`);
          if (nextInput) {
            nextInput.focus();
          } else {
            // If no next input, try moving to the next word container
            const nextWordContainer = wordContainer.nextSibling;
            if (nextWordContainer) {
              const firstInputInNextWord = nextWordContainer.querySelector('input');
              if (firstInputInNextWord) {
                firstInputInNextWord.focus();
              }
            }
          }
        }
      });

      // Allow navigation with arrow keys (left and right)
      blankInput.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
          const nextInput = blanksContainer.querySelector(`input[data-index="${wordIndex}-${i + 1}"]`);
          if (nextInput) {
            nextInput.focus();
          } else {
            const nextWordContainer = wordContainer.nextSibling;
            if (nextWordContainer) {
              const firstInputInNextWord = nextWordContainer.querySelector('input');
              if (firstInputInNextWord) {
                firstInputInNextWord.focus();
              }
            }
          }
        } else if (e.key === 'ArrowLeft') {
          const prevInput = blanksContainer.querySelector(`input[data-index="${wordIndex}-${i - 1}"]`);
          if (prevInput) {
            prevInput.focus();
          } else {
            const prevWordContainer = wordContainer.previousSibling;
            if (prevWordContainer) {
              const lastInputInPrevWord = prevWordContainer.querySelectorAll('input')[prevWordContainer.querySelectorAll('input').length - 1];
              if (lastInputInPrevWord) {
                lastInputInPrevWord.focus();
              }
            }
          }
        } else if (e.key === 'Backspace') {
          // Delete the previous blank when backspace is pressed
          if (blankInput.value === '') {
            const prevInput = blanksContainer.querySelector(`input[data-index="${wordIndex}-${i - 1}"]`);
            if (prevInput) {
              prevInput.value = ''; // Clear the previous input
              prevInput.focus(); // Move focus to the previous input
            } else {
              const prevWordContainer = wordContainer.previousSibling;
              if (prevWordContainer) {
                const lastInputInPrevWord = prevWordContainer.querySelectorAll('input')[prevWordContainer.querySelectorAll('input').length - 1];
                if (lastInputInPrevWord) {
                  lastInputInPrevWord.value = ''; // Clear the last input in previous word
                  lastInputInPrevWord.focus(); // Move focus to the last input in previous word
                }
              }
            }
          }
        } else if (e.key === 'Enter') {
          // Trigger submission when Enter key is pressed
          submitAnswer(answer);
        }
      });

      wordContainer.appendChild(blankInput); // Add each blank to the word container

      // Set the first blank to focus later
      if (i === 0 && !firstBlankInput) {
        firstBlankInput = blankInput;
      }
    }
    blanksContainer.appendChild(wordContainer); // Add word container to the blanks container
  });

  // Ensure focus is set on the first blank input after it's rendered
  setTimeout(() => {
    if (firstBlankInput) {
      firstBlankInput.focus();
    }
  }, 10);  // Delay slightly to make sure elements are rendered
}

function submitAnswer(correctAnswer) {
  questionCount++;
  const blanks = document.querySelectorAll(".blank-input");
  let userAnswer = "";
  blanks.forEach(blank => {
    userAnswer += blank.value.toUpperCase();
  });

  if (userAnswer === "") {
    showFeedback("Please fill in the blanks.", "yellow");
    return;
  }

  clearInterval(timerInterval); // Stop the timer

  const correctAnswerImage = document.getElementById('correct-answer-image');
  const wrongAnswerImage = document.getElementById('wrong-answer-image');

  if (userAnswer === correctAnswer.toUpperCase()) {
    score += 5;
    correctSound.play();
    if (bonusSpinActive) {
      diamonds += 1;
      showFeedback("Correct answer! You earned a diamond.", "green");
    } else {
      showFeedback("Correct answer!", "green");
    }
    generateConfetti();
    showPointsAnimation("+5", "green");

    correctAnswerImage.style.display = 'block';
    setTimeout(function () {
      correctAnswerImage.style.display = 'none';
    }, 2000); // 2000ms = 2 seconds


  } else {
    score -= 1;
    wrongSound.play();
    showFeedback("Wrong answer.", "red");
    showPointsAnimation("-1", "red");
    displayCorrectAnswer(correctAnswer);
    disableInputsAndButton(); // Disable inputs and button for wrong answer


    wrongAnswerImage.style.display = 'block';
    setTimeout(function () {
      wrongAnswerImage.style.display = 'none';
    }, 2000); // 2000ms = 2 seconds

  }

  updateScore();

  // Disable the submit button and input fields to prevent resubmission
  disableInputsAndButton();

  // Check if the game should end after this answer


  // Update the result box to "SPIN THE WHEEL"
  const resultBox = document.getElementById("result-box");
  if (resultBox) {
    const resultText = document.getElementById("result-text");
    resultText.innerText = "SPIN THE WHEEL";
    resultBox.style.display = "block";
  }

  // Re-enable wheel spin after submission
  const wheelWrapper = document.querySelector('.wheel-wrapper');
  wheelWrapper.style.pointerEvents = 'auto';

  setTimeout(() => enableSpin(), 2000); // Enable spinning the wheel after feedback
}



function disableInputsAndButton() {

  // Disable the submit button and input fields to prevent resubmission
  const submitButton = document.getElementById('submit-button');
  if (submitButton) {
    submitButton.disabled = true;
  }

  const blanks = document.querySelectorAll(".blank-input");
  blanks.forEach(blank => {
    blank.disabled = true;
  });
}

function readQuestionAloud(question) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(question);
    window.speechSynthesis.speak(utterance);
  } else {
    console.log('Text-to-speech not supported.');
  }
}

function generateConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confettiPiece);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 1500); // Remove confetti after 2 seconds
}

function calculateFinalAngle(currentSpinAngle) {
  let finalAngle = previousAngle + currentSpinAngle;
  while (finalAngle >= 360) {
      finalAngle -= 360;
  }
  return finalAngle;
}

function showLeaderName(color){
  const name = document.getElementById('leader-name-box');
  name.style.display='block';
  
    const nameText = document.getElementById("name-text");
    nameText.innerText = leaderNames[color.toLowerCase()];
    nameText.style.display = "block"; // Show the result box
  
}

function spinWheel() {
  spinAudio.play();
  const correctAnswerImage = document.getElementById('correct-answer-image');
  const wrongAnswerImage = document.getElementById('wrong-answer-image');
  correctAnswerImage.style.display = 'none';
  wrongAnswerImage.style.display = 'none';

  // Check if a question is displayed and not yet submitted
  const submitButton = document.getElementById('submit-button');

  if (submitButton && !submitButton.disabled) {
    showFeedback("SUBMIT THE ANSWER", "yellow");
    return; // Do not spin the wheel
  }

 
  const wheel = document.getElementById("eight-segment-wheel");
  const fullRotations = Math.floor(Math.random() * 8) + 3; // Random full rotations (3 to 10)
  const segmentAngle = 45; // Each segment is 45 degrees
  const randomSegment = Math.floor(Math.random() * 8); // Random segment
  const currentSpinAngle = fullRotations * 360 + randomSegment * segmentAngle; // Total angle

  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = "rotate(" + (previousAngle + currentSpinAngle) + "deg)";

  setTimeout(function () {
    const correctAnswerBox = document.getElementById('correct-answer-box');
    correctAnswerBox.style.display = 'none';
    const finalAngle = calculateFinalAngle(randomSegment * segmentAngle);
    previousAngle = finalAngle; // Store the final angle for next spin calculation
    const selectedSegment = getSegmentFromAngle(finalAngle);

    const resultBox = document.getElementById("result-box");
    const resultText = document.getElementById("result-text");
    resultText.innerText = "The wheel stopped at the color: " + selectedSegment; // Update the result text
    resultBox.style.display = "block"; // Show the result box

    if (!bonusSpinActive) {
      colorsSpun.add(selectedSegment.toLowerCase());
      if (colorsSpun.size === segments.length) {
        bonusSpinActive = true;
        showFeedback("Congratulations! You've unlocked the bonus spin!", "green");
      }
    }

    // Pop up the respective colored card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = 'none'; // Hide all cards initially
      card.classList.remove('show-card'); // Remove any previous show-card class
      card.classList.remove('flip-card'); // Remove any previous flip-card class
    });

    const selectedCard = document.querySelector(`.card[data-color='${selectedSegment.toLowerCase()}']`);
    if (selectedCard) {
      selectedCard.style.display = 'block'; // Show the selected card
      selectedCard.classList.add('show-card'); // Add the class to ensure it pops up

      // Display leader details above the selected card
      const leaderDetails = document.createElement('div');
      //leaderDetails.classList.add('leader-name-box'); // Add a class for styling
      //leaderDetails.innerText = leaderNames[selectedSegment.toLowerCase()]; // Set leader name based on the selected segment
      selectedCard.insertBefore(leaderDetails, selectedCard.firstChild); // Add leader details above the card

      setTimeout(function () {
        selectedCard.classList.add('flip-card'); // Add the class to flip the card and show the question
        showLeaderName(selectedSegment.toLowerCase());
        showQuestion(selectedSegment.toLowerCase());
        showLeaderDetails(selectedSegment.toLowerCase()); // Show leader details if needed elsewhere
      }, 1000); // Wait for 1 second before flipping the card
    }

    // Normalize the wheel's angle for the next spin without reverse effect
    wheel.style.transition = 'none'; // Temporarily disable transition
    wheel.style.transform = 'rotate(' + finalAngle + 'deg)'; // Set wheel to the normalized angle
    setTimeout(function () {
      wheel.style.transition = 'transform 4s ease-out'; // Re-enable transition
    }, 50); // Re-enable after a slight delay to avoid transition flash
  spinAudio.pause();
  }, 4000); // Wait for the spin to finish (4 seconds)
}
function showPointsAnimation(points, color) {
  const pointsElement = document.createElement('div');
  pointsElement.classList.add('points-animation');
  pointsElement.innerText = points;
  pointsElement.style.color = color; // Set the color based on the points
  document.body.appendChild(pointsElement);

  setTimeout(() => {
    pointsElement.remove();
  }, 2000); // Remove the points animation after 2 seconds
}

function showFeedback(message, color) {
  const feedbackBox = document.createElement('div');
  feedbackBox.classList.add('feedback-box');
  feedbackBox.style.backgroundColor = color;
  feedbackBox.textContent = message;
  document.body.appendChild(feedbackBox);
  setTimeout(() => feedbackBox.remove(), 1500); // Remove the feedback box after 2 seconds
}

function updateScore() {
  const scoreDisplay = document.querySelector('#score');
  scoreDisplay.textContent = `Score: ${score}`;
  //const diamondDisplay = document.querySelector('#diamonds');
  //diamondDisplay.textContent = `Diamonds: ${diamonds}`;
}

function enableSpin() {
  const wheelWrapper = document.querySelector('.wheel-wrapper');
  wheelWrapper.style.pointerEvents = 'auto'; // Enable the wheel for spinning
}

document.querySelector(".wheel-wrapper").addEventListener("click", spinWheel);




  // Set initial text of the result box
  document.getElementById('result-text').innerText = "SPIN THE WHEEL";


  document.querySelector(".wheel-wrapper").addEventListener("click", spinWheel);
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  
}