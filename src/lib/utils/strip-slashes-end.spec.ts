import test from 'ava';

import stripSlashesEnd from './strip-slashes-end';

test('stripSlashesEnd()', async (t) => {
  const a = 'http://a';
  // const b = 'http://b';
  const aSlash = 'http://a/';
  const aSlash2 = 'http://a//';

  t.is(stripSlashesEnd(a), a);
  t.is(stripSlashesEnd(aSlash), a);
  t.is(stripSlashesEnd(aSlash2), a);
});
