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