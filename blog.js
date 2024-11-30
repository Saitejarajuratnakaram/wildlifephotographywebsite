
let selectedRating = 0;

function selectRating(star) {
    selectedRating = star.getAttribute('data-value');
    const stars = document.querySelectorAll('.star');
    stars.forEach(s => {
        s.classList.remove('selected');
        if (s.getAttribute('data-value') <= selectedRating) {
            s.classList.add('selected');
        }
    });
}

function isAlphabetic(event) {
    const char = String.fromCharCode(event.which);
    // Allow only letters and spaces
    if (!/^[A-Za-z\s]*$/.test(char)) {
        event.preventDefault(); // Prevent the keypress
        return false;
    }
    return true;
}

function validateInput(name, comment) {
    const nameRegex = /^[A-Za-z\s]+$/; // Only allows letters and spaces
    const commentRegex = /^[A-Za-z\s]+$/; // Only allows letters and spaces in comment

    if (!nameRegex.test(name)) {
        return 'Name should only contain letters and spaces.';
    }
    if (!commentRegex.test(comment)) {
        return 'Comment should only contain letters and spaces.';
    }
    return '';
}

function submitComment(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    
    // Validate input
    const errorMessage = validateInput(name, comment);
    if (errorMessage) {
        document.getElementById('error-message').innerText = errorMessage;
        return; // Stop submission if there's an error
    } else {
        document.getElementById('error-message').innerText = ''; // Clear error message
    }
    
    const ratingText = selectedRating > 0 ? '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating) : 'No rating';
    
    const commentHTML = `
    <div class="comment">
        <div class="comment-header">
            <div class="comment-details">
                <h3>${name}</h3>
                <span>${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}</span>
                <span class="rating">${ratingText}</span>
            </div>
        </div>
        <div class="comment-body">
            <p>${comment}</p>
        </div>
        <div class="replies"></div>
    </div>`;
    
    document.getElementById('comments-list').insertAdjacentHTML('beforeend', commentHTML);
    
    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    selectedRating = 0; // Reset selected rating
    document.querySelectorAll('.star').forEach(s => s.classList.remove('selected')); // Remove selected stars
}
