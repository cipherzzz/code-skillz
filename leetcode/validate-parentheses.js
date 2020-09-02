// 20. Valid Parentheses
// Easy

// 5488

// 232

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Algo
// Create a stack datastructure to take advantage of a LIFO
// ex: "{([])}"
// iterate the string a char at a time
// create a stack with each opening bracket or parentheses
// ie. { would be pushed first and ( second
// if the current char is a } or a ) and the top item on the stack is not the corresponding opening char return false
// if we get all the way through the string return true

class Stack {
    constructor() {
        this.array = []
    }
    
    // look at the top of the stack
    peek(){
        return this.array[0]
    }
    
    // put a new item on the top of the stack
    push(value) {
        
        if(!value) {
            console.log("invalid value:"+value)
            return false
        }
        
        this.array.unshift(value)
        return true
    }
    
    // remove the top item from the stack
    pop() {
        if(this.array.length == 0) {
            console.log("Stack is empty")
            return false
        }
        
        this.array.shift()
    }

    isEmpty() {
        return this.array.length == 0
    }
}

let isValid = function(items) {
    let openingStack = new Stack()
    for(let i=0; i<items.length; i++) {
        let item = items[i]
        if(item == "{" || item == "(" || item == "[")
        {
            openingStack.push(item)
        } else if(!openingStack.isEmpty() && item == "}" && openingStack.peek() == "{") {
            openingStack.pop()
        } else if(!openingStack.isEmpty() && item == ")" && openingStack.peek() == "(") {
            openingStack.pop()
        } else if(!openingStack.isEmpty() && item == "]" && openingStack.peek() == "[") {
            openingStack.pop()
        } else {
            return false
        }
    }

    return openingStack.isEmpty()
}

console.log(isValid("{([)}"))

//console.log([].unshift("me"))

