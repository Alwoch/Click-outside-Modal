const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');


//our call back function
function handleCardButtonClick(e) {
 console.log('YA CLICKED IT');
 const button = e.currentTarget;
 const card = button.closest('.card');
  console.log(card);
 // grab the image src
 const imgSrc = card.querySelector('img').src;
 console.log(imgSrc);
 //grabbing the description
 const desc = card.dataset.description;
 console.log(desc);

 const name = card.querySelector('h2').textContent;
 modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}" />
  <p>${desc}</p>
`;
// show the modal
modalOuter.classList.add('open');
}
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))

function closeModal() {
 modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
 const isOutside = !event.target.closest('.modal-inner');
 if (isOutside) {
  closeModal();
}
})

window.addEventListener('keydown', event => {
 if (event.key === 'Escape') {
   closeModal();
 }
});


