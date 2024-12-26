import BaseController from './BaseController';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DisplayController extends BaseController {
  @tracked flexDirection = 'row';
  @tracked justifyContent = 'flex-start';
  @tracked alignItems = 'flex-start';

  @tracked flexItemFlexGrow = 0;
  @tracked flexItemAlignSelf = 'flex-start';

  @action
  updateFlexDirection(e) {
    this.flexDirection = e.target.value;
  }

  @action
  updateJustifyContent(e) {
    this.justifyContent = e.target.value;
  }

  @action
  updateAlignItems(e) {
    this.alignItems = e.target.value;
  }

  @action
  updateFlexItemFlexGrow(e) {
    this.flexItemFlexGrow = e.target.value;
  }

  @action
  updateFlexItemAlignSelf (e) {
    this.flexItemAlignSelf = e.target.value;
  }
}
