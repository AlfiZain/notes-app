class NoteList extends HTMLElement {
  static observedAttributes = ["grid-size"];

  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._gridSize = this.getAttribute("grid-size");

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      .list {
        display: grid;
        gap: 1rem;
      }
      .small {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
      .medium {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
      .large {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
      .section-title h2 {
        margin: 0;
      }
      .option-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
        row-gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .add-note-btn {
        display: block;
        width: 100%;
        max-width: 200px;
        padding: 0.5rem 1rem;
        margin-block: 1rem;
        font-size: 1rem;
        color: white;
        background: #007bff;
        border: none;
        border-radius: 10px;
      }
      .add-note-btn:hover {
        background: #005bff;
        cursor: pointer;
      }
      select {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      /* Media query untuk laptop */
      @media screen and (max-width: 1000px) {
        .section-title {
          position: sticky;
          top: 0;
          left: 0;
          background: #ffffff;
          margin-inline: -1rem;
          padding: 1rem;
          z-index: 999;
        }
      }
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._gridSize = newValue;
    this._updateGrid();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="section-title">
        <h2>All Notes</h2>
      </div>
      <div class="option-container">
        <button class="add-note-btn">+ Add Note</button>
        <div class="grid-option-container">
          <label for="grid-option">Grid Size:</label>
          <select id="grid-option" class="grid-size-select">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
      <div class="list ${this._gridSize}">
        <slot></slot>
      </div>
    `;
  }

  _updateGrid() {
    const listElement = this._shadowRoot.querySelector(".list");
    if (listElement) {
      listElement.className = `list ${this._gridSize}`;
    }
  }
}

customElements.define("note-list", NoteList);
