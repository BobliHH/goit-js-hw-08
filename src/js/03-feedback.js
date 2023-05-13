import throttle from 'lodash/throttle';

const key = 'feedback-form-state';

const feedbackForm = document.querySelector('feedback-form');

feedbackForm.addEventListener('input', throttle(onInput, 500));

let inputForm = JSON.parse(localStorage.getItem(key));
const { email, message } = feedbackForm.elements;

function onInput(e) {
    inputForm = { email: email.value, message: message.value };
    localStorage.setItem(key, JSON.parse(inputForm));
}

function onFormSubmit(e) {
    console.log({ email: email.value, message: message.value });
    if (email.value === '' || message.value === '') {
        alert('Please fill in the field')
    }
}