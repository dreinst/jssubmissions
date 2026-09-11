import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(10, 20), 30);
  });

  it('should return the sum when one of the numbers is zero', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
    assert.strictEqual(sum(0, 0), 0);
  });

  it('should return 0 when the first argument is not a number', () => {
    assert.strictEqual(sum('1', 2), 0);
    assert.strictEqual(sum(null, 2), 0);
    assert.strictEqual(sum(undefined, 2), 0);
    assert.strictEqual(sum(true, 2), 0);
    assert.strictEqual(sum({}, 2), 0);
    assert.strictEqual(sum([], 2), 0);
  });

  it('should return 0 when the second argument is not a number', () => {
    assert.strictEqual(sum(1, '2'), 0);
    assert.strictEqual(sum(1, null), 0);
    assert.strictEqual(sum(1, undefined), 0);
    assert.strictEqual(sum(1, true), 0);
    assert.strictEqual(sum(1, {}), 0);
    assert.strictEqual(sum(1, []), 0);
  });

  it('should return 0 when both arguments are not numbers', () => {
    assert.strictEqual(sum('1', '2'), 0);
    assert.strictEqual(sum(), 0);
  });

  it('should return 0 when the first argument is negative', () => {
    assert.strictEqual(sum(-1, 2), 0);
  });

  it('should return 0 when the second argument is negative', () => {
    assert.strictEqual(sum(1, -2), 0);
  });

  it('should return 0 when both arguments are negative', () => {
    assert.strictEqual(sum(-1, -2), 0);
  });
});
