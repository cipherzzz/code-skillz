// Create a linkedlist data structure
//{ head: { value: "mark", next:{value: "jimi", next:{value: "steve", next:null}}

class MyLinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = this.head;
        this.length = 1
    }
    
    append(value) {
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
        return this.head
    }
    
    prepend(value) {
        const node = new Node(value)
        const follower = this.head
        this.head = node
        this.head.next = follower
        this.length++
        return this.head
    }
    
    insert(index, value) {
        // input validation
        // need to traverse the ll and find the node before the index
        // save the pointer to the `next' option and replace the next with the inserted node
        // set the old next to the inserted node next
        if(!index || index < 0) {
            console.log('invalid index:'+index)
            return false
        }
        
        if(!value || typeof value !== 'string') {
            console.log('invalid value:'+value)
            return false
        }
        
        const leadingNode = this._traverseToIndex(index - 1)
        if(!leadingNode) {
            return false
        }
        
        const trailingNode = leadingNode.next
        const insertedNode = new Node(value)
        
        leadingNode.next = insertedNode
        insertedNode.next = trailingNode
        
        this.length++
        return true
    }
    
    remove(index) {
        // validate input
        // traverse to index-1 node and save pointer as leadinNode
        // point the leadingNode.next to leadingNode.next.next
        // decerement length
        
        if(!index || index < 0) {
            console.log('invalid index:'+index)
            return false
        }
        
        let leadingNode = this._traverseToIndex(index-1)
        if(!leadingNode) {
            return false
        }
        
        leadingNode.next = leadingNode.next.next
        
        this.length--
        return true
    }
    
    _traverseToIndex(index) {
        let currentNode = this.head
        let i = 0
        while(currentNode) {
            if(i === index) {
                return currentNode
            }
            
            currentNode = currentNode.next
            i++
        }
        
        return undefined
    }
    
    print() {
        let output = []
        let currentNode = this.head
        while(currentNode !== null) {
            output.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(JSON.stringify(this.head, null, 2))
    }
    
    
    reverseIterative() {
      
      let head = this.head
      this.tail = head
      let prev = null
      
      while(head) {
          let nextHead = head.next
          head.next = prev
          prev = head
          head = nextHead
      }
      
      this.head = prev
    }
    
    reverseRecursive() {
        this.reversePointers(this.head, null)
    }
    
    reversePointers(head, prev) {
        //break condition
        if(!head) {
            this.head = prev
            return
        }
        
        let nextHead = head.next
        head.next = prev
        prev = head
        head = nextHead
        
        this.reversePointers(head, prev)
    }
    
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}




const myLinkedList = new MyLinkedList("mark")
myLinkedList.append("jimi")
myLinkedList.append("steve")

// myLinkedList.print()

// // console.log(myLinkedList.insert(2, "Bilbo"))
// // console.log(JSON.stringify(myLinkedList.head, null, ""))

// console.log(myLinkedList.remove(2))
myLinkedList.print()
console.log(myLinkedList.reverseRecursive())
myLinkedList.print()
