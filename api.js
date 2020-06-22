function search() {
  const url = 'https://api.scryfall.com/cards/search?order=released&q=';
  const searchValue = `${url}${searchInput.element.value}`;

  fetch(searchValue)
    .then((res) => res.json())
    .then((data) => {
      const cards = data.data;
      resultsOutput.element.innerHTML = '';

      cards.forEach((card, i) => {
        const div = new PageElement('div', '', `card${i}`, 'card', '', '.results__output');
        div.append();

        div.element.style.backgroundImage = `url(${card['image_uris']['art_crop']})`;

        const a = new PageElement('a', '', `card-link${i}`, '', '', `#card${i}`).append();
      });
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
}

searchInput.element.addEventListener('keyup', search);
