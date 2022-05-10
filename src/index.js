import './styles.css';
import { addScore, retrieveScore } from './apiPostGet.js';

const form = document.querySelector('#form');
const name = document.querySelector('#name');
const number = document.querySelector('#number');
const renderPage = document.querySelector('.renderPage');
const refresh = document.querySelector('#refresh');

const makeScore = async () => {
  const data = await retrieveScore();
  const dataInfo = data.result;
  renderPage.innerHTML = '';
    dataInfo.forEach((mark) => {
      renderPage.innerHTML += `<li>${mark.user}: ${mark.score}</li>`;
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const myname = name.value;
  const myNumber = number.value;
  addScore(myname, myNumber)
    .then(() => {
      const added = document.querySelector('.added');
      added.textContent = `${myname}'s score added, Congratulations!`;
      setTimeout(() => {
        added.style.display = 'none';
      }, 2000);
    });
  form.reset();
  makeScore();
});

refresh.addEventListener('click', async () => {
  makeScore();
});

window.addEventListener('load', () => {
  makeScore();
});