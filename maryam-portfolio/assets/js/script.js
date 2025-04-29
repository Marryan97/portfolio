// Function to display pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the pop-up
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// You can use this function for buttons or links to trigger the pop-up
document.querySelectorAll('.project img').forEach(function(img) {
    img.addEventListener('click', function() {
        showPopup();
    });
});

// Close the pop-up when the close button (×) is clicked
document.querySelector('.popup-content .close').addEventListener('click', hidePopup);

// Optional: Close the pop-up if the user clicks outside the pop-up
window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        hidePopup();
    }
};
