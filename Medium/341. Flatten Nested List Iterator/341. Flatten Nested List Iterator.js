/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *     // Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     this.isInteger = function() {
 *         // ...
 *     };
 *
 *     // Return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     this.getInteger = function() {
 *         // ...
 *     };
 *
 *     // Return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     this.getList = function() {
 *         // ...
 *     };
 * }
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];
    this.flatten(nestedList);
};

NestedIterator.prototype.flatten = function (nestedList) {
    for (let i = nestedList.length - 1; i >= 0; i--) {
        this.stack.push(nestedList[i]);
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    while (this.stack.length > 0) {
        const top = this.stack[this.stack.length - 1];
        if (top.isInteger()) {
            return true;
        }
        this.stack.pop();
        const nestedList = top.getList();
        this.flatten(nestedList);
    }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    const top = this.stack.pop();
    return top.getInteger();
};
