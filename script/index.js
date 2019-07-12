//jS

const flexStart = document.querySelector('[ data-flex-start ]');
const flexStartDiv = document.querySelector('[ data-flex-start-div ]');

flexStart.addEventListener('click', () => {
    flexStartDiv.classList.toggle('hidden')
});

const flexEnd = document.querySelector('[ data-flex-end ]');
const flexEndDiv = document.querySelector('[ data-flex-end-div ]');

flexEnd.addEventListener('click', () => {
    flexEndDiv.classList.toggle('hidden')
});
const center = document.querySelector('[ data-center ]');
const centerDiv = document.querySelector('[ data-center-div ]');

center.addEventListener('click', () => {
    centerDiv.classList.toggle('hidden')
});
const spaceBetween = document.querySelector('[ data-space-between ]');
const spaceBetweenDiv = document.querySelector('[ data-space-between-div ]');

spaceBetween.addEventListener('click', () => {
    spaceBetweenDiv.classList.toggle('hidden')
});
const spaceAround = document.querySelector('[ data-space-around ]');
const spaceAroundDiv = document.querySelector('[ data-space-around-div ]');

spaceAround.addEventListener('click', () => {
    spaceAroundDiv.classList.toggle('hidden')
});
const spaceEvenly = document.querySelector('[ data-space-evenly ]');
const spaceEvenlyDiv = document.querySelector('[ data-space-evenly-div ]');

spaceEvenly.addEventListener('click', () => {
    spaceEvenlyDiv.classList.toggle('hidden')
});