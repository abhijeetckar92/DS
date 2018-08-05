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
        temp.next = null;
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
            else {
                let temp = this.head;
                if (temp.next == this.tail) {
                    this.head.next = null;
                    this.tail = temp;
                    this.length--;
                } else {
                    while (temp.next != this.tail) {
                        temp = temp.next;
                    }
                    this.tail = temp;
                    this.tail.next = null;
                    this.length--;
                }
            }
        }
    }

    //creates a new List entirely
    clone() {
        var dupList = new List();
        var iterator = this.head;
        if (this.head == null) {
            return dupList;
        }
        for (let i = 0; i < this.length; i++) {
            dupList.pushTail(iterator.data);
            iterator = iterator.next;
        }
        return dupList;
    }

    //removeValue() removes the node with the argument passed to the function
    removeValue(int) {
        let iterator = this.head;
        if (this.head == null) {
            return;
        }
        for (let i = 0; i <= this.length; i++) {
            if (iterator.data == int) {
                if (this.head == this.tail) {
                    this.head = null;
                    this.tail = null;
                    this.length--;
                }
                else {
                    if (this.head.data == int) {
                        this.head = this.head.next;
                        iterator.next = null;
                        iterator = this.head;
                        this.length--;
                    }
                    else if (this.tail.data == int) {
                        this.popTail();
                    }
                    else {
                        var iterator2 = this.head;
                        while (iterator2.next != iterator) {
                            iterator2 = iterator2.next;
                        }
                        iterator2.next = iterator.next;
                        iterator.next = null;
                        iterator = iterator2.next;
                        this.length--;
                    }
                }
            }
            else {
                iterator = iterator.next;
            }
        }
    }

    // checks if the list has duplicate nodes
    hasDuplicate() {
        if (this.head == null || this.head == this.tail) {
            return false;
        }
        var head = this.head;
        var iterator = this.head.next
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - 1; j++) {
                if (head.data == iterator.data) {
                    return true;
                }
                else {
                    if (iterator.next != null) {
                        iterator = iterator.next;
                    }
                }
            }
            head = head.next;
            iterator = head.next;
        }
        return false;
    }

    //removes all the duplicate nodes from this list
    removeDuplicate() {
        let bool = this.hasDuplicate();
        if (this.head == null || this.head == this.tail) {
            return;
        }
        if (bool != true) {
            return this;
        }
        let head = this.head;
        let iterator = head.next;
        for (let i = 0; i < this.length; i++) {
            if (head.data == iterator.data) {
                this.removeValue(head.data)
            }
            else {
                head = head.next;
                if (head.next != null) {
                    iterator = head.next;
                }
            }
        }
        return this;
    }
}



