// Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

// For example,
// [2,3,4], the median is 3

// [2,3], the median is (2 + 3) / 2 = 2.5

// Design a data structure that supports the following two operations:

// void addNum(int num) - Add a integer number from the data stream to the data structure.
// double findMedian() - Return the median of all elements so far.
 

// Example:

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3) 
// findMedian() -> 2
 

// Follow up:

// If all integer numbers from the stream are between 0 and 100, how would you optimize it?
// If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

class MedianFinder {
    
    constructor() {
        this.numbers = []
    }
    
    addNum(num) {
        this.numbers.push(num)
    }
    
    findMedian() {
        this.numbers.sort()
        let length = this.numbers.length
        let mid = Math.floor(length/2)
        let median = length%2!=0?this.numbers[mid]:(this.numbers[mid-1]+this.numbers[mid])/2
        return median
    }
}

let finder = new MedianFinder()
finder.addNum(1)
finder.addNum(2)
finder.addNum(3)
console.log(finder.findMedian())