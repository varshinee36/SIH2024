const spinAudio = new Audio('../assets/songs/spinaudio.mp3');  //Spin sound

document.addEventListener("DOMContentLoaded", function() {
    // Show the instructions popup when the page loads
    var instructionsPopup = document.getElementById("instructions-popup");
    instructionsPopup.style.display = "block";

    // Zoom out the instructions popup to normal size and move it to the left
    setTimeout(function() {
        instructionsPopup.classList.add("move-to-normal");
    }, 0); // Immediately

    // Show the constitution image with animation
    setTimeout(function() {
        var constitutionImage = document.getElementById("constitution-image");
        constitutionImage.classList.add("show");

        var animationSound = document.getElementById("animation-sound");
    }, 500); // Delay to start the animation

    document.getElementById("spin-button").addEventListener("click", spin);
});

function spin() {
    var wheel = document.getElementById("wheel-image");
    var rotation = Math.floor(Math.random() * 3600); // Random spin up to 10 full rotations
    wheel.style.transform = "rotate(" + rotation + "deg)";
    spinAudio.play();

    // Determine the selected segment after the spin
    setTimeout(function() {
        var selectedAngle = rotation % 360;
        var selectedSegment = determineSegment(selectedAngle);
        document.getElementById("result").innerText = "Selected Segment: " + selectedSegment;
        document.getElementById("result").classList.remove("hidden");

        // Redirect to the appropriate segment page
        var pageMap = {
            "PREAMBLE": "preamble.html",
            "PART IV": "part-iv.html",
            "PART III": "part-iii.html",
            "PART IVA": "part-iva.html"
        };
        
        setTimeout(function() {
            // Assuming pageMap is defined and selectedSegment is a valid key in pageMap
            window.location.href = `../pages/${pageMap[selectedSegment]}`;
        }, 2000); // Wait for 2 seconds before redirecting
    }, 4000); // Wait for the spin to finish (4 seconds)
}

function determineSegment(angle) {
    var segments = ["PREAMBLE", "PART IVA", "PART III", "PART IV"];
    var segmentAngle = 360 / segments.length;
    var index = Math.floor(angle / segmentAngle);
    return segments[index];
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".start-game-button").addEventListener("click", function() {
        window.location.href = "../pages/homespin2.html";
    });
});
let previousAngle = 0;

    // Set initial text of the result box
    document.getElementById('result-text').innerText = "SPIN THE WHEEL";

    function calculateFinalAngle(currentSpinAngle) {
        let finalAngle = previousAngle + currentSpinAngle;
        while (finalAngle >= 360) {
            finalAngle -= 360;
        }
        return finalAngle;
    }

    function getSegmentFromAngle(angle) {
        if (angle >= 0 && angle < 90) return "PART IV";
        else if (angle >= 90 && angle < 180) return "PART III";
        else if (angle >= 180 && angle < 270) return "PART IVA";
        else if (angle >= 270 && angle <360) return "PREAMBLE";

    }
    
    function spinWheel() {
        // Check if a question is displayed and not yet submitted
        const submitButton = document.getElementById('submit-button');
        const correctAnswerBox = document.getElementById('correct-answer-box');
        correctAnswerBox.style.display = 'none';
        if (submitButton && !submitButton.disabled) {
            showFeedback("SUBMIT THE ANSWER", "yellow");
            return; // Do not spin the wheel
        }
    
        const wheel = document.getElementById("eight-segment-wheel");
        const fullRotations = Math.floor(Math.random() * 4) + 3; // Random full rotations (3 to 10)
        const segmentAngle = 90; // Each segment is 45 degrees
        const randomSegment = Math.floor(Math.random() * 4); // Random segment
        const currentSpinAngle = fullRotations * 360 + randomSegment * segmentAngle; // Total angle
    
        wheel.style.transition = "transform 4s ease-out";
        wheel.style.transform = "rotate(" + (previousAngle + currentSpinAngle) + "deg)";
    }

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');   
    }
