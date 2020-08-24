// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let addend1 = []
    let addend2 = []
    while(l1 || l2) {
        if(l1) {
            addend1.unshift(l1.val)
            l1 = l1.next
        }
        if(l2) {
            addend2.unshift(l2.val)
            l2 = l2.next
        }
    }
    console.log(addend1)
    console.log(addend2)
    
    const sum = Number(addend1.join('')) + Number(addend2.join(''))
    const reverseSum = String(sum).split('').reverse()
    console.log(reverseSum)
    
    let head = new ListNode(Number(reverseSum[0]), null)
    let current = head
    for(let i = 1; i<reverseSum.length; i++) {
        current.next = new ListNode(Number(reverseSum[i]), null)
        current = current.next
    }
    console.log(head)
    return head
};


// reverse each linked list 
// sum them
// create a linked list in reversed order of sig
// try to revers in the same loop

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))

addTwoNumbers(l1, l2)