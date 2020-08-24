
class MyStack {
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
        this.array.length == 0
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