const cardContainer = document.getElementById('carta-gerada');

function generateRandomClass() {
  const cardClassList = ['newspaper', 'magazine1', 'magazine2',
    'medium', 'big', 'reallybig', 'rotateleft', 'rotateright',
    'skewleft', 'skewright'];
  const randomNum = Math.floor(Math.random() * 10);
  return cardClassList[randomNum];
}

function GenerateCard() {
  cardContainer.innerHTML = '';

  const cardWords = document.getElementById('carta-texto').value.split(' ');

  const countWords = document.getElementById('carta-contador');
  countWords.innerText = cardWords.length;

  let card;

  for (let i = 0; i < cardWords.length; i += 1) {
    card = document.createElement('span');
    card.innerHTML = cardWords[i];
    card.classList.add(generateRandomClass());
    cardContainer.appendChild(card);
  }
}

const GenerateCardClick = document.getElementById('criar-carta');
GenerateCardClick.addEventListener('click', () => {
  const cardText = document.getElementById('carta-texto').value;
  if (cardText.trim() === '') {
    cardContainer.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    cardContainer.innerText = '';
    GenerateCard();
  }
});

const cardClick = cardContainer;
cardClick.addEventListener('click', (e) => {
  GenerateCard();
});
