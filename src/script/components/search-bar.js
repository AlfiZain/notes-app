class SearchBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = "submit";
  _searchEvent = "search";

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this._shadowRoot.querySelector("form").addEventListener("submit", (e) => this._onFormSubmit(e, this));
    this.addEventListener(this._submitEvent, this._onSearchBarSubmit);
  }

  disconnectedCallback() {
    this._shadowRoot.querySelector("form").removeEventListener("submit", (e) => this._onFormSubmit(e, this));
    this.removeEventListener(this._submitEvent, this._onSearchBarSubmit);
  }

  _onFormSubmit(e, searchBarInstance) {
    searchBarInstance.dispatchEvent(new CustomEvent("submit"));
    e.preventDefault();
  }

  _onSearchBarSubmit() {
    const query = this._shadowRoot.querySelector("input#name").value;
    if (!query) return;

    this.dispatchEvent(
      new CustomEvent(this._searchEvent, {
        detail: { query },
        bubbles: true,
      })
    );
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: inline;
      }
      .floating-form {
        background-color: white;
        margin-block: 1rem;
        border-radius: 5px;
      }
      .search-form {
        display: flex;
        gap: 16px;
      }
      .search-form .form-group {
        flex-grow: 1;
        position: relative;
      }
      .search-form .form-group input {
        display: block;
        width: 100%;
        height: 40px;
        padding: 14px 10px 0 10px;
        border-inline: none;
        border-block-start: none;
        border-block-end: 1px solid #007bff;
        font-size: 1rem;
      }
      .search-form .form-group input:focus-visible {
        outline: 0;
      }
      .search-form .form-group label {
        line-height: 40px;
        font-size: 1em;
        font-weight: bold;
        color: #007bff;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: 0;
        user-select: none;
        pointer-events: none;
        transition: 150ms all ease-in-out;
      }
      .search-form .form-group input:focus-visible ~ label,
      .search-form .form-group input:valid ~ label {
        left: 10px;
        top: -16px;
        font-size: 0.8em;
      }
      .search-form button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 0;
        border-radius: 10px;
        padding-inline: 1.25rem;
        background-color: #007bff;
        font-size: 1rem;
        color: white;
        cursor: pointer;
        transition: 100ms linear;
      }
      .search-form button:hover {
        background-color: #005bff;
      }
      .search-icon {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      @media screen and (max-width: 480px) {
        .search-text {
          display: none;
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="floating-form">
        <form id="searchForm" class="search-form">
          <div class="form-group">
            <input id="name" name="name" type="search" required />
            <label for="name">Note Id</label>
          </div>
          <button>
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentcolor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
            <span class="search-text">Search</span>
          </button>
        </form>
      </div>
    `;
  }
}

customElements.define("search-bar", SearchBar);
