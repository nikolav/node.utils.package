import test from 'ava';

import idGen from './id-gen';

test('idGen()', async (t) => {
  t.is(idGen() != idGen(), true);
});
