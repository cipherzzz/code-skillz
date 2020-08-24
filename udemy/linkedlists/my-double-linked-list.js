// Create a doubly linkedlist data structure
//{ head: { value: "mark", next:{value: "jimi", next:{value: "steve", next:null, previous: {value: "jimi"}}, previous: null}

class MyDoublyLinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = this.head;
        this.length = 1
    }

    get(index) {
        return this._traverseToIndex(index)
    }

    append(value) {
        const node = new Node(value)

        //store this pointer
        let prevTail = this.tail

        //set the next to the appended node
        prevTail.next = node

        //set previous of the new tail to reference back to previous tail
        node.previous = prevTail

        // set new tail
        this.tail = node

        this.length++
            return this.head
    }

    prepend(value) {
        const node = new Node(value)
        const follower = this.head
        this.head = node
        this.head.next = follower
        // this.head.previous should always be null in this case
        this.length++
            return this.head
    }

    insert(index, value) {
        // input validation
        // need to traverse the ll and find the node before the index
        // save the pointer to the `next' option and replace the next with the inserted node
        // set the old next to the inserted node next
        if (index === undefined || index < 0) {
            console.log('invalid index:' + index)
            return false
        }

        if (!value || typeof value !== 'string') {
            console.log('invalid value:' + value)
            return false
        }

        if (index == 0) {
            this.prepend(value)
            return true
        }
        else if (index >= this.length) {
            this.append(value)
            return true
        }
        else {
            const leadingNode = this._traverseToIndex(index - 1)
            if (!leadingNode) {
                return false
            }

            const trailingNode = leadingNode.next
            const insertedNode = new Node(value)
            
            insertedNode.previous = leadingNode
            leadingNode.next = insertedNode
            insertedNode.next = trailingNode

            this.length++
                return true
        }
    }

    remove(index) {
        // validate input
        // traverse to index-1 node and save pointer as leadinNode
        // point the leadingNode.next to leadingNode.next.next
        // decrement length

        if (!index || index < 0) {
            console.log('invalid index:' + index)
            return false
        }

        let leadingNode = this._traverseToIndex(index - 1)
        if (!leadingNode) {
            return false
        }
        
        //doing this to be safer
        let followingNode = this._traverseToIndex(index + 1)
        if (!followingNode) {
            return false
        }

        followingNode.previous = leadingNode
        leadingNode.next = followingNode

        this.length--
            return true
    }

    _traverseToIndex(index) {
        let currentNode = this.head
        let i = 0
        while (currentNode) {
            if (i === index) {
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
        while (currentNode !== null) {
            output.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(output)
        //console.log(this.head, null, "")
    }

}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}




const myLinkedList = new MyDoublyLinkedList("mark")
myLinkedList.append("jimi")
myLinkedList.append("steve")
// myLinkedList.insert(0, "scoobie")
// myLinkedList.insert(5, "doobie")

myLinkedList.print()
console.log(myLinkedList.insert(1, "scoobie"))
myLinkedList.print()
console.log(myLinkedList.get(1).previous.value)
console.log(myLinkedList.get(1).next.value)

console.log(myLinkedList.remove(1))
myLinkedList.print()
console.log(myLinkedList.get(1).previous.value)
console.log(myLinkedList.get(0).next.value)