var assert = require('assert');

var List = require('./list');



//---------------------------------------  compare() --------------------------------------//
describe('List', () => {
    describe('.compare', () => {

        //test 1
        it('1. compares two list if both the lists are empty', () => {
            let list1 = new List([]);
            let list2 = new List([])
            assert.equal(list1.compare(list2), true);
        });

        //test 2
        it('2. compares two list if one list has one element and the other is null', () => {
            let list1 = new List([]);
            let list2 = new List([10])
            assert.equal(list1.compare(list2), false);
        });

        //test 3
        it('3. compares two list if one list has one element and the other has different element', () => {
            let list1 = new List([10]);
            let list2 = new List([20]);
            assert.equal(list1.compare(list2), false);
        });

        //test 4
        it('4. compares two list if both lists has same element', () => {
            let list1 = new List([10]);
            let list2 = new List([10]);
            assert.equal(list1.compare(list2), true);
        });

        //test 5
        it('5. compares two list if both lists has different two element and are equal in length', () => {
            let list1 = new List([10, 20]);
            let list2 = new List([20, 30]);
            assert.equal(list1.compare(list2), false);
        });

        //test 6 
        it('6. compares two list if both lists has different element and are unequal in length', () => {
            let list1 = new List([10, 20]);
            let list2 = new List([20, 30, 40]);
            assert.equal(list1.compare(list2), false);
        });

        //test 7
        it('7. compares two list if both lists has different elements and are unequal in length', () => {
            let list1 = new List([10, 20, 30]);
            let list2 = new List([10, 30, 40]);
            assert.equal(list1.compare(list2), false);
        });
        //test 8
        it('8. compares two list if both lists has different elements and are unequal in length', () => {
            let list1 = new List([10, 20, 30]);
            let list2 = new List([10, 20, 40]);
            assert.equal(list1.compare(list2), false);
        });
    });

    //---------------------------------------  popHead() --------------------------------------//

    describe('List', () => {
        describe('.popHead', () => {

            //test 1
            it('1. checks if the list is empty', () => {
                let expectedResult = new List();
                let realList = new List();
                realList.popHead();
                assert.equal(realList.compare(expectedResult), true);
            });

            // test 2
            it('2. removes the first node from the list if the list has one node', () => {
                let expectedResult = new List([]);
                let realList = new List([10]);
                realList.popHead();
                assert.equal(realList.compare(expectedResult), true);
            });

            //test 3
            it('3. removes the first node from the list if the list has more than one node', () => {
                let expectedResult = new List([20, 30]);
                let realList = new List([10, 20, 30]);
                realList.popHead();
                assert.equal(realList.compare(expectedResult), true);
            });
        });
    });

    //---------------------------------------  popTail() --------------------------------------//

    describe('List', () => {
        describe('.popTail', () => {

            //test 1
            it('1 . checks if the list is empty', () => {
                let realList = new List();
                let expectedResult = new List();
                realList.popTail();
                assert.equal(realList.compare(expectedResult), true);
            });

            //test 2
            it('2 . removes the node from the list if the list has one node', () => {
                let expectedResult = new List([]);
                let realList = new List([10]);
                realList.popTail();
                assert.equal(realList.compare(expectedResult), true);
            });

            // test 3
            it('3 . removes the last element from the list containing more than one elements', () => {
                let expectedList = new List([10]);
                let realList = new List([10, 20]);
                realList.popTail();
                assert.equal(realList.compare(expectedList), true);
            });

            //test 4
            it('4 . removes the last element from the list containing more than one elements', () => {
                let expectedList = new List([10, 20]);
                let realList = new List([10, 20, 30]);
                realList.popTail();
                assert.equal(realList.compare(expectedList), true);
            });

            //test 5
            it('5 . removes the last element from the list containing more than one elements', () => {
                let expectedList = new List([10, 20, 30]);
                let realList = new List([10, 20, 30, 40]);
                realList.popTail();
                assert.equal(realList.compare(expectedList), true);
            });
        });
    });
});

//---------------------------------------  clone() --------------------------------------//


describe('List', () => {
    describe('.clone', () => {

        //test 1
        it('creates a duplicate list if the original list has no nodes', () => {
            let originalList = new List();
            let duplicateList = originalList.clone();
            assert.equal(originalList.compare(duplicateList),true);
        });

        //test 2
        it('creates a duplicate list if the original list has one node', () => {
            let originalList = new List([10]);
            let duplicateList = originalList.clone();
            assert.equal(originalList.compare(duplicateList),true);
        });

        //test 3
        it('creates a duplicate list if the original list has more than one node', () => {
            let originalList = new List([10,20]);
            let duplicateList = originalList.clone();
            assert.equal(originalList.compare(duplicateList),true);
        });
    });
});

//---------------------------------------  removeValue() --------------------------------------//


