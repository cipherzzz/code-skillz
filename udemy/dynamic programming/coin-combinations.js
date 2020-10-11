let solveCoinChange = function(denominations, amount) {
  let solution = [];
  for (let i = 0; i < amount + 1; i++) {
    solution[i] = 0;
  }
  solution[0] = 1;
  for (let j = 0; j < denominations.length; j++) {
    console.log(denominations[j])  
    for (let i = denominations[j]; i < amount + 1; i++) {
        console.log("amount:", i)
        console.log("existing", solution[i])
        console.log("cached", solution[i - denominations[j]])
        solution[i] += solution[i - denominations[j]];
    }
  }
  return solution[solution.length - 1];
};

let denominations = [1, 2, 5];
let amount = 7;
let result = solveCoinChange(denominations, amount)
console.log("solveCoinChange([" + String(denominations) + '], ' + String(amount) + ') = ' + result)