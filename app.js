const birthDate = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#lucky-number');
const image = document.querySelector('.balloon-img');
const form = document.querySelector('form');
const heading = document.querySelector('h1');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    const dateArray = birthDate.value.split('');
    let sum = 0;

    dateArray.forEach(element => {
        if (Number(element) >= 0) {
            sum += Number(element);
        }
    });


    if ((sum % luckyNumber.value) === 0) {
        image.style.backgroundImage = `url('images/giphy2.gif')`
        heading.innerText = 'yay ! Your Birth Date Is Lucky.';
    } else {
        image.style.backgroundImage = `url('images/giphy.gif')`
        heading.innerText = 'oops... Your Birth Date Is Not Lucky.';
    }
})