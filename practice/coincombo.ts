// coin combinations
// Given a number of cents, return the optimal configuration of coins in an object
//
// 1 cent = 1
// 5 cents = 5
// 10 cents = 10
// 25 cents = 25
//
// 1 cent = 1
// 5 cents = 5
// 10 cents = 10
// 25 cents = 25
// 50 cents = 50
// 100 cents = 100
//

const coinCombo = (cents: number): { [key: string]: number } => {
    const coins = [100, 50, 25, 10, 5, 1]
    const cache: { [key: string]: number } = {}
    for(let i = 0; i < coins.length; i++) {
        const coin = coins[i]
        const coinCount = Math.floor(cents / coin)
        if(coinCount > 0) {
            cache[coin] = coinCount
            cents -= coinCount * coin
        }
    }
    return cache
}

