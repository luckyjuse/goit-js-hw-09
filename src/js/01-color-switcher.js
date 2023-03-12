const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

const TIMER_DELAY = 1000;
let intervalId = null;

refs.start.addEventListener('click', changeColor);

refs.stop.addEventListener('click', stopChangeColor);

refs.stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(intervalId);
}
