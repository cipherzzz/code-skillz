// Given two sorted arrays, merge them together
// ie. [1,3,5,8, 9] [0, 3,6,21]
// assumptions: we could have negative numbers, empty arrays, and duplicate values
// assuming that for duplicate values, we will only keep one of them

// brute force while
// O(n) time
// This only works for sorted input arrays
function bruteMergeArrays(array1, array2) {
    
    const merged = []
    
    //placeholder for current items outside of loop
    let array1Item = array1[0]
    let array2Item = array2[0]
    
    let i = 1;
    let j = 1;
    
    while(array1Item || array2Item) {
        if(array2Item == undefined || array1Item < array2Item) {
            merged.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            merged.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }
    
    return merged
}


// Happy
const inputHappy = [[0,2,4],[1,3,5,7,9]]
console.log(bruteMergeArrays(inputHappy[0], inputHappy[1]))

// Sad
const inputSad = [[],[1,3,5,7,9]]
console.log(bruteMergeArrays(inputSad[0], inputSad[1]))

const inputUnsorted = [[5, 3, 2, 9],[1,7,5,23,9]]
console.log(bruteMergeArrays(inputUnsorted[0], inputUnsorted[1]))

