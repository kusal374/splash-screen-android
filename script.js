// Initialize splash screen
document.addEventListener('DOMContentLoaded', function () {
    // Select the splash screen and logo elements
    const splashScreen = document.querySelector('.splash-container');
    const logoImage = document.querySelector('.logo-image');

    if (splashScreen && logoImage) {
        // Ensure the logo image is fully loaded before starting the timer
        logoImage.addEventListener('load', () => {
            // Hide splash screen after 4 seconds
            setTimeout(() => {
                splashScreen.classList.add('fade-out');
                setTimeout(() => {
                    splashScreen.remove();
                }, 500); // Allow time for fade-out animation
            }, 4000); // Display duration: 4 seconds
        });

        // Handle image load error
        logoImage.addEventListener('error', () => {
            console.error('Failed to load splash screen logo.');
            // Fallback: Proceed to hide the splash screen without waiting for the image
            setTimeout(() => {
                splashScreen.classList.add('fade-out');
                setTimeout(() => {
                    splashScreen.remove();
                }, 500);
            }, 4000);
        });
    } else {
        console.error('Splash screen or logo image not found.');
    }
});
