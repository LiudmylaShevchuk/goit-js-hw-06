const btnDecrement = document.querySelector(
    '#counter [data-action="decrement"]'
);
const btnIncrement = document.querySelector(
    '#counter [data-action="increment"]'
);
const counter = document.querySelector('#value');
let counterValue = 0;

btnDecrement.addEventListener('click', btnDecrementClickHandler);
btnIncrement.addEventListener('click', btnIncrementClickHandler);

function btnDecrementClickHandler() {
    if (counterValue -= 1) {
        counter.textContent = counterValue;
    };
};

function btnIncrementClickHandler() {
    if (counterValue += 1) {
        counter.textContent = counterValue;
    };
};
