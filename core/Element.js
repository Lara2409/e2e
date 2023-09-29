export default class Element {
  DEFAULT_TIMEOUT = 60_000;

  constructor(selector) {
    this.selector = selector;
  }

  get element() {
    return $(this.selector);
  }

  isDisplayed() {
    return this.element.then((el) => el.isDisplayed());
  }

  scrollIntoView() {
    return this.element.then((el) => el.scrollIntoView());
  }

  moveTo() {
    return this.element.then((el) => el.moveTo());
  }
}  
