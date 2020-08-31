const assert = require('assert')

// tqke each codeList and do a regex with the shopping list in order
// if both match then we have a winner

function isWinner(codeList, shoppingList) {
  
  let shoppingListString = shoppingList.join(", ")
  let outcomes = {}
  let codeStringJoined = ""
  for(let i = 0; i<codeList.length; i++) {
    let codeString = '[\\s\\S]*'+codeList[i].join(", ").replace("anything",'[\\s\\S]*')
    codeStringJoined = codeStringJoined.concat(codeString)
  }
  codeStringJoined = codeStringJoined.concat('[\\s\\S]*')
  
  let regex = new RegExp(codeStringJoined);
  return regex.test(shoppingListString) == true?1:0
}


// Empty list returns a winner
//assert.strictEqual(isWinner([], ['banana', 'apple', 'kiwi']), 1)

// Example 1:
// Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [orange, apple, apple, banana, orange, banana]
// Output: 1
// Explanation:
// codeList contains two groups - [apple, apple] and [banana, anything, banana].
// The second group contains 'anything' so any fruit can be ordered in place of 'anything' in the shoppingCart.
// The customer is a winner as the customer has added fruits in the order of fruits in the groups and the order of groups in the codeList is also maintained in the shoppingCart.
const codeList1 = [
  ['apple', 'apple'],
  ['banana', 'anything', 'banana']
]
const shoppingCart1 = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']
isWinner(codeList1, shoppingCart1)
assert.strictEqual(isWinner(codeList1, shoppingCart1), 1)

// Example 2:
// Input: codeList = [[apple, apple], [banana, anything, banana]]
// shoppingCart = [banana, orange, banana, apple, apple]
// Output: 0
// Explanation:
// The customer is not a winner as the customer has added the fruits in order of groups but group [banana, orange, banana] is not following the group [apple, apple] in the codeList.
const codeList2 = [
  ['apple', 'apple'],
  ['banana', 'anything', 'banana']
]
const shoppingCart2 = ['banana', 'orange', 'banana', 'apple', 'apple']
assert.strictEqual(isWinner(codeList2, shoppingCart2), 0)

// Example 3:
// Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [apple, banana, apple, banana, orange, banana]
// Output: 0
// Explanation:
// The customer is not a winner as the customer has added the fruits in an order which is not following the order of fruit names in the first group.
const codeList3 = [
  ['apple', 'apple'],
  ['banana', 'anything', 'banana']
]
const shoppingCart3 = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']
assert.strictEqual(isWinner(codeList3, shoppingCart3), 0)

// Example 4:
// Input: codeList = [[apple, apple], [apple, apple, banana]] shoppingCart = [apple, apple, apple, banana]
// Output: 0
// Explanation:
// The customer is not a winner as the first 2 fruits form group 1, all three fruits would form group 2, but can't because it would contain all fruits of group 1
const codeList4 = [
  ['apple', 'apple'],
  ['apple', 'apple', 'banana']
]
const shoppingCart4 = ['apple', 'apple', 'apple', 'banana']
assert.strictEqual(isWinner(codeList4, shoppingCart4), 0)