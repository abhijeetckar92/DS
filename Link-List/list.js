"use strict";

var Node = require('./node');


// module.exports =
module.exports = class List {
    constructor(args = 0) {
        this.head = null;
        this.tail = null;
        this.length = 0;
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

    popTail() {
        // checks if the list has no nodes
        if (this.head == null) {
            process.stdout.write('[]\n');
            return;
        }
        //removes a node if the list has one node
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }
        //removes the tail node if the list has two or more nodes
        let temp = this.head;
        while (temp.next != this.tail) {
            temp = temp.next;
        }
        this.tail = temp;
        this.tail.next = null;
        this.length--;
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

    remove(node) {
        //if no nodes are present
        if (this.head == null) {
            return;
        }
        let iterator2 = this.head;
        let temp = null;
        while (iterator2.data != node.data) {
            temp = iterator2;
            iterator2 = iterator2.next;
        }
        if (iterator2 == this.head) {
            this.head = this.head.next;
            iterator2.next = null;
            iterator2 = this.head;
            this.length--;
            return;
        }
        temp.next = iterator2.next;
        iterator2.next = null;
        this.length--;
        return;
    }

    //removeValue() removes the node with the argument passed to the function
    // removeValue(int) {
    //     let iterator = this.head;
    //     if (this.head == null) {
    //         return;
    //     }
    //     for (let i = 0; i <= this.length; i++) {
    //         if (iterator.data == int) {
    //             if (this.head == this.tail) {
    //                 this.head = null;
    //                 this.tail = null;
    //                 this.length--;
    //             }
    //             else {
    //                 if (this.head.data == int) {
    //                     this.head = this.head.next;
    //                     iterator.next = null;
    //                     iterator = this.head;
    //                     this.length--;
    //                 }
    //                 else if (this.tail.data == int) {
    //                     this.popTail();
    //                 }
    //                 else {
    //                     var iterator2 = this.head;
    //                     while (iterator2.next != iterator) {
    //                         iterator2 = iterator2.next;
    //                     }
    //                     iterator2.next = iterator.next;
    //                     iterator.next = null;
    //                     iterator = iterator2.next;
    //                     this.length--;
    //                 }
    //             }
    //         }
    //         else {
    //             iterator = iterator.next;
    //         }
    //     }
    // }

    removeValue(data) {
        if (this.head == null) {
            return;
        }
        else if (this.head.next == null && this.head.data == data) {
            this.head.next = null;
            this.tail.next = null;
            this.length--;
            return;
        }
        var iterator = this.head;
        var node = this.createNode(data);

        while (iterator.next != null) {
            while (iterator.data != data) {
                iterator = iterator.next;
            }
            if (iterator.data == data) {
                let temp = iterator;
                iterator = iterator.next;
                this.remove(node);
                temp = null;
            }
        }
        // while (iterator.next != null && iterator.data == data) {
        //     if (iterator.data == data) {
        //         var temp = iterator;
        //         iterator = iterator.next;
        //         console.log('before remove');
        //         this.remove(temp.data);
        //         console.log('after remove');
        //         temp = null;
        //     }
        //     else {
        //         iterator = iterator.next;
        //     }
        // }
    }

    createNode(data) {
        var newNode = new Node(data);
        return newNode;
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



