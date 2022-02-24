function generateRandomClass() {
  const cardClassList = ['newspaper', 'magazine1', 'magazine2',
    'medium', 'big', 'reallybig', 'rotateleft', 'rotateright',
    'skewleft', 'skewright'];
  const randomNum = Math.floor(Math.random() * 10);
  return cardClassList[randomNum];
}

function GenerateCard() {
  const CardContainer = document.getElementById('carta-gerada');
  const cardWords = document.getElementById('carta-texto').value.split(' ');
  let card;
  for (let i = 0; i < cardWords.length; i += 1) {
    card = document.createElement('span');
    card.innerHTML = cardWords[i];
    card.classList.add(generateRandomClass());
    CardContainer.appendChild(card);
  }
}

const GenerateCardClick = document.getElementById('criar-carta');
GenerateCardClick.addEventListener('click', () => {
  const cardText = document.getElementById('carta-texto').value;
  const cardContainer = document.getElementById('carta-gerada');
  if (cardText.trim() === '') {
    cardContainer.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    cardContainer.innerText = '';
    GenerateCard();
  }
});
