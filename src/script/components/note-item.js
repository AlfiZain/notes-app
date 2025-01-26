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
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
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
        height: 350px;
        border-radius: 10%;
        padding: 0.5rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        background: #eeeeee;
        transition: transform 0.3s ease;
      }
      .note-card:hover {
        transform: scale(1.05);
      }
      .note-content {
        margin: 0.5rem;
        overflow: hidden;
      }
      .note-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 0.5rem;
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
      .note-info {
        margin-block: 0.5em;
        font-size: 0.7rem;
        color: gray;
      }
      .note-body {
        margin-block: 0.5em;
      }
      .btn {
        align-items: start;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
      }
      .icon {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      .archive-btn {
        display: flex;
        background: #6c757d;
        color: white;
      }
      .archive-btn:hover {
        background: #5a6268;
      }
      .unarchive-btn {
        display: none;
        align-items: end;
        background: #6c757d;
        color: white;
      }
      .unarchive-btn:hover {
        background: #5a6268;
      }
      .delete-btn {
        display: flex;
        background: #ff2222;
        color: white;
      }
      .delete-btn:hover {
        background: #dd0000;
      }
      .unarchive-icon{
        width: 20px;
        height: 20px;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    const formattedDate = new Date(this._note.createdAt).toLocaleString();
    const isArchived = this._note.archived;
    this._shadowRoot.innerHTML += `
      <div class="note-card" id="${this._note.id}">
        <div class="note-content">
          <h3 class="note-title">${this._note.title}</h3>
          <p class="note-info">${this._note.id} - ${formattedDate}</p>
          <p class="note-body">${this._note.body}</p>
        </div>
        <div class="note-footer">
          <button class="btn archive-btn" style="display: ${isArchived ? 'none' : 'flex'}">
            <svg class="icon archive-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentcolor" d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
            </svg>
            Archive
          </button>
          <button class="btn unarchive-btn" style="display: ${isArchived ? 'flex' : 'none'}">
            <svg class="icon unarchive-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="currentcolor" d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z"/>
            </svg>
            Unarchive
          </button>
          <button class="btn delete-btn">
            <svg class="icon delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentcolor" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
            Delete
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);
