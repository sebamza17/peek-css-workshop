import BaseController from './BaseController';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PositionController extends BaseController {
  @tracked absoluteRangeValueTop = 'unset';
  @tracked absoluteRangeValueRight = 'unset';
  @tracked absoluteRangeValueLeft = 'unset';
  @tracked absoluteRangeValueBottom = 'unset';
  @tracked absoluteMode = 'px';

  @action
  resetValues() {
    this.absoluteRangeValueTop = 'unset';
    this.absoluteRangeValueRight = 'unset';
    this.absoluteRangeValueLeft = 'unset';
    this.absoluteRangeValueBottom = 'unset';
  }

  @action
  updateRangeValue(valueToUpdate, event) {
    const value = event.target.value;
    const mode = this.absoluteMode === 'px' ? 'px' : '%';

    if (valueToUpdate === 'top') {
      this.absoluteRangeValueTop = `${value}${mode}`;
    } else if (valueToUpdate === 'left') {
      this.absoluteRangeValueLeft = `${value}${mode}`;
    } else if (valueToUpdate === 'right') {
      this.absoluteRangeValueRight = `${value}${mode}`;
    } else if (valueToUpdate === 'bottom') {
      this.absoluteRangeValueBottom = `${value}${mode}`;
    }
  }

  @action
  updateAbsoluteMode(mode) {
    this.absoluteMode = mode;
  }
}
