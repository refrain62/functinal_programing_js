// 命令型
var result = [];
var persons = [p1, p2, p3, p4];
for (let i = 0; i < persons.length; i++) {
  var p = persons[i];
  if (p !== null && p !== undefined) {
    result.push(p.fullname);
  }
}

// 関数型
_.map(persons,
  s => (s !== null && s !== undefined) ? s.fullname : ''
)


// map の実装
function map (arr, fn) {
  const len = arr.length;
  const result = new Array(len);
  
  for (let idx = 0; idx < len; ++idx) {
    result[idx] = fn(arr[idx], idx, arr);
  }

  return result;
}

