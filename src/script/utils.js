class Utils {
  static showElement(element) {
    element.style.display = "block";
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = "none";
    element.hidden = true;
  }

  static emptyElement(element) {
    element.innerHTML = "";
  }
}

export default Utils;
