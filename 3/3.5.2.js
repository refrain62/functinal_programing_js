// 再帰的に加算を実行
function sum(arr) {
  if (_.isEmpty(arr)) {
    return 0;
  }
  return _.first(arr) + sum(_.rest(arr));
 }

 console.log(
 sum([]) // -> 0
 );

 console.log(
  sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  // -> 55
 );


 function sum2(arr, acc = 0) {
  if (_.isEmpty(arr)) {
    return 0;
  }
  return sum(_.rest(arr), acc + _.first(arr));
 }
