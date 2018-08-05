"use strict";

var Node = require('./node');


// module.exports =
module.exports = class List {
    constructor(args = 0) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        //this.length = args.length;

        //takes various arguments while creating list object and calls pushTail()  
        for (let i = 0; i < args.length; i++) {
            this.pushTail(args[i]);
        }
    }

    //pushTail() creates a node 
    pushTail(data = null) {
        if (this.head == null) {
            this.head = new Node(data);
            this.tail = this.head;
            //add return if no else block
        }
        else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
        this.length++;
    }

    //prints the data from the list
    print() {
        let iterator = this.head;
        process.stdout.write('[');
        for (let i = 0; i < this.length; i++) {
            if (iterator.next == null) {
                process.stdout.write(iterator.data.toString());
            } else {
                process.stdout.write(iterator.data.toString() + ',');
                iterator = iterator.next;
            }
        }
        process.stdout.write(']\n');
    }

    //checks if two lists have equal elements in them
    compare(list) {
        let head = this.head;
        let listH = list.head
        if (this.length != list.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {
            if (head.data != listH.data) {
                return false;
            }
            head = head.next
            listH = listH.next;
        }
        return true;
    }

    //removes the first node from the list
    popHead() {
        if (this.head == null) {
            process.stdout.write('[]\n');
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp = null;
        this.length--;
        return;
    }

    //removes the last element from the list
    popTail() {
        if (this.head == null) {
            process.stdout.write('[]\n');
            return;
        }
        else {
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
                this.length--;
            }
            else{
                let temp = this.head;
                if(temp.next == this.tail){
                    this.head.next = null;
                    this.tail = temp;
                    this.length--;
                }else{
                    while(temp.next != this.tail){
                        temp = temp.next;
                    }
                    this.tail = temp;
                    this.tail.next = null;
                    this.length--;
                }
            }
        }
    }
}