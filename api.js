function renderCard(card, index) {
  const div = new PageElement('div', '', `card${index}`, 'card', '', '.results__output');
  div.append();
  div.element.style.backgroundImage = `url(${card.image_uris.art_crop})`;

  const cardInfo = new PageElement(
    'div',
    '',
    `cardInfo${index}`,
    'card__info',
    '',
    `#card${index}`
  );
  cardInfo.append();

  const name = new PageElement(
    'h1',
    `${card.name}`,
    `card-link${index}`,
    'card__name',
    '',
    `#cardInfo${index}`
  );
  name.append();

  const star = new PageElement('i', '', '', 'fas fa-star', '', `#cardInfo${index}`);
  star.append();

  div.element.addEventListener('mouseenter', () => {
    cardInfo.element.style.visibility = 'visible';
  });
  div.element.addEventListener('mouseleave', () => {
    cardInfo.element.style.visibility = 'hidden';
  });
}

function search() {
  setTimeout(() => {
    const url = 'https://api.scryfall.com/cards/search?order=released&q=';
    const searchValue = `${url}${searchInput.element.value}`;

    fetch(searchValue)
      .then((res) => res.json())
      .then((data) => {
        const cards = data.data;
        resultsOutput.element.innerHTML = '';

        cards.forEach((card, i) => {
          renderCard(card, i);
        });
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, 500);
}

searchInput.element.addEventListener('keyup', search);
