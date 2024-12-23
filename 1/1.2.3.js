// まずはインライニング前の状態
// var input = [80, 90, 100];
// var average = (arr) => divide(sum(arr), size(arr));
// average(input); // -> 90

var input = [80, 90, 100];
var sum = (total, current) => total + current;

var total = arr => arr.reduce(sum);
var size = arr => arr.length;
var divide = (a, b) => a / b;
var average = arr => divide(total(arr), size(arr));

console.log(
average(input)
);