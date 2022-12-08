// reducer function
const employees = [{ name: 'John', age: 20 }, { name: 'Jane', age: 30 }, { name: 'Jim', age: 40 }];


const reducer = (accumulator: number, currentValue: any) => accumulator + currentValue.age;
console.log(employees.reduce(reducer, 0))


// filter function
console.log(employees.filter((employee) => employee.age > 25))