import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chefs/chef', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chefs/chef');
    assert.ok(route);
  });
});
