import BaseController from './BaseController';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TransitionsController extends BaseController {
  @tracked backgroundColor = '#ffffff';
  @tracked transitionExample = '';

  @action
  updateBackgroundColor(event) {
    this.backgroundColor = event.target.value;
  }

  @action
  toggleTransitionExample() {
    if (this.transitionExample === '') {
      this.transitionExample = 'background-color: aquamarine; border-color: pink; transform: scale(1.2)';
    } else {
      this.transitionExample = '';
    }
  }
}
