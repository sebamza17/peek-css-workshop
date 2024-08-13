import { module, test } from 'qunit';
import { setupTest } from 'workshop/tests/helpers';

module('Unit | Route | position', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:position');
    assert.ok(route);
  });
});
