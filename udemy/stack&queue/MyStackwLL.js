class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    // look at the top of the stack
    peek(){
        return this.top.value
    }
    
    // put a new item on the top of the stack
    push(value) {
        
        if(!value) {
            console.log("invalid value:"+value)
            return false
        }
        const newTop = new Node(value)
        
        if(this.length == 0) {
            this.top = newTop
            this.bottom = newTop
        } else {
            const oldTop = this.top
            newTop.next = oldTop
            this.top = newTop
        }
        
        this.length++
        return true
    }
    
    // remove the top item from the stack
    pop() {
        const oldTop = this.top
        if(!oldTop) {
            console.log("Stack is empty")
            return false
        }
        
        const newTop = oldTop.next
        this.top = newTop
        
        if(this.length == 1) {
            this.bottom = null
        }
        
        this.length--
    }

    isEmpty() {
        return !this.length || this.length <= 0?true:false
    }
}


const myStack = new MyStack()
console.log(myStack.isEmpty())

myStack.push("Google")
myStack.push("YouTube")
console.log(myStack)
myStack.pop()
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.isEmpty())
myStack.push(undefined)
myStack.pop()
console.log(myStack)