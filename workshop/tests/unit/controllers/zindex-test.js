import { module, test } from 'qunit';
import { setupTest } from 'workshop/tests/helpers';

module('Unit | Controller | zindex', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:zindex');
    assert.ok(controller);
  });
});
