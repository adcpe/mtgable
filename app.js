class PageElement {
  constructor(elementType, ids, classes, attributes, text, parent) {
    this.elementType = document.createElement(elementType);

    this.elementType.id = ids;

    this.elementType.className = classes;

    Object.entries(attributes).forEach(([key, value]) => {
      this.elementType.setAttribute(key, value);
    });

    this.elementType.innerText = text;

    this.parent = document.querySelector(parent);
  }

  render() {
    this.parent.appendChild(this.elementType);
  }
}

const searchInputAttributes = {
  type: 'search',
  name: 'search',
  placeholder: 'Search some cards!',
};
const searchInput = new PageElement('input', 'search', '', searchInputAttributes, '', '.search');

const resultsTitle = new PageElement('h1', '', 'title', {}, 'Results', '.results');
const favesTitle = new PageElement('h1', '', 'title', {}, 'Favorites', '.faves');

resultsTitle.render();
favesTitle.render();
searchInput.render();
