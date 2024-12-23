// 普通の関数
var add = function (x, y) { return x + y; };
console.log(add(1, 2)); // 3
// カリー化された関数
var curriedAdd = function (x) { return function (y) { return x + y; }; };
console.log(curriedAdd(1)(2)); // 3
var add1 = curriedAdd(1);
console.log(add1); // (y) => x + y
console.log(add1(2)); // 3
console.log(add1(3)); // 4
// tsc -> js -> nodeで実行
