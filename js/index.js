const card = document.querySelector('#card');
const btnOpen = document.querySelector('#btn-open');
const form = document.querySelector('#card-form');
const cardNumber = document.querySelector('#card .number');
const cardName = document.querySelector('#card .fullname');
const brandLogo = document.querySelector('#brand-logo');
const signature = document.querySelector('#card .signature p');

/* lật mặt trước */
const showFront = () => {
    if(card.classList.contains('active')){
        card.classList.remove('active')
    }
};

/*Sự kiên thẻ*/
card.addEventListener('click', () => {
    card.classList.toggle('active');
})

/*Nút nhấn*/
btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('active');
    form.classList.toggle('active');
})











