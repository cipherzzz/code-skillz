class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// FIFO
class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    // look at first item in the queue
    peek(){
        return this.first.value
    }
    
    // put a new item in the queue
    enqueue(value) {
        
        if(!value) {
            console.log("invalid value:"+value)
            return false
        }
        const newItem = new Node(value)
        
        if(this.length == 0) {
            this.first = newItem
            this.last = newItem
        } else {
            this.last.next = newItem    // FIFO
            this.last = newItem
        }
        
        this.length++
        return true
    }
    
    // FIFO so drain from left to right
    dequeue() {
        if(!this.first) {
            console.log("Queue is empty")
            return false
        }
        
        if(this.length == 1) {
            this.last = null
        }
        
        this.first = this.first.next
        this.length--
        return true
    }

    isEmpty() {
        return !this.length || this.length <= 0?true:false
    }
}


const myQueue = new MyQueue()
console.log(myQueue.isEmpty())

myQueue.enqueue("Google")
myQueue.enqueue("YouTube")
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue.isEmpty())
myQueue.enqueue(undefined)
myQueue.dequeue()
console.log(myQueue)