 // Add real-time validation listeners
 document.getElementById('l-email').addEventListener('input', validateEmail);
 document.getElementById('l-password').addEventListener('input', validatePassword);
 document.getElementById('l-username').addEventListener('input', validateUsername);

 function validateUsername() {
     const username = document.getElementById('l-username');
     const usernameValue = username.value.trim();
     const small = username.nextElementSibling;

     // Regex to check if the username contains only letters
     const nameRegex = /^[A-Za-z]+$/;

     if (usernameValue === '') {
         showError(username, 'Username cannot be blank');
     } else if (!nameRegex.test(usernameValue)) {
         showError(username, 'Username must contain only letters (no numbers)');
     } else {
         showSuccess(username);
     }
 }

 function validateEmail() {
     const email = document.getElementById('l-email');
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
     const password = document.getElementById('l-password');
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
     input.classList.add('l-error');
     small.innerText = message;
     small.style.display = 'block';
 }

 function showSuccess(input) {
     const small = input.nextElementSibling;
     input.classList.remove('l-error');
     small.style.display = 'none';
 }

 function validateForm() {
     validateEmail();
     validatePassword();
     validateUsername();

     const email = document.getElementById('l-email');
     const password = document.getElementById('l-password');
     const username = document.getElementById('l-username');

     if (!email.classList.contains('l-error') && !password.classList.contains('l-error') && !username.classList.contains('l-error')) {
         // Show success message on valid form submission
         document.getElementById('l-success-message').style.display = 'block';
         return false; // Prevent form submission for demo purposes
     } else {
         return false; // Prevent form submission if there are errors
     }
 }