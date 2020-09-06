// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.


// Example 1:


// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:


// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:



// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
// Example 4:

// Input: head = []
// Output: []
// Explanation: Given linked list is empty (null pointer), so return null.


// Constraints:

// -10000 <= Node.val <= 10000
// Node.random is null or pointing to a node in the linked list.
// Number of Nodes will not exceed 1000.

// Algo
// traverse the ll, clone the current node, populate a hashmap with the current node as the key and the clone as the value
// iterate the ll again and create our copy with the next and random pointers - now that we should have references to them all
// return value associated with the head key

class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    if (!head) {
        return null
    }

    let map = new Map()
    let current = head
    while (current) {
        map.set(current, new Node(current.val, null, null))
        current = current.next
    }

    current = head
    while (current) {
        let clone = map.get(current)
        clone.next = current.next == null ? null : map.get(current.next)
        clone.random = current.random == null ? null : map.get(current.random)
        current = current.next
    }

    return map.get(head)

};

let node1 = new Node(1)
let node2 = new Node(2)
node1.next = node2
node1.random = null
node2.random = node1
console.log(node1)
let deepCopy = copyRandomList(node1)
console.log(deepCopy)
console.log(node1 === node1)
console.log(node1 === deepCopy)
