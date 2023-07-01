import test from 'ava';

import has from './has';

test('has()', async (t) => {
  const a1 = { a1: 1 };
  t.is(has(a1, 'a1') && !has(a1, 'a2') && !has(null, 'a1'), true);
});
