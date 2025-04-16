import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('adds two positive numbers', () => {
  assert.strictEqual(sum(3, 4), 7);
});

test('returns 0 if first input is not a number', () => {
  assert.strictEqual(sum('3', 4), 0);
});

test('returns 0 if second input is not a number', () => {
  assert.strictEqual(sum(3, '4'), 0);
});

test('returns 0 if both inputs are not numbers', () => {
  assert.strictEqual(sum('3', '4'), 0);
});

test('returns 0 if first number is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
});

test('returns 0 if second number is negative', () => {
  assert.strictEqual(sum(5, -1), 0);
});

test('returns 0 if both numbers are negative', () => {
  assert.strictEqual(sum(-3, -4), 0);
});
