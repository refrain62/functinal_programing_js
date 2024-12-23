// 普通の関数
const add = (x: number, y: number): number => x + y;
console.log(add(1, 2)); // 3

// カリー化された関数
const curriedAdd = (x: number) => (y: number) => x + y;
console.log(curriedAdd(1)(2)); // 3

const add1 = curriedAdd(1);
console.log(add1);  // (y) => x + y
console.log(add1(2)); // 3
console.log(add1(3)); // 4

// tsc -> js -> nodeで実行

