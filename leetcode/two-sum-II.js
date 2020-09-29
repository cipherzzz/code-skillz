/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let results = []
    let cache = {}
    
    for(let i=1; i<=numbers.length; i++) {
        let num = numbers[i-1]
        let complement = target - num
        console.log(num, complement, cache[complement])
        if(cache[complement] != undefined) {
            return[cache[complement], i]
        } else {
            cache[num] = i
        }      
    }
    
    return results
};