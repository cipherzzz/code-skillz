class Node {

    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class LinkedList { 
    
    constructor(node) {
        this.head= node;
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
        let oldHead = this.head;
        this.head = newHead;
        this.head.next = oldHead;
    }

    deleteWithValue(data) {

      if(this.head.data == data) {
        this.head = this.head.next;
        return;
      }

        let current = this.head;
        while(current.next != null) {
            if(current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }

    }

}

const list = new LinkedList()
console.log(list)

list.append("a")
console.log(list)

list.prepend("b")
console.log(list)

list.deleteWithValue("b")
console.log(list)
