var assert = require('assert');
var List = require('../Link-List/list');
var Stack = require('./stack');

//---------------------------------------  push(int) --------------------------------------//

describe('Stack', () => {
    describe('.push(int)', () => {
        it('1 . checks if the stack is empty', () => {
            let realStack = new Stack();
            realStack.push(10);
            //console.log(realStack);
            let expectedStack = new Stack([10]);
            //console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), false);
        });
        it('2 . checks if node is added if the stack has one node', () => {
            let realStack = new Stack([10]);
            realStack.push(20);
            //console.log(realStack);
            let expectedStack = new Stack([10,20]);
            //console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), false);
        });

        it('3 . checks if node is added if the stack has more than one node', () => {
            let realStack = new Stack([10,20,30]);
            realStack.push(40);
            //console.log(realStack);
            let expectedStack = new Stack([10,20,30,40]);
            //console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), false);
        });
    });
});

//---------------------------------------  pop() --------------------------------------//

describe('Stack', () => {
    describe('.pop()', () => {
        it('1 . checks if the stack is empty', () => {
            let realStack = new Stack();
            realStack.pop();
            //console.log(realStack);
            let expectedStack = new Stack();
            //console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), false);
        });
        it('2 . removes a node from the stack if the stack has one node', () => {
            let realStack = new Stack([10]);
            realStack.pop();
            //console.log(realStack);
            let expectedStack = new Stack();
            //console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), false);
        });

        it('3 . removes a node from the stack if the stack has more than one one node', () => {
            let realStack = new Stack([10,20,30]);
            realStack.pop();
            //console.log(realStack);
            let expectedStack = new Stack([10,20]);
            //console.log(expectedStack);
            assert.equal(realStack.stack.compare(expectedStack), false);
        });
    });
});