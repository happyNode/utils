import assert from 'assert';

import * as utils from '../src/lib/string';

describe('string test', () => {
  it('toCamelCase test', () => {
    const res = utils.toCamelCase('hello_world');
    assert.equal(res, 'helloWorld');
  });

  it('toSnakeCase test', () => {
    const res = utils.toSnakeCase('helloWorld');
    assert.equal(res, 'hello_world');
  });

  it('getRandom test', () => {
    const res = utils.getRandom();
    assert.equal(res.length, 15);
  });
});
