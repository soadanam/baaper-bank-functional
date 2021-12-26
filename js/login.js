//login verification

document.getElementById('submit-btn').addEventListener('click', function(){
    const emailId = document.getElementById('email-input');
    const emailValue = emailId.value;

    const passwordId = document.getElementById('password-input');
    const passwordValue = passwordId.value;

    if( emailValue == "asholbaap@gmail.com" &&  passwordValue == "secret"){
        emailId.value = '';
        passwordId.value = '';
        window.location.href = "banking.html"
    };
})