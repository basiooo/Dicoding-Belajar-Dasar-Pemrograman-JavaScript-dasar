import assert from 'node:assert';
import test from 'node:test';
import factorial from './factorial.js';
import fibonacci from './fibonacci.js';

test('factorial test', () => {
  const numberForFactorial = 5;
  assert.strictEqual(`Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`, 'Faktorial dari 5 adalah 120')
});

test('fibonacci test', () => {
  const numberForFibonacci = 10;
  const expected_result = [
    [0],
    [0, 1],
    [0, 1, 1],
    [0, 1, 1, 2],
    [0, 1, 1, 2, 3],
    [0, 1, 1, 2, 3, 5],
    [0, 1, 1, 2, 3, 5, 8],
    [0, 1, 1, 2, 3, 5, 8, 13],
    [0, 1, 1, 2, 3, 5, 8, 13, 21],
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  ];
  
  for (let i = 0; i <= numberForFibonacci; i++) {
    console.log(fibonacci(i), expected_result[i])
    assert.deepStrictEqual(fibonacci(i), expected_result[i])
  }
});
