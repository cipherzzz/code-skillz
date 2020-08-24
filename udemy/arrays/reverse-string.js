// reverse a string
//brute force - iterate in reverse order and push items into another array, then concat into a string to return
// O(n) time - O(2n) memory
function reverseString(input) {
    
    if(!input || typeof input != "string") {
        console.log("invalid input:"+input)
        return input
    } else if(input.length < 2) {
        return input
    }
    
   let inputArray = input.split('')
   let outputArray = [] //can't set a fixed length array to save space in js
   for(let i = inputArray.length-1; i>=0; i--) {
       outputArray.push(inputArray[i])
   }
   return outputArray.join('');
}


// better way - sort in place
// still O(n) time but better O(n) memory
function reverseInPlace(input) {
    
    if(!input || typeof input != "string") {
        console.log("invalid input:"+input)
        return input
    } else if(input.length < 2) {
        return input
    }
    
    let inputArray = input.split('')
    for(let i=0; i<inputArray.length/2; i++) {
        let currentItem = inputArray[i]
        let oppositeItem = inputArray[inputArray.length -1 -i]
        inputArray[i] = oppositeItem
        inputArray[inputArray.length -1 -i] = currentItem
    }
    return inputArray.join('')
}

// Most readable way
// O(n)
function reverseReadable(input) {
    
    if(!input || typeof input != "string") {
        console.log("invalid input:"+input)
        return input
    } else if(input.length < 2) {
        return input
    }
    
    return input.split('').reverse().join('')
}

function assertEqual(items, path) {
    if(items[0] == items[1] && items[1] == items[2]) {
        console.log("All items equal:"+items[0] +" for path:"+ path)
        return true
    } else {
        console.log("All items are not equal:"+items +" for path:" +path)
        return false
    }
}


// Happy
const inputHappy = "Mark"
assertEqual([reverseString(inputHappy), reverseInPlace(inputHappy), reverseReadable(inputHappy)], "Happy")

// Sad
const inputSadNumber = 12345
assertEqual([reverseString(inputSadNumber), reverseInPlace(inputSadNumber), reverseReadable(inputSadNumber)], "Sad")

const inputSadString = ''
assertEqual([reverseString(inputSadString), reverseInPlace(inputSadString), reverseReadable(inputSadString)], "Sad")

const inputSadUndefined = undefined
assertEqual([reverseString(inputSadUndefined), reverseInPlace(inputSadUndefined), reverseReadable(inputSadUndefined)], "Sad")