import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | dad-joke', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:dad-joke');
    assert.ok(service);
  });
});
