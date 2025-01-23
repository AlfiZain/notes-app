class AddNoteForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      .section-title {
        margin: 0 0 1rem 0;
      }
      label {
        display: block;
        font-weight: bold;
        font-size: 1.15rem;
        margin-block-end: 0.5rem;
      }
      input, textarea {
        width: 100%;
        padding: 0.75rem;
        margin-block-end: 1rem;
        border: 1px solid #cccccc;
        border-radius: 5px;
        font-size: 1rem;
        box-sizing: border-box;
        font-family: inherit;
        font-size: 1rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
      }
      .form-group .description {
        display: block;
        margin-block-end: 0.5rem;
        font-size: 0.75rem;
        color: #666666;
      }
      .form-group.btn-group{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
      button {
        width: 100%;
        max-width: 200px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
      }
      .submit-btn {
        color: white;
        background: #008bff;
      }
      .submit-btn:hover {
        background: #005bff;
      }
        .cancel-btn {
          color: white;
          background: #ff2222;
        }
        .cancel-btn:hover {
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
    this._shadowRoot.innerHTML += `
      <h2 class="section-title">Add New Note</h2>
      <form>
        <div class="form-group">
          <label for="title">Note Title</label>
          <span id="titleHelp" class="description"></span>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Enter a note title" 
            required 
            minlength="5" 
            maxlength="30" 
            autocomplete="off" 
            aria-describedby="titleHelp">
        </div>
        <div class="form-group">
          <label for="body">Note Contents</label>
          <span id="bodyHelp" class="description"></span>
          <textarea 
            id="body" 
            name="body" 
            placeholder="Write your notes here..." 
            required 
            minlength="5" 
            maxlength="250" 
            inputmode="text" 
            aria-describedby="bodyHelp"></textarea>
        </div>
        <div class="form-group btn-group">
          <button type="submit" class="submit-btn">Save Notes</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </div>
      </form>
    `;
  }
}

customElements.define("add-note-form", AddNoteForm);
