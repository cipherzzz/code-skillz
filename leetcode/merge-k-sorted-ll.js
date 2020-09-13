// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4.

class ListNode {
    constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}


// Algo
// We can do 2 linked lists
// iterate over the lists and run the merge for i and i+1, store the result outside the loop and pass it into the next iteration

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    if(!lists || lists.length == 0) {
        return null
    }
    
    let mergedList
    for(let i=0; i<lists.length; i++) {
        mergedList = mergeTwoSortedLinkedLists(mergedList, lists[i])
    }
    
    return mergedList
};


function mergeTwoSortedLinkedLists(node1, node2) {
    let falseRoot = new ListNode(-1)
    let currentNode = falseRoot
    while(node1 && node2) {
        if(node1.val < node2.val) {
            currentNode.next = node1
            node1 = node1.next
        } else {
            currentNode.next = node2
            node2 = node2.next
        }
        currentNode = currentNode.next
    }
    
    if(node1) {
        currentNode.next = node1
    } else {
        currentNode.next = node2
    }
    
    return falseRoot.next
}


let node1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
let node2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
let node3 = new ListNode(2, new ListNode(6))

console.log(JSON.stringify(mergeKLists([node1, node2, node3]), null, 0))