function sortStringBruteForce(input, isReverse) {
    
    let sortType = isReverse === true?-1:1;
    let sortedLength = 0; // This indicates how much of the character arracy we have sorted
    let members = input.split('');
    
    while(sortedLength < input.length - 1) {
        let index = 0;
        while(index < members.length - 1) {
            let currentValue = members[index];
            let nextValue = members[index+1];
            let comparison = currentValue.localeCompare(nextValue);
            if(comparison === sortType) {
                members[index] = nextValue;
                members[index + 1] = currentValue;
            }
            index++;
        }
        sortedLength++;
    }
    return members.join('');
}

function sortStringSimple(input, isReverse) {
    return input.split('').sort((a,b)=>{
        let sortType = a.localeCompare(b);
        return isReverse?-sortType:sortType;
    }).join('');
}


const unsortedString = "qfxgnymufsc";
let bruteReverseSorted = sortStringBruteForce(unsortedString, true);
let bruteSorted = sortStringBruteForce(unsortedString, false);
let simpleSorted = sortStringSimple(unsortedString, false);
let simpleReverseSorted = sortStringSimple(unsortedString, true);


console.log(bruteSorted);
console.log(bruteReverseSorted);

console.log(simpleSorted);
console.log(simpleReverseSorted);
