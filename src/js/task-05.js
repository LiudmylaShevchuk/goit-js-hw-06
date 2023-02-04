const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', onEnterName);


function onEnterName(input) {
    if (nameInput.value === "") {
        return (nameOutput.textContent = "Anonymous"); 
    };
    nameOutput.textContent = input.currentTarget.value;
    
    };



