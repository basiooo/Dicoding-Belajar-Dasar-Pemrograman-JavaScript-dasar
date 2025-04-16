import test from 'node:test';
import assert from 'node:assert';
import {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder
} from './orders.js';

test('Add new orders', () => {

  addOrder('Alice', [
    { name: 'Nasi Goreng', price: 20000 },
    { name: 'Sweet Tea', price: 5000 }
  ]);

  addOrder('Bob', [
    { name: 'Fried Noodles', price: 15000 },
    { name: 'Coffee', price: 10000 }
  ]);

  assert.equal(orders.length, 2);
  assert.equal(orders[0].customerName, 'Alice');
  assert.equal(orders[1].customerName, 'Bob');
  assert.equal(orders[0].totalPrice, 25000);
  assert.equal(orders[1].totalPrice, 25000);
  assert.equal(orders[0].status, 'Menunggu');
  assert.equal(orders[1].status, 'Menunggu');
});

test('Update order statuses', () => {
  updateOrderStatus(orders[0].id, 'Diproses');
  updateOrderStatus(orders[1].id, 'Selesai');

  assert.equal(orders[0].status, 'Diproses');
  assert.equal(orders[1].status, 'Selesai');
});

test('Calculate total revenue from completed orders', () => {
  const totalRevenue = calculateTotalRevenue();
  assert.equal(totalRevenue, 25000);
});

test('Delete an order', () => {
  const idToDelete = orders[0].id;
  deleteOrder(idToDelete);

  assert.equal(orders.length, 1);
  assert.equal(orders[0].customerName, 'Bob');
  assert.equal(orders[0].status, 'Selesai');
});
