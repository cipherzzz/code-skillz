// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// Methods pop, top and getMin operations will always be called on non-empty stacks.

/**
 * initialize your data structure here.
 */
class MinStack {
    
    constructor() {
       this.stack = []
    }
    
    push(num) {
        
        if(this.stack.length == 0) {
            this.stack.push([num, num])
        } else {
             let min = this.stack[this.stack.length-1][1] // we keep the [value, min] in an array in the stack
             if(min > num) {
                 this.stack.push([num, num])
             } else {
                 this.stack.push([num, min])
             }
        }
    }
    
    pop() {
        return this.stack.pop()
    }
    
    top() {
        return this.stack[this.stack.length-1][0]
    }
    
    getMin() {
        return this.stack[this.stack.length-1][1]
    }
}


let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
minStack.top();    // return 0
console.log(minStack.getMin()); // return -2