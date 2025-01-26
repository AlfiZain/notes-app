import NotesApi from '../data/remote/notes-api.js';
import Utils from '../utils.js';
import Swal from 'sweetalert2';

const addNote = (onComplete) => {
  const addNoteFormElement = document.querySelector('add-note-form');
  const shadowRoot = addNoteFormElement.shadowRoot;

  const form = shadowRoot.querySelector('form');
  const titleInput = shadowRoot.getElementById('title');
  const bodyTextArea = shadowRoot.getElementById('body');
  const titleHelp = shadowRoot.getElementById('titleHelp');
  const bodyHelp = shadowRoot.getElementById('bodyHelp');
  const cancelButton = shadowRoot.querySelector('.cancel-btn');

  const loadingElement = shadowRoot.getElementById('loading-indicator');

  const defaultTitleHelpText = `Title must be between ${titleInput.getAttribute('minlength')} and ${titleInput.getAttribute('maxlength')} characters.`;
  const defaultBodyHelpText = `The content of the note must be between ${bodyTextArea.getAttribute('minlength')} and ${bodyTextArea.getAttribute('maxlength')} characters.`;

  const resetHelpText = () => {
    titleHelp.innerText = defaultTitleHelpText;
    titleHelp.style.color = '#666666';
    bodyHelp.innerText = defaultBodyHelpText;
    bodyHelp.style.color = '#666666';
  };

  const createNote = async (newNote) => {
    try {
      Utils.showLoading(loadingElement);
      const message = await NotesApi.createNote(newNote);
      Swal.fire('Success', message, 'success');
      if (onComplete) onComplete();
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  const isValid = (inputElement, helpElement) => {
    const maxLength = inputElement.getAttribute('maxlength');
    helpElement.textContent = '';

    if (!inputElement.checkValidity()) {
      helpElement.textContent = inputElement.validationMessage;
      helpElement.style.color = 'red';
      return false;
    }

    if (inputElement.value.length >= maxLength) {
      helpElement.textContent = 'The character limit has been reached.';
      helpElement.style.color = 'red';
      return false;
    }

    return true;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newNote = {
      title: titleInput.value.trim(),
      body: bodyTextArea.value.trim(),
    };

    if (!isValid(titleInput, titleHelp) || !isValid(bodyTextArea, bodyHelp)) {
      return;
    }

    createNote(newNote);
    event.target.reset();
    resetHelpText();
  });

  titleInput.addEventListener('input', function () {
    isValid(this, titleHelp);
  });

  bodyTextArea.addEventListener('input', function () {
    isValid(this, bodyHelp);
  });

  cancelButton.addEventListener('click', () => {
    form.reset();
    resetHelpText();
    if (onComplete) onComplete();
  });

  resetHelpText();
  Utils.appearAnimation(addNoteFormElement);
};

export default addNote;
