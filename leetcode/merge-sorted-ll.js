// 21. Merge Two Sorted Lists
// Easy

// 4760

// 619

// Add to List

// Share
// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// iterate over the ll while an index exists in either
//compare the value of ll1 to ll2 and put the smaller as the next value for the current node

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


class ListNode {
    constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}

let node1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
let node2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
// console.log(node1)
// console.log(node2)




/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsMy = function(l1, l2) {
    // current placeholder
    let current = new ListNode(-1, null)
    let root = current
    while(l1 && l2) {
        if(l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    
    if(l1 !== null) {
        current.next = l1
    } else {
        current.next = l2
    }
    
    return root
};

console.log(JSON.stringify(mergeTwoListsMy(node1, node2), null, 0))