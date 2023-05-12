import throttle from 'lodash/throttle';

const key = 'feedback-form-state';

const feedbackForm = document.querySelector('feedback-form');

let inputForm = JSON.parse(localStorage.getItem(key));
const { email, message } = feedbackForm.elements;

function onInput(e) {
    inputForm = { email: email.value, message: message.value };
    localStorage.setItem(key, JSON.parse(inputForm));
}