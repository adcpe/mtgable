class PageElement {
  constructor(element, text, ids = null, classes, attributes = '', parent) {
    this.element = document.createElement(element)
    this.element.innerText = text
    if (ids) this.element.id = ids
    this.element.className = classes

    if (attributes !== '') {
      Object.entries(attributes).forEach(([key, value]) => {
        this.element.setAttribute(key, value)
      })
    }

    this.parent = document.querySelector(parent)
  }

  append() {
    this.parent.appendChild(this.element)
  }

  remove() {
    this.parent.removeChild(this.element)
  }
}

const searchInputAttributes = {
  type: 'search',
  name: 'search',
  autofocus: '',
  placeholder: 'Infernal Genesis'
}
const searchInput = new PageElement('input', '', 'search', '', searchInputAttributes, '.search')

const resultsOutput = new PageElement('div', '', '', 'results__output', {}, '.results')

resultsOutput.append()
searchInput.append()
