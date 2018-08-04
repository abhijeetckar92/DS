"use strict";

var List = require('../Link-List/list');
class Queue{
    constructor(args){
        this.queue = new List(args);
        this.top = this.stack.length;
    }

    //insert(int) inserts a node in the end
    insert(int){
        this.stack.pushTail(int);
        this.top++;
    }

    //returns the first element from queue
    head(){

    }

    //popHead() removes the first node from queue
    popHead(){
            this.stack.popHead();
            this.top--;
    }

    //count() counts number of nodes in the stack
    count(){
        process.stdout.write(this.top.toString());
    }

} 