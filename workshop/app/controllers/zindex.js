import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class ZindexController extends Controller {
  @tracked zIndexA = 0;
  @tracked zIndexB = 1;

  @action
  updateZIndex(indexToUpdate) {
    if (indexToUpdate === 'A') {
      this.zIndexA++;
    } else {
      this.zIndexB++;
    }
  }
}
