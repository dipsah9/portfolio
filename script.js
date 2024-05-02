// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    function slideOut() {
        var headerText = document.querySelector('.header-text');
        headerText.classList.add('slide');
    }
    
    // Function to slide the element back
    function slideBack() {
        var headerText = document.querySelector('.header-text');
        headerText.classList.remove('slide');
    }
    
    // Example usage:
    // Call slideOut() to slide the element out
    slideOut();
    
    // Call slideBack() to slide the element back
    slideBack();
    console.log('JavaScript file linked successfully!');
});
