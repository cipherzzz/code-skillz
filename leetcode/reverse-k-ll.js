// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

// Note:

// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 1->2->3->4->5

// Algo
// head=null return null
// currentK=1, previous, current
// set previous to null since last element will always be null
// while current
//.    next = current.next
//.    current.next = previous

//.    previous = current
//     current = next
//.    currentK++

function reverseK(head, k) {
    let previous = null // these two vars are used in a classic ll reversal
    let current = head
    
    let index=0 // these two are used in the k group - the next variable is scoped here as this points towards the k+1 node 
    let next = null
    
    while(current && index < k) {
        next = current.next // save reference
        current.next = previous // reverse pointer
        
       previous = current //move previous up one
       current = next // move current up one
       
       index++ // up the index for the k count
    }
 
    
    // at this point the  head is the first node in the reversed k group
    if(next) {
        // at this point the  head is the first node in the reversed k group
        // we want to connect this node to the first node in the next reversed k group
        head.next = reverseK(next, k)
    }
    
    // if next is null then the previous node is the last one in our group and should just be appended
    return previous
};


let k1 = 2
let ll1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(JSON.stringify(reverseK(ll1,k1),null,0))