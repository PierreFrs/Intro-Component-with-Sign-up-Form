const submit = document.getElementById('submit');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputField = document.querySelectorAll('input');

// Remove error message
inputField.addEventListener('click', (e) => {
    e.preventDefault();
    resetError();
})

// Submit Event Listener
submit.addEventListener('click', (e) => {
    e.preventDefault();

    // Value Variables
    var firstNameValue = firstName.value.trim();
    var lastNameValue = lastName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    // firstName verification
    if (firstNameValue === '') {
        errorFunc(firstName, 'First Name cannot be empty');
    } else {
        successFunc(firstName);
    }
    // lastName verification
    if (lastNameValue === '') {
        errorFunc(lastName, 'Last Name cannot be empty');
    } else {
        successFunc(lastName);
    }
    // email verification
    if (emailValue === '') {
        errorFunc(email, 'Email cannot be empty');
    } else if (!emailValue.match(pattern)) {
        errorFunc(email, 'Please enter a valid email');
    } else {
        successFunc(email);
    }
    // Password verification
    if (passwordValue === '') {
        errorFunc(password, 'Password cannot be empty');
    } else {
        successFunc(password);
        
    }
})

// Error Function
function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
}
// Success Function
function successFunc(req) {
    req.className += 'success';
}
// Remove Function
function resetError(req) {
    req.className.remove('error');
    req.className.remove('success');
}