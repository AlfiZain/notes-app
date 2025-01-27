import Utils from '../utils.js';
import addNote from './addNote.js';
import NotesApi from '../data/remote/notes-api.js';
import Swal from 'sweetalert2';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const home = () => {
  const noteListElement = document.querySelector('note-list');
  const shadowRoot = noteListElement.shadowRoot;
  const listElement = shadowRoot.querySelector('.list');
  const isArchivedPage =
    noteListElement.getAttribute('list-title') === 'Archived Notes';

  const addNoteFormElement = document.querySelector('add-note-form');
  const addNoteButtonElement = shadowRoot.querySelector('.add-note-btn');
  const searchBarElement = shadowRoot.querySelector('search-bar');
  const archivedButtonElement = shadowRoot.querySelector('.archived-btn');
  const allNotesButtonElement = shadowRoot.querySelector('.all-notes-btn');
  const gridOptionElement = shadowRoot.querySelector('#grid-option');
  gridOptionElement.value = noteListElement.getAttribute('grid-size');

  const loadingElement = shadowRoot.getElementById('loading-indicator');
  gsap.registerPlugin(ScrollTrigger);

  const displayNonArchivedNotes = async () => {
    try {
      Utils.showLoading(loadingElement);
      const notes = await NotesApi.getNotes();
      noteListElement.setAttribute('list-title', 'All Notes');
      Utils.appearAnimation(noteListElement);
      displayNotes(notes);

      Utils.hideElement(allNotesButtonElement);
      Utils.showFlexElement(archivedButtonElement);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred, check your internet connection',
        draggable: true,
      });
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  const displayArchivedNotes = async () => {
    try {
      Utils.showLoading(loadingElement);
      const notes = await NotesApi.getArchivedNotes();
      noteListElement.setAttribute('list-title', 'Archived Notes');
      Utils.appearAnimation(noteListElement);
      displayNotes(notes);

      Utils.hideElement(archivedButtonElement);
      Utils.showFlexElement(allNotesButtonElement);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred, check your internet connection',
        draggable: true,
      });
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  const displaySingleNote = async (noteId) => {
    try {
      Utils.showLoading(loadingElement);
      const note = await NotesApi.getSingleNote(noteId);
      Utils.appearAnimation(noteListElement);
      displayNotes([note]);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Note not found',
        draggable: true,
      });
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  const displayNotes = (noteData) => {
    Utils.emptyElement(listElement);
    const noteItemElements = noteData.map((note) => {
      const noteItemElement = document.createElement('note-item');
      noteItemElement.note = note;
      noteItemElement.id = note.id;
      return noteItemElement;
    });

    Utils.hideElement(addNoteFormElement);
    Utils.showElement(noteListElement);
    listElement.append(...noteItemElements);

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

    const noteItems = shadowRoot.querySelectorAll('note-item');
    noteItems.forEach((noteItem) => {
      const noteItemShadowRoot = noteItem.shadowRoot;
      const archiveButton = noteItemShadowRoot.querySelector('.archive-btn');
      const unarchiveButton =
        noteItemShadowRoot.querySelector('.unarchive-btn');
      const deleteButton = noteItemShadowRoot.querySelector('.delete-btn');

      archiveButton.addEventListener('click', () => {
        archiveNote(noteItem.note.id);
      });
      unarchiveButton.addEventListener('click', () => {
        unarchiveNote(noteItem.note.id);
      });
      deleteButton.addEventListener('click', () => {
        deleteNote(noteItem.note.id);
      });
    });
  };

  const archiveNote = async (noteId) => {
    try {
      Utils.showLoading(loadingElement);
      const response = await NotesApi.archiveNote(noteId);
      displayNonArchivedNotes();
      Swal.fire('Success', response, 'success');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred, check your internet connection',
        draggable: true,
      });
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  const unarchiveNote = async (noteId) => {
    try {
      Utils.showLoading(loadingElement);
      const response = await NotesApi.unarchiveNote(noteId);
      displayArchivedNotes();
      Swal.fire('Success', response, 'success');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred, check your internet connection',
        draggable: true,
      });
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      Utils.showLoading(loadingElement);

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
      if (result.isConfirmed) {
        const response = await NotesApi.deleteNote(noteId);
        const noteElement = shadowRoot.querySelector(`#${noteId}`);
        if (noteElement) {
          gsap.fromTo(
            noteElement,
            { opacity: 1, scale: 1 },
            {
              opacity: 0,
              scale: 0,
              duration: 1,
              ease: 'power2.out',
            },
          );
        }
        await Swal.fire({
          title: 'Deleted!',
          text: `${response}`,
          icon: 'success',
        });

        const isArchivedPage =
          noteListElement.getAttribute('list-title') === 'Archived Notes';
        if (isArchivedPage) {
          displayArchivedNotes();
        } else {
          displayNonArchivedNotes();
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred, check your internet connection',
        draggable: true,
      });
    } finally {
      Utils.hideLoading(loadingElement);
    }
  };

  addNote(() => {
    const isArchivedPage =
      noteListElement.getAttribute('list-title') === 'Archived Notes';
    if (isArchivedPage) {
      displayArchivedNotes();
    } else {
      displayNonArchivedNotes();
    }
  });

  gridOptionElement.addEventListener('change', (e) => {
    const newSize = e.target.value;
    gridOptionElement.value = newSize;
    noteListElement.setAttribute('grid-size', newSize);
  });

  addNoteButtonElement.addEventListener('click', () => {
    Utils.showElement(addNoteFormElement);
    Utils.hideElement(noteListElement);
    Utils.appearAnimation(addNoteFormElement);
  });

  searchBarElement.addEventListener('search', (e) => {
    const { query } = e.detail;
    if (query) {
      displaySingleNote(query);
      searchBarElement.shadowRoot.querySelector('input#name').value = '';
      noteListElement.setAttribute('list-title', `Note ID : ${query}`);
      Utils.hideElement(archivedButtonElement);
      Utils.showFlexElement(allNotesButtonElement);
    }
  });

  archivedButtonElement.addEventListener('click', () => {
    displayArchivedNotes();
  });

  allNotesButtonElement.addEventListener('click', () => {
    displayNonArchivedNotes();
  });

  if (isArchivedPage) {
    displayArchivedNotes();
  } else {
    displayNonArchivedNotes();
  }
};

export default home;
