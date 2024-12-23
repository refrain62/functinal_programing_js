var calculate = function (x, y, operation) {
    return operation(x, y);
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3, subtract)); // 2
