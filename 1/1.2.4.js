// データの不変性
var sortDesc = arr => 
  arr.sort(
    (a, b) => b - a
  );

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
sortDesc(arr) // [ 9, 8, 7, 6, 5, 4, 3, 2, 1]
);

// 元の要素の内容が変わってしまった
console.log(arr);

