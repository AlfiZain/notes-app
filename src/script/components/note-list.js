import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class NoteList extends HTMLElement {
  static observedAttributes = ['list-title', 'grid-size'];

  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._gridSize = this.getAttribute('grid-size');
    this._listTitle = this.getAttribute('list-title');

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    gsap.registerPlugin(ScrollTrigger);
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
      .section-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding-block: 1rem;
      }
      .section-title h2 {
        margin: 0;
      }
      .add-note-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding-inline: 1.25rem;
        padding-block: 0.5rem;
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
      .add-icon {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      select {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      select:focus {
        outline: none;
      }
      .archived-btn {
        display: flex;
        align-items: start;
        gap: 0.5rem;
        width: 100%;
        padding: 0.5rem 1rem;
        margin-block-end: 1rem;
        font-size: 1rem;
        color: black;
        background: #dddddd;
        border: none;
        border-radius: 10px;
        text-align: left;
      }
      .archived-btn:hover {
        cursor: pointer;
        background: #cccccc;
      }
      .archived-icon {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      .all-notes-btn {
        display: none;
        align-items: start;
        gap: 0.5rem;
        width: 100%;
        padding: 0.5rem 1rem;
        margin-block-end: 1rem;
        font-size: 1rem;
        color: black;
        background: #dddddd;
        border: none;
        border-radius: 10px;
        text-align: left;
      }
      .all-notes-btn:hover {
        cursor: pointer;
        background: #cccccc;
      }
      .all-notes-icon {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      #loading-indicator {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 1.2rem;
        z-index: 1000;
      }
      @media screen and (max-width: 1000px) {
        .section-title {
          position: sticky;
          top: 0;
          left: 0;
          background: #ffffff;
          margin-inline: -1rem;
          padding-inline: 1rem;
          z-index: 999;
        }
      }
      @media screen and (max-width: 425px) {
        .add-text {
          display: none;
        }
      }
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'grid-size') {
      this._gridSize = newValue;
      this._updateGrid();
      const noteItemElements = this._shadowRoot.querySelectorAll('note-item');
      noteItemElements.forEach((noteItem) => {
        gsap.fromTo(
          noteItem,
          { opacity: 0.1, scale: 0.3 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: noteItem,
              start: 'top 90%',
              end: 'top 50%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    }
    if (name === 'list-title') {
      this._listTitle = newValue;
      this._updateTitle();
    }
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
    this._shadowRoot.innerHTML += `
      <div class="section-title">
        <h2>${this._listTitle}</h2>
        <button class="add-note-btn">
          <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentcolor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
          </svg>
          <span class="add-text">Add Note</span>
        </button>
      </div>
      <div class="grid-option-container">
        <label for="grid-option">Grid Size:</label>
        <select id="grid-option" class="grid-size-select">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <search-bar></search-bar>
      <button class="archived-btn">
        <svg class="archived-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentcolor" d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
        </svg>
        Archived
      </button>
      <button class="all-notes-btn">
        <svg class="all-notes-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentcolor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
        All Notes
      </button>
      <div id="loading-indicator">Loading...</div>
      <div class="list ${this._gridSize}">
        
      </div>
    `;
  }

  _updateGrid() {
    const listElement = this._shadowRoot.querySelector('.list');
    if (listElement) {
      listElement.className = `list ${this._gridSize}`;
    }
  }

  _updateTitle() {
    const listTitle = this._shadowRoot.querySelector('.section-title h2');
    if (listTitle) {
      listTitle.innerText = this._listTitle;
    }
  }
}

customElements.define('note-list', NoteList);
