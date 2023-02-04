const email = document.querySelector('.login-form email');

const password = document.querySelector('.login-form password');


email.addEventListener('submit');
password.addEventListener('submit');

function onEnterEmail(event) { 
event.preventDefault();
};

function onEnterPassword(event) { 
    event.preventDefault();
};

function reset() { 
    email = value;
    password = value;
    logList.innerHTML = "";
};