const calculate = (x:number, y:number, operation: (x: number, y: number) => number): number => {
  return operation(x, y);
}

const add = (x: number, y: number): number => x + y;
const subtract = (x: number, y: number): number => x - y;

console.log(calculate(5, 3, add));  // 8
console.log(calculate(5, 3, subtract)); // 2

