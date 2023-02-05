const btnDecrement = document.querySelector('#counter [data-action="decrement"]');
const btnIncrement = document.querySelector('#counter [data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;

const clickDecrement = () => (
    (counterValue -= 1),
    (counter.textContent = counterValue)
);


const clickIncrement = () => (
    (counterValue += 1),
    (counter.textContent = counterValue)
);

btnDecrement.addEventListener('click', clickDecrement);
btnIncrement.addEventListener('click', clickIncrement);


