import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | restaurants/restaurant/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:restaurants/restaurant/edit');
    assert.ok(route);
  });
});
