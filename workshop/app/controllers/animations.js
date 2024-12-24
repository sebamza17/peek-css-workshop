import BaseController from './BaseController';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AnimationsController extends BaseController {
  @tracked sunAnimationEnabled = false;

  @action
  toggleSunAnimation() {
    this.sunAnimationEnabled = !this.sunAnimationEnabled;
  }
}
