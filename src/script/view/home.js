import Utils from "../utils.js";
import notesData from "../data/notes.js";
import addNote from "./addNote.js";

const home = () => {
  const noteListElement = document.querySelector("note-list");
  const shadowRoot = noteListElement.shadowRoot;

  const addNoteFormElement = document.querySelector("add-note-form");
  const addNoteButtonElement = shadowRoot.querySelector(".add-note-btn");
  const gridOptionElement = shadowRoot.querySelector("#grid-option");
  gridOptionElement.value = noteListElement.getAttribute("grid-size");

  const displayNotes = (notesData) => {
    Utils.emptyElement(noteListElement);
    const noteItemElements = notesData.map((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.note = note;
      return noteItemElement;
    });
    Utils.showElement(noteListElement);
    Utils.hideElement(addNoteFormElement);
    noteListElement.append(...noteItemElements);
  };

  gridOptionElement.addEventListener("change", (e) => {
    const newSize = e.target.value;
    gridOptionElement.value = newSize;
    noteListElement.setAttribute("grid-size", newSize);
  });

  addNoteButtonElement.addEventListener("click", (e) => {
    Utils.showElement(addNoteFormElement);
    Utils.hideElement(noteListElement);
    addNote(notesData);
  });
  displayNotes(notesData);
};

export default home;
