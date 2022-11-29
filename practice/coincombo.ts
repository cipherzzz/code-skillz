

function coinCombo (coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
}

console.log(coinCombo([1, 2, 5], 5))
console.log(coinCombo([1, 2, 5], 11))
console.log(coinCombo([1, 2, 5], 100))
