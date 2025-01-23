class AppBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        color: black;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
        background: #008bff;
      }
      div {
        padding: 24px 20px;
      }
      .app-name {
        margin: 0;
        color: white;
        font-size: 1.7em;
      }
    `;
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
      <div>
        <h1 class="app-name">My Notes</h1>
      </div>
    `;
  }
}

customElements.define("app-bar", AppBar);