document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const avatar = document.getElementById("avatar");

    // Start the game when the "Start Game" button is clicked
    startButton.addEventListener("click", () => {
        // You can modify the redirection path based on your game structure
        window.location.href = "../pages/quiz.html"; // Redirect to the first round
    });

    // Add animation to the avatar on page load (optional)
    avatar.style.animation = "avatarSlide 3s ease-in-out infinite";
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}