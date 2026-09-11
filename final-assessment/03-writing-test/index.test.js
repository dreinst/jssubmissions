import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(10, 20), 30);
  });

  it('should return the sum when one of the numbers is negative', () => {
    assert.strictEqual(sum(-1, 5), 4);
    assert.strictEqual(sum(5, -10), -5);
  });

  it('should return the number itself when added with zero', () => {
    assert.strictEqual(sum(0, 7), 7);
    assert.strictEqual(sum(7, 0), 7);
  });

  it('should return the sum of two decimal numbers', () => {
    assert.strictEqual(sum(1.5, 2.5), 4);
  });
});
