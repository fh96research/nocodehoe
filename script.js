// Get elements
const button = document.getElementById('btn');
const title = document.getElementById('title');

// Add click handler
button.addEventListener('click', () => {
    // Change text
    title.textContent = 'JS is Running baby!';
    
    // Apply CSS class
    title.classList.add('js-active');
});
