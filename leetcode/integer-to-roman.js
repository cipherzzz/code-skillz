// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: 3
// Output: "III"
// Example 2:

// Input: 4
// Output: "IV"
// Example 3:

// Input: 9
// Output: "IX"
// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// 1994
// 1 - remainder = 1994%1000 = 994
// 2 - place = Math.floor(1994/1000) = 1 
// 3 - 1 * 1000 is not a special case 
// 4 - take the M and push it on to the array
// 5 - take the 994 and continue the same logic

// Algo
// 0 - create a map of the special cases to refer to
// 1 - find the largest divisor and modulus the number with that
// 2 - store the remainder from the modulus operation
// 3 - divide the number with the largest divisor and take the Math.floor of the result and have that many instances of the numberal. ie. 3000 would have MMM as it would have 3 1000s contained
// 4 - check to see if the number is one of the special cases in our Map is so push onto array
// 5 - if not take the roman equivalent of that number and push it onto a result array
// 6 - repeat with remainder


function recursiveIntToRomanMark(input, lookup, special, results) {

    if (!input || input == 0) {
        return results
    }

    let custom = special.get(input)
    if (custom != null) {
        results.push(custom)
        return results
    }

    let count = 0
    let remainder = 0
    let numeralValue = 1

    for (let key of lookup.keys()) {
        if (input >= key) {
            numeralValue = key
        }
    }

    count = Math.floor(input / numeralValue)
    remainder = input % numeralValue
    
    custom = special.get(count * numeralValue)
    if (custom != null) {
        results.push(custom)
    }
    else {
        for (let i = 0; i < count; i++) {
            results.push(lookup.get(numeralValue))
        }
    }


    return recursiveIntToRomanMark(remainder, lookup, special, results)
}


/**
 * @param {number} num
 * @return {string}
 */
var intToRomanMark = function(num) {
    let lookup = new Map()
    let results = []
    let input = num

    lookup.set(1, 'I')
        .set(5, 'V')
        .set(10, 'X')
        .set(50, 'L')
        .set(100, 'C')
        .set(500, 'D')
        .set(1000, 'M')

    let special = new Map()
    special.set(4, 'IV')
        .set(9, "IX")
        .set(40, "XL")
        .set(90, "XC")
        .set(400, "CD")
        .set(900, "CM")

    return recursiveIntToRomanMark(input, lookup, special, results).join('')
};

// console.log(intToRoman(3))
// console.log(intToRoman(4))
// console.log(intToRoman(9))
//  console.log(intToRoman(58))
//console.log(intToRomanMark(1944))

// Example 1:

// Input: 3
// Output: "III"
// Example 2:

// Input: 4
// Output: "IV"
// Example 3:

// Input: 9
// Output: "IX"
// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// The above was me trying to solve it
// This is some leetcode solutions

// the greedy algorithm attempts to create a mapping of possible numbers and symbols 
// it iterates over the prefilled values array and attempts to see how many each of those will fit into the string

/**
 * @param {number} num
 * @return {string}
 */
var intToRomanGreedy = function(num) {
    let results = []
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    
    // iterate over the values array as an amount denominator
    for(let i=0; i<values.length && num >=0; i++) {
        while(values[i] <= num) {
            num -= values[i]
            results.push(symbols[i])
        }
    }
    return results.join('')
};



// The solution below makes use of our knowledge that the number will be between 1-3999
// We can hardcode the values for the thousands, hundreds, tens and ones places and calculate each place using the modulus and division
/**
 * @param {number} num
 * @return {string}
 */
var intToRomanHardcode = function(num) {
    let thousands = ["", "M", "MM", "MMM"] //because we only go to 3999
    let hundreds =  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    let tens =      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    let ones =      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    
    let remainder = 0
    
    let thousandsPlace = Math.floor(num / 1000)
    remainder = num % 1000
    
    let hundredsPlace =  Math.floor(remainder / 100)
    remainder = remainder % 100
    
    let tensPlace = Math.floor(remainder / 10)
    remainder = remainder % 10
    
    let onesPlace = Math.floor(remainder)
    
    return thousands[thousandsPlace] + hundreds[hundredsPlace] + tens[tensPlace] + ones[onesPlace]
};

console.log(intToRomanHardcode(3))
console.log(intToRomanHardcode(4))
console.log(intToRomanHardcode(9))
console.log(intToRomanHardcode(58))
 console.log(intToRomanHardcode(1994))

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000