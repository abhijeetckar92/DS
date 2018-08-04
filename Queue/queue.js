"use strict";

var List = require('../Link-List/list');


module.exports = class Queue{
    constructor(args){
        this.queue = new List(args);
        this.top = this.queue.length;
    }

    //insert(int) inserts a node in the end
    insert(int){
        this.queue.pushTail(int);
        this.top++;
    }

    //returns the first element from queue
    head(){

    }

    //popHead() removes the first node from queue
    popHead(){
            this.queue.popHead();
            this.top--;
    }

    //count() counts number of nodes in the stack
    count(){
        process.stdout.write(this.top.toString());
    }

} 