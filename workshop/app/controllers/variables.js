import Controller from '@ember/controller';
import {action} from "@ember/object";
import {tracked} from '@glimmer/tracking';

export default class VariablesController extends Controller {
  get backgroundColorExample1 () {
    return getComputedStyle(document.documentElement).getPropertyValue('--background-color-example-1')
  }

  get backgroundColorExample2 () {
    return getComputedStyle(document.documentElement).getPropertyValue('--background-color-example-2')
  }

  get sliderConfig() {
    return {
      type: 'closed',
      range: {
        min: 0,
        max: 360,
      },
    };
  }

  @action
  updateColor(varName, event) {
    document.documentElement.style.setProperty(varName, event.target.value)
  }

  @action
  updateLayoutRotateY (event) {
    const value = event.target.value
    document.documentElement.style.setProperty('--layout-rotate-Y', `${value}deg`)
  }
}
