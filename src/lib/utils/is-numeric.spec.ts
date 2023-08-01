import test from 'ava';

import isNumeric from './is-numeric';

test('isNumeric()', async (t) => {
  t.is(isNumeric(1), true);
  t.is(isNumeric('1'), true);
  t.is(isNumeric('1px'), false);
  t.is(isNumeric(null), false);
  t.is(isNumeric({}), false);
});
