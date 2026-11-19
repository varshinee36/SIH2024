document.addEventListener("DOMContentLoaded", function() {
    let hasRedirected = false; // Flag to prevent multiple redirections

    // Function to check if animation is complete
    function isAnimationComplete(element) {
        const styles = window.getComputedStyle(element);
        const animationPlayState = styles.getPropertyValue('animation-play-state');
        const animationIterationCount = styles.getPropertyValue('animation-iteration-count');
        const animationDuration = styles.getPropertyValue('animation-duration');
        
        return animationPlayState === 'paused' || (animationIterationCount !== 'infinite' && animationDuration === '0s');
    }

    // Function to redirect to the next page
    function redirectToNextPage() {
        if (!hasRedirected) {
            hasRedirected = true;  // Set flag to true to prevent further redirects
            window.location.href = "../pages/flow.html"; // Replace with the actual URL of the next page
        }
    }

    // Set interval to check the animation status
    const animationChecker = setInterval(() => {
        const elements = document.querySelectorAll('.cafe, .mozart, .title, .cafe-inner, .mozart-inner');
        let allAnimationsComplete = true;

        elements.forEach(element => {
            if (!isAnimationComplete(element)) {
                allAnimationsComplete = false;
            }
        });

        if (allAnimationsComplete) {
            clearInterval(animationChecker);
            redirectToNextPage();
        }
    }, 100); // Check every 100 milliseconds

    // Optional: add an event listener for clicks (if needed)
    document.body.addEventListener('click', function() {
        if (!hasRedirected) {
            clearInterval(animationChecker);
            redirectToNextPage();
        }
    });
});
