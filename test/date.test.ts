import assert from 'assert';

import * as utils from '../src/lib/date';

describe('date test', () => {
  it('getDateEndTime test', () => {
    const res = utils.getDateEndTime('2022-11-21');
    assert.equal(res, '2022-11-21 23:59:59');
  });

  it('getDateStartTime test', () => {
    const res = utils.getDateStartTime('2022-11-21');
    assert.equal(res, '2022-11-21 00:00:00');
  });

  it('diffDate test', () => {
    const res = utils.diffDate('2022-11-21', '2022-11-22');
    assert.equal(res, -1);
  });
});
