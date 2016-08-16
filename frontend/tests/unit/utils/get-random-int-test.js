import getRandomInt from 'devsnap/utils/get-random-int';
import { module, test } from 'qunit';

module('Unit | Utility | get random int');

test('it works', function(assert) {
  assert.equal(getRandomInt(10, 15, () => { return 0; }), 10);
  assert.equal(getRandomInt(10, 15, () => { return 0.999; }), 15);
  assert.equal(getRandomInt(10, 14, () => { return 0.5; }), 12);
});
