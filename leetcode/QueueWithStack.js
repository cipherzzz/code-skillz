/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.pushStack = []
    this.popStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   if(this.popStack.length == 0) {
       while(this.pushStack.length > 0) {
           this.popStack.push(this.pushStack.pop())
       }
   }
   return this.popStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.popStack.length == 0) {
        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack[this.popStack.length -1] // there is no `peek` in an array
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.pushStack  == 0 && this.popStack == 0
};


const myQueue = new MyQueue()
myQueue.push(1)
myQueue.push(3)
myQueue.push(5)
console.log(myQueue)
console.log(myQueue.pop())
console.log(myQueue)
myQueue.push(7)
myQueue.push(9)
console.log(myQueue)
console.log(myQueue.pop())
console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue.empty())