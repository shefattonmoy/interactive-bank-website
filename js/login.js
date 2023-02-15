// Step 01: Add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // Step 02: Get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // Step 03: Get Password
    const passwordField = document.getElementById('user-password');
    const password = passWordField.value;

    // Step 04: Verify email and password

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})