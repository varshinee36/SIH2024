document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the final score, correct, and wrong answers from localStorage
    const finalScore = localStorage.getItem('finalScore') || 0;
    const correctAnswers = localStorage.getItem('correctAnswers') || 0;
    const wrongAnswers = localStorage.getItem('wrongAnswers') || 0;

    // Display the final scores on the page
    document.getElementById("final-score").textContent = finalScore;
    document.getElementById("correct-answers").textContent = correctAnswers;
    document.getElementById("wrong-answers").textContent = wrongAnswers;
    

    // Handle restart button
    document.getElementById("restart-button").addEventListener("click", () => {
        window.location.href = '../pages/leader.html'; // Restart the game or go to the first round
    });

    // Handle next level button (if applicable)
    document.getElementById("next-level-button").addEventListener("click", () => {
        window.location.href = '../pages/nextLevel.html'; // Redirect to the next level if needed
    });

    localStorage.setItem("quizScore",finalScore);

    // Show the popup message
    setTimeout(() => {
        document.getElementById("endPage-popup").style.display = 'block';
    }, 1000); // Popup will show after 1 second
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    
}