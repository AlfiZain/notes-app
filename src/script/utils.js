import gsap from 'gsap';

class Utils {
  static showElement(element) {
    element.style.display = 'block';
    element.hidden = false;
  }

  static showFlexElement(element) {
    element.style.display = 'flex';
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = 'none';
    element.hidden = true;
  }

  static emptyElement(element) {
    element.innerHTML = '';
  }

  static showLoading(loadingElement) {
    loadingElement.style.display = 'block';
  }

  static hideLoading(loadingElement) {
    loadingElement.style.display = 'none';
  }

  static appearAnimation(element) {
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
      },
    );
  }
}

export default Utils;
