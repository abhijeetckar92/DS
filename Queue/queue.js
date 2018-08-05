"use strict";

var List = require('../Link-List/list');

//module.exports = 
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
        if(this.queue.head == null){
            return this.queue.head;
        }return this.queue.head.data;
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

    //print() outputs all the elements in a queue
    print() {
        if (this.queue.tail == null) {
            process.stdout.write('[]\n');
        }
        else {
            let iterator = this.queue.head;
            for (let i = 0; i < this.top; i++) {
                for (let j = 0+i; j < this.top - i; j++) {
                    if (iterator.next != null) {
                        iterator = iterator.next;
                    }
                }
                process.stdout.write('['+iterator.data.toString()+']');
                iterator = this.queue.head;
            }
        }
    }

} 

// var q = new Queue([]);

// var n = q.head();
// q.popHead();
// var m = q.head();

// console.log(m);
// q.print();