// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// At most 3 * 104 cal

// For a normal cache of O(1) time get/put we could use a Map - however the LRU requires us to have an order 
// We will store the cache items in a doubly linked list and get/put using a Map
// Whenever we get/put a cache item we will put it in the front of the list and pop items off the tail when we reach capacity

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(capacity, map) {
        
        this.capacity = capacity
        this.size = 0
        this.map = map
        
        this.head = new Node(-1)
        this.tail = new Node(-1)
        
        this.head.next = this.tail
        this.head.prev = this.tail
        
        this.tail.next = this.head
        this.tail.prev = this.head
    }
    
    add(node) {
        if(this.size == this.capacity) {
            this.remove(this.tail.prev)
        }
        let itemAfter = this.head.next
        this.head.next = node
        node.prev = this.head
        node.next = itemAfter
        itemAfter.prev = node
        
        this.size++
    }
    
    
    remove(node) {
        let previous = node.prev
        let next = node.next
        previous.next = next
        next.previous = previous
        this.map.delete(node.value)
        
        this.size--
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.nodeMap = new Map()
        this.nodeList = new DoublyLinkedList(capacity, this.nodeMap)
    }
    
    get(key) {
        let node = this.nodeMap.get(key)
        if(!node) {
            return -1
        } else {
            this.nodeList.remove(node)
            this.nodeList.add(node)
            return node.value
        }
    }
    
    put(key, value){
        let node = this.nodeMap.get(key)
        if(!node) {
            node = new Node(value)
            this.nodeMap.set(key, node)
            this.nodeList.add(node)
        } else {
            this.nodeList.remove(node)
            node.value = value
            this.nodeList.add(node)
        }
    }
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let cache = new LRUCache(2);
cache.put(1, 1); // cache is {1=1}
cache.put(2, 2); // cache is {1=1, 2=2}
console.log(cache.get(1));    // return 1
cache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(cache.get(2));    // returns -1 (not found)
cache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(cache.get(1));    // return -1 (not found)
console.log(cache.get(3));    // return 3
console.log(cache.get(4));    // return 4