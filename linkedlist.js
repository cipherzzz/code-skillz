class Node {
    
    constructor(data) {
        this.next = null;
        this.data = data;
    }
    
    
}

class LinkedList {
    
    constructor() {
        this.head = null;
    }
    
    append(data) {
        
        if(this.head == null) {
            this.head = new Node(data);
            return;
        }
        
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }
        current.next = new Node(data);
    }
    
    prepend(data) {
        let newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
    }
    
    deleteWithValue(data) {
        
        
        
        if(this.head == null) {
            return;
        }
        
        if(this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        
        let current = this.head;
        while(current.next != null) {
            console.log(current.next.data)
            if(current.next.data === data) {
                current.next = current.next.next; //skip the element
                return;
            }
            current = current.next; //move forwards
        }
    }
}

let myLinkedList = new LinkedList();
myLinkedList.append("mark");
myLinkedList.append("fable");
console.log(JSON.stringify(myLinkedList, null, 4));

myLinkedList.prepend("kait");
console.log(JSON.stringify(myLinkedList, null, 4));

myLinkedList.deleteWithValue("kait");
console.log(JSON.stringify(myLinkedList, null, 4));