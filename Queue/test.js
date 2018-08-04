var assert = require('assert');
var List = require('../Link-List/list');
var Queue = require('./queue');

//---------------------------------------  push(int) --------------------------------------//

describe('Queue', () => {
    describe('.insert(int)', () => {
        it('1 . checks if the stack is empty', () => {
            let realStack = new Stack();
            realStack.insert(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });
        it('2 . checks if node is added if the queue has one node', () => {
            let realStack = new Stack();
            realStack.insert(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });

        it('3 . checks if node is added if the quequ has more than one node', () => {
            let realStack = new Stack();
            realStack.push(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });
    });
});

//---------------------------------------  pop() --------------------------------------//

describe('Stack', () => {
    describe('.pop(int)', () => {
        it('1 . checks if the queue is empty', () => {
            let realStack = new Stack();
            realStack.pop(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });
        it('2 . removes a node from the queue if the queue has one node', () => {
            let realStack = new Stack();
            realStack.pop(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });

        it('3 . removes a node from the queue if the stack has more than one one node', () => {
            let realStack = new Stack();
            realStack.pop(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });
    });
});

//---------------------------------------  count() --------------------------------------//

describe('Stack', () => {
    describe('.count()', () => {
        it('1 . checks if the queue is empty', () => {
            let realStack = new Stack();
            realStack.count(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });
        it('2 . returns the number of nodes in a queue if the queue has one node', () => {
            let realStack = new Stack();
            realStack.count(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });

        it('3 . returns the number of queue in a stack if the queue has more than one node', () => {
            let realStack = new Stack();
            realStack.count(10);
            console.log(realStack);
            let expectedStack = new Stack([10]);
            console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), true);
        });
    });
});
