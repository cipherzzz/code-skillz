// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Note:
// You may assume that you have an infinite number of each kind of coin.

// Algo
// assume that we want to solve for the smallest amount and increment until we solve for the asked amount
// if we solve for combo[0] where combo is an array going from 0 to the amount, we should be able to reuse solutions as we traverse upwards
// 1. initialize combo[] to a size of amount+1 and set the default value to be invalid - like amount+10 or something - we know that the lowest combo[i] should never be more than theamount itself
// 2. loop through the prepopulated combo array with i pointer -vertical
// 3. loop through the coins array - horizontal. 
// 4. if the currentAmount > coins[j], we want to know what is the minimum number combo[i] or 1+combo[i - coins[j]] - we do this min check because we are still in a horizontal check with the other coins in the array
// 5. check if the combo[amount] is greater than the amount passed in(remember we set it to an invalid amount when we initialized) if so, return -1 else return combo[amount]

// combo[0] = 0
// combo[1] = 1
// combo[2] = 1

//amount=1 coin=2
//combo[i] = INF
//combo[i] = min(INF, 1+combo[i - coin])

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort()
    let combo = new Array(amount+1).fill(amount+1)
    combo[0] = 0
    for(let i=1; i<=amount; i++) { //vertical
        let currentAmount = i
        for(let j=0; j<coins.length; j++) { //horizontal
            let coinValue = coins[j]
            if(coinValue <= currentAmount) {
                combo[currentAmount] = Math.min(combo[currentAmount], 1 + combo[currentAmount - coinValue])
            } else {
                break;
            }
        }
    }
     
    let result = combo[amount]
    return result>amount?-1:result
};

const coins = [1, 2, 5]
const amount = 11
console.log(coinChange(coins, amount))