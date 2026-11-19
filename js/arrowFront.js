document.getElementById("startButton").addEventListener("click", function() {
    // Redirect to arrow game page when start button is clicked
    window.location.href = "../pages/arrow.html";
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    
}