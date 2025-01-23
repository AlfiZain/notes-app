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
      display: flex;
      flex-direction: column;
      justify-content: space-between;  
      height: 250px;
        border-radius: 10%;
        padding: 0.5rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        background: #eeeeee;
        transition: transform 0.3s ease;
      }      
        .note-card:hover {
          transform: scale(1.05); 
        }
      .note-content{
        margin: 0.5rem;
        overflow: hidden;
      }
        .note-footer{
        display: flex;
        justify-content: center;
        margin: 0.5rem;
        }
      .note-title {
        margin: 0;
        overflow-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .note-created-at {
        font-size: 0.8rem;
        color: gray;
      }
        .delete-btn {
          width: 100%;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          color: white;
          background: #ff2222;
        }
        .delete-btn:hover {
          background: #dd0000;
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
        <div class="note-footer">
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
