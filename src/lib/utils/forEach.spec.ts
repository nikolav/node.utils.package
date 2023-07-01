import test from 'ava';

import forEach from './forEach';

test('forEach', async (t) => {
  //
  const value = 1;
  const list = [value];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any;
  //
  forEach(list, (val) => {
    node = val;
  });
  t.is(node, value);
});
