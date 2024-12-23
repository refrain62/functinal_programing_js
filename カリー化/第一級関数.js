// 生成
var calc = function (x, y) { return x + y; };
// 代入
calc = function (x, y) { return x - y; };
// 受け渡し
var diffLength = function (a, b, fn) {
    return fn(a.length, b.length);
};
console.log(diffLength('aaa', 'a', calc)); // 2
