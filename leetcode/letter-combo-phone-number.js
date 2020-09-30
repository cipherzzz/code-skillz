// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

// Algo
// 1 or 0 is entered, ignore that?
// var: phoneKeyMap{}, combinations[]
// loop through the digits
//      take all the combinations and keep them in a temp variable
//.     set the original combinations value to empty as we will regenerate this
//      loop through the temp values
//          loop through the current digits array 
//                append the temp value to the digit value and push the concat string to the combinations array
// go through each i,j combo and push to the combinations list

// 2 -> ["a", "b", "c"]
// 23 ->[ "ad", "ae", "af", "bd", be, bf, cd,ce,cf]
//234 -> [adg, adh,adi]

// Time O(k^n) 

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(!digits ||  typeof digits != "string" || digits.length==0) {
        return []
    }
    
    let phoneKeyMap = { 0: [], 1: [], 2: ["a", "b", "c"], 3: ["d", "e", "f"], 4: ["g", "h", "i"], 5: ["j", "k", "l"], 6: ["m", "n", "o"], 7: ["p", "q", "r", "s"], 8: ["t", "u", "v"], 9: ["w", "x", "y", "z"] }
    let combinations = [""]
    digits.split("").forEach(digit=>{
     let temp = combinations.splice(0,combinations.length)
      temp.forEach(token=>{
          let list = phoneKeyMap[digit]
          list.forEach(char=>{
              combinations.push(token+char)
          })
      })
  })
  return combinations
    
};

let digits = "23"
console.log(letterCombinations(digits))