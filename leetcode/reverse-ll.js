// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?
// keep a pointer to the previous , next, and current as we traverse the ll
// in the while loop for 1->2->3->4->5->NULL
// save a reference to current.next -  which is 2
// set current.next = previous - which is null in this case
// set prev = current - which is 1
// set current = next - which is 2
// 2->1->null


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIterative = function(head) {
    let previous = null
    let current = head

    while (current) {
        let next = current.next // save a reference for later
        current.next = previous // breaking the previous reference

        previous = current // updating the previous reference for next loop
        current = next // updating current for the next loop with our saved pointer
    }
    console.log(JSON.stringify(previous, null, 0))
    return previous // previous is the last non-null node and serves as the new head
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let previous = null
    return reverseListRecursive(head, previous)
};

function reverseListRecursive(current, previous) {
    
    if(!current) {
        return previous
    }
    
    let temp = current.next // save a reference for later
    current.next = previous // breaking the previous reference
    
    return reverseListRecursive(temp, current)
}


let ll = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
//reverseListIterative(ll)
console.log(JSON.stringify(reverseListRecursive(ll),null,0))
