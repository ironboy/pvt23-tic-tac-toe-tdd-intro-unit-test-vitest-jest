import { test, expect } from 'vitest';
import Board from '../classes/Board.js';

test('When you create a Board the property matrix should be set', () => {
    let aBoard = new Board();
    // You can solve many things with toBe and use not to negate tests
    // expect(aBoard.matrix).not.toBe(undefined);
    // But if possible try to find a expect method that states what you
    // want to test more clearly:
    expect(aBoard.matrix).toBeDefined();
});

test('The matrix property should be a two-dimensional with the length 3 x 3', () => {
    let aBoard = new Board();
    // check that the outer/main array is an array
    expect(aBoard.matrix).toBeInstanceOf(Array);
    // check that the outer/main array has the length 3
    expect(aBoard.matrix).toHaveLength(3);
    // loop through each row/inner array/sub array 
    // and check that the row is an array and has the length
    for (let row of aBoard.matrix) {
        // check that the row is an array
        expect(row).toBeInstanceOf(Array);
        // check that the row has the length 3
        expect(row).toHaveLength(3);
    }
});

test('The matrix property should only contain spaces as values', () => {
    let aBoard = new Board();
    // check that we have the correct data structure and data for the matrix
    expect(aBoard.matrix).toEqual([
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]);
});