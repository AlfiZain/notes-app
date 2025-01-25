import Utils from "../utils.js";
import addNote from "./addNote.js";
import NotesApi from "../data/remote/notes-api.js";

const home = () => {
  const noteListElement = document.querySelector("note-list");
  const shadowRoot = noteListElement.shadowRoot;
  const listElement = shadowRoot.querySelector(".list");
  const isArchivedPage = noteListElement.getAttribute("list-title") === "Archived Notes";

  const addNoteFormElement = document.querySelector("add-note-form");
  const addNoteButtonElement = shadowRoot.querySelector(".add-note-btn");
  const searchBarElement = shadowRoot.querySelector("search-bar");
  const archivedButtonElement = shadowRoot.querySelector(".archived-btn");
  const allNotesButtonElement = shadowRoot.querySelector(".all-notes-btn");
  const gridOptionElement = shadowRoot.querySelector("#grid-option");
  gridOptionElement.value = noteListElement.getAttribute("grid-size");

  const displayNonArchivedNotes = async () => {
    try {
      const notes = await NotesApi.getNotes();
      noteListElement.setAttribute("list-title", "All Notes");
      displayNotes(notes);

      Utils.hideElement(allNotesButtonElement);
      Utils.showFlexElement(archivedButtonElement);
    } catch (error) {
      alert(error);
    }
  };

  const displayArchivedNotes = async () => {
    try {
      const notes = await NotesApi.getArchivedNotes();
      noteListElement.setAttribute("list-title", "Archived Notes");
      displayNotes(notes);

      Utils.hideElement(archivedButtonElement);
      Utils.showFlexElement(allNotesButtonElement);
    } catch (error) {
      alert(error);
    }
  };

  const displaySingleNote = async (noteId) => {
    try {
      const note = await NotesApi.getSingleNote(noteId);
      // Menampilkan note sebagai array
      displayNotes([note]);
    } catch (error) {
      alert("Note not found or error occurred.");
    }
  };

  const displayNotes = (noteData) => {
    Utils.emptyElement(listElement);
    const noteItemElements = noteData.map((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.note = note;
      return noteItemElement;
    });

    // Menambahkan noteItemElements ke dalam listElement
    Utils.hideElement(addNoteFormElement);
    Utils.showElement(noteListElement);
    listElement.append(...noteItemElements);

    // Mengakses note-item setelah ditambahkan ke dalam DOM
    const noteItems = shadowRoot.querySelectorAll("note-item");
    noteItems.forEach((noteItem) => {
      const noteItemShadowRoot = noteItem.shadowRoot;
      const archiveButton = noteItemShadowRoot.querySelector(".archive-btn");
      const unarchiveButton = noteItemShadowRoot.querySelector(".unarchive-btn");
      const deleteButton = noteItemShadowRoot.querySelector(".delete-btn");

      const isArchivedPage = noteListElement.getAttribute("list-title") === "Archived Notes";
      if (isArchivedPage) {
        Utils.hideElement(archiveButton);
        Utils.showFlexElement(unarchiveButton);
      }

      archiveButton.addEventListener("click", () => {
        archiveNote(noteItem.note.id);
      });
      unarchiveButton.addEventListener("click", () => {
        unarchiveNote(noteItem.note.id);
      });
      deleteButton.addEventListener("click", () => {
        deleteNote(noteItem.note.id);
      });
    });
  };

  const archiveNote = async (noteId) => {
    try {
      const response = await NotesApi.archiveNote(noteId);
      alert(response);
      displayNonArchivedNotes();
    } catch (error) {
      alert("Note not found or error occurred.");
    }
  };

  const unarchiveNote = async (noteId) => {
    try {
      const response = await NotesApi.unarchiveNote(noteId);
      alert(response);
      displayArchivedNotes();
    } catch (error) {
      alert("Note not found or error occurred.");
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const response = await NotesApi.deleteNote(noteId);
      alert(response);
      const isArchivedPage = noteListElement.getAttribute("list-title") === "Archived Notes";
      if (isArchivedPage) {
        displayArchivedNotes();
      } else {
        displayNonArchivedNotes();
      }
    } catch (error) {
      alert("Note not found or error occurred.");
    }
  };

  gridOptionElement.addEventListener("change", (e) => {
    const newSize = e.target.value;
    gridOptionElement.value = newSize;
    noteListElement.setAttribute("grid-size", newSize);
  });

  addNoteButtonElement.addEventListener("click", (e) => {
    Utils.showElement(addNoteFormElement);
    Utils.hideElement(noteListElement);
    addNote(() => {
      const isArchivedPage = noteListElement.getAttribute("list-title") === "Archived Notes";
      if (isArchivedPage) {
        displayArchivedNotes();
      } else {
        displayNonArchivedNotes();
      }
    });
  });

  searchBarElement.addEventListener("search", (e) => {
    const { query } = e.detail;
    console.log("search dipanggil");
    if (query) {
      displaySingleNote(query);
      searchBarElement.shadowRoot.querySelector("input#name").value = "";
      noteListElement.setAttribute("list-title", `Note ID : ${query}`);
      Utils.hideElement(archivedButtonElement);
      Utils.showFlexElement(allNotesButtonElement);
    }
  });

  archivedButtonElement.addEventListener("click", () => {
    displayArchivedNotes();
  });

  allNotesButtonElement.addEventListener("click", () => {
    displayNonArchivedNotes();
  });

  if (isArchivedPage) {
    displayArchivedNotes();
  } else {
    displayNonArchivedNotes();
  }
};

export default home;
