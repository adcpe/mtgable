function renderCard(card, index) {
  const baseDiv = new PageElement('div', '', `card${index}`, 'card', '', '.results__output')
  baseDiv.append()

  const name = new PageElement(
    'h1',
    `${card.name}`,
    `card-link${index}`,
    'card__name',
    '',
    `#card${index}`
  )
  name.append()

  const artist = new PageElement(
    'h2',
    card.artist,
    `card-link${index}`,
    'card__artist',
    '',
    `#card${index}`
  )
  artist.append()

  const uri = new PageElement(
    'a',
    '',
    `uri${index}`,
    '',
    { href: `${card.scryfall_uri}`, target: '_blank', rel: 'noopener noreferrer' },
    `#card${index}`
  )
  uri.append()

  const img = new PageElement(
    'img',
    '',
    '',
    'cardArt',
    { src: `${card.image_uris.art_crop}` },
    `#uri${index}`
  )
  img.append()
}

function search() {
  setTimeout(() => {
    const url = 'https://api.scryfall.com/cards/search?order=released&q='
    const searchValue = `${url}${searchInput.element.value}`

    fetch(searchValue)
      .then((res) => res.json())
      .then((data) => {
        const cards = data.data
        resultsOutput.element.innerHTML = ''

        cards.forEach((card, i) => {
          renderCard(card, i)
        })
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
  }, 500)
}

searchInput.element.addEventListener('keyup', search)
