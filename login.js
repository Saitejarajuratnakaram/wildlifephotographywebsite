document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);

function validateEmail() {
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    const small = email.nextElementSibling;

    if (emailValue === '') {
        showError(email, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        showError(email, 'Not a valid email');
    } else {
        showSuccess(email);
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const passwordValue = password.value.trim();
    const small = password.nextElementSibling;

    if (passwordValue === '') {
        showError(password, 'Password cannot be blank');
    } else if (passwordValue.length < 6) {
        showError(password, 'Password must be at least 6 characters');
    } else {
        showSuccess(password);
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\.,;:\s@"]+\.)+[^<>()\[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function showError(input, message) {
    const small = input.nextElementSibling;
    input.classList.add('error');
    small.innerText = message;
    small.style.display = 'block';
}

function showSuccess(input) {
    const small = input.nextElementSibling;
    input.classList.remove('error');
    small.style.display = 'none';
}

function validateForm() {
    validateEmail();
    validatePassword();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!email.classList.contains('error') && !password.classList.contains('error')) {
        // Show success message on valid form submission
        document.getElementById('success-message').style.display = 'block';
        return false; // Prevent form submission for demo purposes
    } else {
        return false; // Prevent form submission if there are errors
    }
}
