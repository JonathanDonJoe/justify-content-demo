//jS

const flexStart = document.querySelector('[ data-flex-start ]');
const flexStartDiv = document.querySelector('[ data-flex-start-div ]');

flexStart.addEventListener('click', () => {
    flexStartDiv.classList.toggle('hidden')
});