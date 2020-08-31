//Implement a function that reverses a string using iteration...and then recursion!
// reverse in place - exchange the last index with the first and move inwards
function reverseStringIterative(str) {
    let placeholder = []
    for(let i=0; i<str.length/2; i++){
        let first = str[i]
        let last =str[str.length-1-i]
        placeholder[i] = last
        placeholder[str.length-1-i] = first
    }
    return placeholder.join('')
}

function reverseStringRecursive(str) {
    
    if(str == "") {
        return ""
    }
    
    console.log(str)
    
    return reverseStringRecursive(str.substr(1)) + str[0]
}

console.log(reverseStringIterative('yoyo mastery'))
console.log(reverseStringRecursive('yoyo mastery'))
//should return: 'yretsam oyoy'