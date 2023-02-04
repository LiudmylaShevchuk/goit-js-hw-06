// const inputBorder = document.querySelector('#validation-input');
const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', event => { 
    if (inputText.value.length === Number(inputText.dataset.length)) { 
        inputText.classList.remove("invalid");
        return inputText.classList.add("valid");
    }
    return inputText.classList.add('invalid')
});

// inputText.addEventListener('input', onEnterText);


// inputBorder.addEventListener('focus', onInputFocus);

// inputBorder.addEventListener('blur', onInputBlur); 

// function onEnterText(input) { 
// if (inputText )
// };

// function onInputFocus() {

// };

// function onInputBlur() { 

// };