describe('List', () => {
    describe('.removeValue(int)', () => {

        //test 1
        it('1 . checks if the list is created for values to be removed', () => {
            let originalList = new List();
            let expectedList = new List();
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });
        
        //test 2
        it('2 . removes the value from the first node of the list', () => {
            let originalList = new List([10]);
            let expectedList = new List();
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });

        //test 3
        it('3 . removes the value from the first node of the list if the list has two nodes', () => {
            let originalList = new List([10,20]);
            let expectedList = new List([20]);
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });

        //test 4
        it('4 . removes the value from the last node of the list if the list has two nodes', () => {
            let originalList = new List([20,10]);
            let expectedList = new List([20]);
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });

        //test 5
        it('5 . removes the all the values equal to the argument passed from the list', () => {
            let originalList = new List([10,20,10]);
            let expectedList = new List([20]);
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });

        //test 6
        it('6 . removes the all the values equal to the argument passed from the list', () => {
            let originalList = new List([20,10,10]);
            let expectedList = new List([20]);
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });

        //test 7
        it('7 . removes the all the values equal to the argument passed from the list', () => {
            let originalList = new List([10,10,20]);
            let expectedList = new List([20]);
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });


        //test 8
        it('8 . removes the node from the middle of the list', () => {
            let originalList = new List([20,10,20]);
            let expectedList = new List([20,20]);
            originalList.removeValue(10);
            assert.equal(originalList.compare(expectedList),true);
        });

        // //test 9
        // it('9 . removes all the nodes the list', () => {
        //     let originalList = new List([20,20,20]);
        //     let expectedList = new List();
        //     originalList.removeValue(20);
        //     assert.equal(originalList.compare(expectedList),true);
        // });

        it('10 . removes all the nodes the list', () => {
            let originalList = new List([10,20,20]);
            let expectedList = new List([10]);
            originalList.removeValue(20);
            assert.equal(originalList.compare(expectedList),true);
        });
        
        it('11 . removes all the nodes the list', () => {
            let originalList = new List([20,20,10]);
            let expectedList = new List([10]);
            originalList.removeValue(20);
            assert.equal(originalList.compare(expectedList),true);
        });
    });
});

//---------------------------------------  hasDuplicate() --------------------------------------//

describe('List',()=>{
    describe('hasDuplicate',()=>{

        //test 1
        it('1 . checks if the list is empty',()=>{
            var realList = new List();
            var bool = realList.hasDuplicate();
            assert.equal(bool==false,true);
        });

        //test 2
        it('2 . checks if the list has only one node',()=>{
            var realList = new List([10]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==false,true);
        });

        // test 3
        it('3 . checks if the list has duplicate nodes',()=>{
            var realList = new List([10,20]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==false,true);
        });

        // test 4
        it('4 . checks if the list has duplicate nodes',()=>{
            var realList = new List([10,20,30]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==false,true);
        });

        // test 5
        it('5 . checks if the list has duplicate nodes',()=>{
            var realList = new List([10,10]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==true,true);
        });

        // test 6
        it('6 . checks if the list has duplicate nodes',()=>{
            var realList = new List([10,20,10]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==true,true);
        });

        // test 7
        it('7 . checks if the list has duplicate nodes',()=>{
            var realList = new List([20,10,10]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==true,true);
        });

        // test 8
        it('8 . checks if the list has duplicate nodes',()=>{
            var realList = new List([10,20,10,30]);
            var bool = realList.hasDuplicate();
            assert.equal(bool==true,true);
        });
    });
});

//---------------------------------------  removeDuplicate() --------------------------------------//

describe('List',()=>{
    describe('removeDuplicate()',()=>{

        //test 1
        it('1 . checks if the list is empty',()=>{
            var realList = new List();
            var expectedList = new List();
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        //test 2
        it('2 . checks if the list has one Node',()=>{
            var realList = new List([10]);
            var expectedList = new List([10]);
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        //test 3
        it('3 . checks if the list has duplicates two Nodes and removes duplicates',()=>{
            var realList = new List([10,20]);
            var expectedList = new List([10,20]);
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        //test 4
        it('4 . checks if the list has duplicates two Nodes and removes duplicates',()=>{
            var realList = new List([10,10]);
            var expectedList = new List([]);
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        //test 5
        it('5 . checks if the list has duplicates Node and removes duplicates when the list has three or more nodes',()=>{
            var realList = new List([10,20,20]);
            var expectedList = new List([10]);
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        //test 6
        it('6 . checks if the list has duplicates Node and removes duplicates when the list has three or more nodes',()=>{
            var realList = new List([10,10,20]);
            var expectedList = new List([20]);
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        //test 7
        it('7 . checks if the list has duplicates Node and removes duplicates when the list has three or more nodes',()=>{
            var realList = new List([10,20,10]);
            var expectedList = new List([20]);
            realList.removeDuplicate();
            assert.equal(realList.compare(expectedList),true); 
        });

        // //test 8
        // it('8 . checks if the list has duplicates Node and removes duplicates when the list has three or more nodes',()=>{
        //     var realList = new List([10,10,10]);
        //     var expectedList = new List([10]);
        //     realList.removeDuplicate();
        //     assert.equal(realList.compare(expectedList),true); 
        // });
    });
});
