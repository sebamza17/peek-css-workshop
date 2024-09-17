import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class UnitsController extends Controller {
  get viewportWidth() {
    return window.innerWidth;
  }

  get viewportHeight() {
    return window.innerHeight;
  }

  @action
  resetValues() {
    const htmlElement = document.querySelector('html');
    const currentFontSize = parseInt(window.getComputedStyle(htmlElement).fontSize);
    htmlElement.style.fontSize = '16px';
  }

  // increase html element font-size by 1px
  @action
  increaseHtmlFontSize() {
    const htmlElement = document.querySelector('html');
    const currentFontSize = parseInt(window.getComputedStyle(htmlElement).fontSize);
    htmlElement.style.fontSize = `${currentFontSize + 1}px`;
  }

  // decrease html element font-size by 1px
  @action
  decreaseHtmlFontSize() {
    const htmlElement = document.querySelector('html');
    const currentFontSize = parseInt(window.getComputedStyle(htmlElement).fontSize);
    htmlElement.style.fontSize = `${currentFontSize - 1}px`;
  }
}
