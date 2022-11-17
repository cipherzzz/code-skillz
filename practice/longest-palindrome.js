function longestPalindrome(s) {
    let longest = ""
    for(let i=0; i<s.length; i++) {
        let oddPalindrome = expandFromCenter(s,i,i)
        let evenPalindrome = expandFromCenter(s,i,i+1)
        
        if(oddPalindrome.length > longest.length) {
            longest = oddPalindrome
        }
        
        if(evenPalindrome.length > longest.length) {
            longest = evenPalindrome
        }
    }
    
    return longest
}

function expandFromCenter(str, left, right) {
    let i = 0
    while(str[left-i] && str[left-i] == str[right+i]) {
        console.log(str[left-i], str[right+i])
        i++
    }
    i--
    
    return str.slice(left-i, right+i+1)
}

console.log(longestPalindrome("dbbd"))
