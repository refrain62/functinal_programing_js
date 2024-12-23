// 命令型プログラム
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}

console.log( array );

// > node .\1.2.1.js
// [
//   0,  1,  4,  9, 16,
//  25, 36, 49, 64, 81
// ]


// 関数型プログラム
console.log( 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    function (num) {
      return Math.pow(num, 2);
    }
  )
 );

// 関数型プログラム２
console.log(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map( num => Math.pow(num, 2))
);
