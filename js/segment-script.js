

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
        if (angle >= 0 && angle < 45) return "LIGHTGREEN";
        else if (angle >= 45 && angle < 90) return "RED";
        else if (angle >= 90 && angle < 135) return "BLUE";
        else if (angle >= 135 && angle < 180) return "DARKGREEN";
        else if (angle >= 180 && angle < 225) return "YELLOW";
        else if (angle >= 225 && angle < 270) return "ORANGE";
        else if (angle >= 270 && angle < 315) return "GOLD";
        else if (angle >= 315 && angle < 360) return "DARKBLUE";
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
    

    document.querySelector(".wheel-wrapper").addEventListener("click", spinWheel);
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    
}