class NoteListContainer extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      .container {
        width: 100%;
        max-width: 1000px;
        min-height: 70vh;
        display: block;
        margin-inline: auto;
        margin-block: 1rem;
        padding: 1rem;
        color: black;       
        box-sizing: border-box;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('note-list-container', NoteListContainer);
