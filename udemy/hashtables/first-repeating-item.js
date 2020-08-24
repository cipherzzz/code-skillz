// given an array, find the first repeating number
// [0,2,4,2,6] => 2
// [1,2,3,4] => undefined

//brute force with a nested for loop - kindof confusing
// O(n^2)
function bruteFirstRepeatingItem(inputArray) {
    //check inputs
    if(!inputArray) {
        console.log("invalid input array:"+inputArray)
        return undefined
    }
    
    // loop through and compare the left index with all to to the right
    for(let i=0; i< inputArray.length; i++) {
        let leftItem = inputArray[i]
        for(let j=i+1; j<inputArray.length; j++) {
            let rightItem = inputArray[j]
            if(leftItem === rightItem) {
                return leftItem
            }
        }
    }
    return undefined
}


// This is a slightly better one o(n)
function betterFirstRepeatingItem(inputArray) {
    //check inputs
    if(!inputArray) {
        console.log("invalid input array:"+inputArray)
        return undefined
    }
    
    const history = {}
    for(let i=0; i<inputArray.length; i++) {
        let item = inputArray[i]
        if(history[item]) {
            return item
        } else {
            history[item] = true
        }
    }
    return undefined
}

bruteFirstRepeatingItem(undefined)
bruteFirstRepeatingItem([])
console.log(bruteFirstRepeatingItem([0,2,4,2,4]))
