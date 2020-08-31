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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))

// reverse each linked list 
// sum them
// create a linked list in reversed order of sig
// try to revers in the same loop
//addTwoNumbersBetter(l1, l2)



// loop through the linked list and add each item plus the carry if exists
//
// Input: (2 -> 4 -> 3)
//       +(5 -> 6 -> 4)
//
// 
// create a head node, p1 and p2 for pointers to ll position, create current for position in head, create carry var
//
// 1: 2+5+0=7 put in new node, set carry to 0, increment p1 and p2 place, add new node to the current.next, set current = current.next 
//
// 2: 4+6+0=10 , 10%10=0, put 0 in new node, Math.floor(10/10)=1, set carry to 1, increment p1 and p2 place, add new node to current.next, set current=current.next
//
// 3: 3+4+1=8 , 8%10=8, put 8 in new node, Math.floor(8/10)=0, set carry to 0, increment p1 and p2 place, add new node to current.next, set current=current.next
//
// 4: if we have a carry, we use that to create a new node and append it to current=current.next
//
// we should have (7 -> 0 -> 8) now 

var addTwoNumbersBetter = function(l1, l2) {
    let head = new ListNode(0,null)
    let headPtr = head
    let l1Ptr = l1
    let l2Ptr = l2
    let carry = 0
    
    while(l1Ptr !== null || l2Ptr !== null) {
        let x = (l1Ptr !== null) ? l1Ptr.val : 0
        let y = (l2Ptr !== null) ? l2Ptr.val : 0
        let sum = x + y + carry
        carry = Math.floor(sum/10)
        let remainder = sum%10
        let sumNode = new ListNode(remainder, null)
        headPtr.next = sumNode
        headPtr = headPtr.next
        
        if(l1Ptr !== null) {
            l1Ptr = l1Ptr.next
        }
        
        if(l2Ptr !== null) {
            l2Ptr = l2Ptr.next
        }
    }
    
    if(carry !== 0) {
        headPtr.next = new ListNode(carry, null)
    }
    
    console.log(JSON.stringify(head.next,null,''))
    return head.next
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))

addTwoNumbersBetter(l1, l2)

l1 = new ListNode(2, new ListNode(4, new ListNode(7, null)))
l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))

addTwoNumbersBetter(l1, l2)