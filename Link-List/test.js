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
                var expectedList = new List([10]);
                var realList = new List([10, 20]);
                realList.popTail();
                assert.equal(realList.compare(expectedList), true);
            });
            it('3 . removes the last element from the list containing more than one elements', () => {
                var expectedList = new List([10, 20]);
                var realList = new List([10, 20, 30]);
                realList.popTail();
                assert.equal(realList.compare(expectedList), true);
            });
            it('3 . removes the last element from the list containing more than one elements', () => {
                var expectedList = new List([10, 20, 30]);
                var realList = new List([10, 20, 30, 40]);
                realList.popTail();
                assert.equal(realList.compare(expectedList), true);
            });
        });
    });
});

//---------------------------------------  clone() --------------------------------------//


describe('List', () => {
    describe('.clone', () => {
        it('creates a duplicate list if the original list has no nodes', () => {
            var originalList = new List();
            var duplicateList = originalList.clone();
            assert.equal(originalList.compare(duplicateList),true);
        });
        it('creates a duplicate list if the original list has one node', () => {
            var originalList = new List([10]);
            var duplicateList = originalList.clone();
            assert.equal(originalList.compare(duplicateList),true);
        });
        it('creates a duplicate list if the original list has more than one node', () => {
            var originalList = new List([10,20]);
            var duplicateList = originalList.clone();
            assert.equal(originalList.compare(duplicateList),true);
        });
    });
});