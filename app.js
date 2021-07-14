const mainnEl = document.getElementById('mainn');

const buttonEl = document.getElementById('change-button');

buttonEl.addEventListener('click', () => {
    const inputEl = document.getElementById('word-input');

    console.log(inputEl.value);

    mainnEl.textContent = inputEl.value;
    mainnEl.style.color = 'black';
    mainnEl.style.fontFamily = 'cursive';
});

