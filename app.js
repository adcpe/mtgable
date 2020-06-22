class PageElement {
  constructor(element, text, ids, classes, attributes, parent) {
    this.element = document.createElement(element);

    this.element.innerText = text;

    this.element.id = ids;

    this.element.className = classes;

    Object.entries(attributes).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });

    this.parent = document.querySelector(parent);
  }

  append() {
    this.parent.appendChild(this.element);
  }

  remove() {
    this.parent.removeChild(this.element);
  }
}

const searchInputAttributes = {
  type: 'search',
  name: 'search',
  autofocus: '',
  placeholder: 'Search some cards!',
};
const searchInput = new PageElement('input', '', 'search', '', searchInputAttributes, '.search');

const resultsTitle = new PageElement('h1', 'Results', '', 'results__title', {}, '.results');
const resultsOutput = new PageElement('div', '', '', 'results__output', {}, '.results');

resultsTitle.append();
resultsOutput.append();
searchInput.append();
