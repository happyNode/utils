import assert from 'assert';

import * as utils from '../src/lib/number';

describe('number test', () => {
  it('bigAdd test', () => {
    const res = utils.bigAdd(0.1, 0.2);
    assert.equal(res.toNumber(), 0.3);
  });

  it('bigDiv test', () => {
    const res = utils.bigDiv(4, 2);
    assert.equal(res.toNumber(), 2);
  });

  it('bigMul test', () => {
    const res = utils.bigMul(1, 2);
    assert.equal(res.toNumber(), 2);
  });

  it('bigSub test', () => {
    const res = utils.bigSub(0.3, 0.2);
    assert.equal(res.toNumber(), 0.1);
  });

  it('bigEq test', () => {
    const res = utils.bigEq(1, 1);
    assert(res);
  });
});
