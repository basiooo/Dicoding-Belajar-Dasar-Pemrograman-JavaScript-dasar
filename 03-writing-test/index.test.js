import assert from 'node:assert';
import test from 'node:test';
import { sum } from './index.js';

test('should return the correct sum of two positive numbers', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('should return the correct sum of two negative numbers', () => {
  assert.strictEqual(sum(-1, -2), -3);
});

test('should return the correct sum when one number is negative', () => {
  assert.strictEqual(sum(1, -2), -1);
});

test('should return the correct sum when both numbers are zero', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('should return the correct sum when one number is zero', () => {
  assert.strictEqual(sum(0, 2), 2);
});

test('should return NaN when passing non-numeric values', () => {
  assert.ok(isNaN(sum('a', 2)));
  assert.ok(isNaN(sum(2, 'b')));
});

// Skenario tambahan
test('should return the correct sum of two decimal numbers', () => {
  assert.strictEqual(sum(1.5, 2.3), 3.8);
});

test('should return 2 when one of the numbers is null', () => {
  //null is considered 0
  assert.strictEqual(sum(null, 2), 2);
  assert.strictEqual(sum(2, null), 2);
});

test('should return NaN when one of the numbers is undefined', () => {
  assert.ok(isNaN(sum(undefined, 2)));
  assert.ok(isNaN(sum(2, undefined)));
});

test('should return the correct sum of very large numbers', () => {
  assert.strictEqual(sum(1e+12, 1e+12), 2e+12);
});

test('should return the correct sum of very small numbers', () => {
  assert.strictEqual(sum(1e-12, 1e-12), 2e-12);
});

test('should return NaN when both numbers are NaN', () => {
  assert.ok(isNaN(sum(NaN, NaN)));
});
