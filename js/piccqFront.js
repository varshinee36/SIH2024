document.addEventListener("DOMContentLoaded", () => {
    const startQuizButton = document.getElementById("startQuizButton");
    const instructionContainer = document.getElementById("instruction-container");

    // Start the quiz when the "Start Quiz" button is clicked
    startQuizButton.addEventListener("click", () => {
        // Hide the instruction container
        instructionContainer.style.display = "none";

        // Now, you can navigate to the quiz page or initiate the game logic
        window.location.href = "../pages/piccq.html"; // Change to the actual game page
    });
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    
}