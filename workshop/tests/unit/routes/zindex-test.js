import { module, test } from 'qunit';
import { setupTest } from 'workshop/tests/helpers';

module('Unit | Route | zindex', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:zindex');
    assert.ok(route);
  });
});
