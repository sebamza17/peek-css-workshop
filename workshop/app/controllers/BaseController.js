import Controller from '@ember/controller';

export default class BaseController extends Controller {
  get sliderConfig() {
    return {
      type: 'closed',
      range: {
        min: 0,
        max: 100,
      },
    };
  }
}
