class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: false,
  };

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      .note-card {
        min-height: 250px;
        border: 1px solid black;
        border-radius: 10%;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
        background: #eeeeee;
      }      
      .note-content{
        margin: 1rem;
        overflow: hidden;
      }
      .note-title {
        margin: 0;
        overflow-wrap: break-word;
      }
      .note-created-at {
        font-size: 0.8rem;
        color: gray;
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
    const formattedDate = new Date(this._note.createdAt).toLocaleString();
    this._shadowRoot.innerHTML += `
      <div class="note-card" id="${this._note.id}">
        <div class="note-content">
          <h3 class="note-title">${this._note.title}</h3>
          <p class="note-created-at">${formattedDate}</p>
          <p class="note-body">${this._note.body}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
