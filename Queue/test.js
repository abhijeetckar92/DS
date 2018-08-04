var assert = require('assert');
var List = require('../Link-List/list');
var Queue = require('./queue');

//---------------------------------------  insert(int) --------------------------------------//

describe('Queue', () => {
    describe('.insert(int)', () => {
        it('1 . checks if the stack is empty', () => {
            let realQueue = new Queue();
            realQueue.insert(10);
            //console.log(realStack);
            let expectedQueue = new Queue([10]);
            //console.log(expectedStack);
            assert.equal(realQueue.queue.compare(expectedQueue), false);
        });
        it('2 . checks if node is added if the queue has one node', () => {
            let realQueue = new Queue([10]);
            realQueue.insert(20);
            //console.log(realStack);
            let expectedQueue = new Queue([10,20]);
            //console.log(expectedStack);
            assert.equal(realQueue.queue.compare(expectedQueue), false);
        });

        it('3 . checks if node is added if the queqe has more than one node', () => {
            let realQueue = new Queue([10,20]);
            realQueue.insert(30);
            //console.log(realStack);
            let expectedQueue = new Queue([10,20,30]);
            //console.log(expectedStack);
            assert.equal(realQueue.queue.compare(expectedQueue), false);
        });
    });
});

//---------------------------------------  popHead() --------------------------------------//

describe('Stack', () => {
    describe('.popHead()', () => {
        it('1 . checks if the queue is empty', () => {
            let realQueue = new Queue();
            realQueue.popHead();
            //console.log(realStack);
            let expectedQueue = new Queue();
            //console.log(expectedStack);
            assert.equal(realQueue.queue.compare(expectedQueue), false);
        });
        it('2 . removes a node from the queue if the queue has one node', () => {
            let realQueue = new Queue([10]);
            realQueue.popHead();
            //console.log(realStack);
            let expectedQueue = new Queue();
            //console.log(expectedStack);
            assert.equal(realQueue.queue.compare(expectedQueue), false);
        });

        it('3 . removes a node from the queue if the stack has more than one one node', () => {
            let realQueue= new Queue([10,20]);
            realQueue.popHead();
            //console.log(realStack);
            let expectedQueue = new Queue([20]);
            //console.log(expectedStack);
            assert.equal(realQueue.queue.compare(expectedQueue), false);
        });
    });
});