"use strict";

var List = require('../Link-List/list');


//module.exports =

module.exports = class Stack {
    constructor(args) {
        this.stack = new List(args);
        this.top = this.stack.length;
    }

    //creates a list or add nodes to a list
    push(int) {
        let sNode = this.stack;
        sNode.pushTail(int);
        this.top++;
    }

    peakTop() {
        if (this.stack.tail == null) {
            return null;
        }
        return this.stack.tail.data;
    }

    // pop() returns integer ie the number removed from the stack
    pop() {
        this.stack.popTail();
        this.top--;
    }

    //counts number of element in the stack
    count() {
        return this.top;
        //process.stdout.write(this.top.toString());
    }

    //print() prints all the elements in a stack
    print() {
        if (this.stack.tail == null) {
            process.stdout.write('[]\n');
        }
        else {
            let iterator = this.stack.head;
            for (let i = 0; i < this.top; i++) {
                for (let j = 0 + i; j < this.top - i; j++) {
                    if (iterator.next != null) {
                        iterator = iterator.next;
                    }
                }
                process.stdout.write('[' + iterator.data.toString() + ']\n');
                iterator = this.stack.head;
            }
        }
    }
}