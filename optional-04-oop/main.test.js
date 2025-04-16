import assert from 'node:assert';
import test from 'node:test';
import Item from './Item.js';
import Inventory from './Inventory.js';

test('Initial Inventory: should add items correctly', () => {
  const inventory = new Inventory();

  const item1 = new Item(1, 'Laptop', 10, 1000);
  const item2 = new Item(2, 'Mouse', 50, 20);

  inventory.addItem(item1);
  inventory.addItem(item2);

  const listedItems = inventory.listItems();

  assert(listedItems.includes('ID: 1, Name: Laptop, Quantity: 10, Price: 1000'));
  assert(listedItems.includes('ID: 2, Name: Mouse, Quantity: 50, Price: 20'));
});

test('Inventory after update: should reflect updated item details', () => {
  const inventory = new Inventory();

  const item1 = new Item(1, 'Laptop', 10, 1000);
  const item2 = new Item(2, 'Mouse', 50, 20);

  inventory.addItem(item1);
  inventory.addItem(item2);

  item1.updateDetails('Laptop', 8, 950);

  const listedItems = inventory.listItems();

  assert(listedItems.includes('ID: 1, Name: Laptop, Quantity: 8, Price: 950'));
  assert(listedItems.includes('ID: 2, Name: Mouse, Quantity: 50, Price: 20'));
});

test('Inventory after removal: should remove item correctly', () => {
  const inventory = new Inventory();

  const item1 = new Item(1, 'Laptop', 10, 950);
  const item2 = new Item(2, 'Mouse', 50, 20);

  inventory.addItem(item1);
  inventory.addItem(item2);

  inventory.removeItem(2);

  const listedItems = inventory.listItems();

  assert(!listedItems.includes('ID: 2, Name: Mouse, Quantity: 50, Price: 20'));
  assert(listedItems.includes('ID: 1, Name: Laptop, Quantity: 10, Price: 950'));
});
