import getRandomInt from 'devsnap/utils/get-random-int';
import { module, test } from 'qunit';

module('Unit | Utility | get random int');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = getRandomInt(10, 15);
  assert.equal((result >= 10 && result <= 15), true);
  result = getRandomInt(50, 51);
  assert.equal((result >= 50 && result <= 51), true);
});
