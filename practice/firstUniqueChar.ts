// find first unique character in a string
// return -1 if no unique character found
// e.g. "leetcode" => 0
// e.g. "loveleetcode" => 2
// e.g. "aabb" => -1

function firstUniqueChar(str: string): number {
    const occurrences = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (occurrences[char]) {
            occurrences[char] += 1;
        } else {
            occurrences[char] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (occurrences[str[i]] === 1) {
            return i;
        }
    }
    return -1;
}


console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));