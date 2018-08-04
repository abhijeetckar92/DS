"use strict";

var List = require('../Link-List/list');


//module.exports = 
class Stack{
    constructor(args){
        this.stack = new List(args);
        this.top = this.stack.length;
    }

    //creates a list or add nodes to a list
    push(int){
        this.stack.pushTail(int);
        this.top++;
    }

    // pop() returns integer ie the number removed from the stack
    pop(){
        this.stack.popTail();
        this.top--;
    }

    //counts number of element in the stack
    count(){
        process.stdout.write(this.top.toString());
    }

    //print() prints all the elements in a stack
    print(){
        this.stack.print();
    }
}

// var s = new Stack();
// s.count();
// // s.push(10);
// // s.push(20);
// // console.log(s);