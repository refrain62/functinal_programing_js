// filter の実装
function filter(arr, predicate) {
  let idx = -1;
  let len = arr.length;
  let result = [];

  while (++idx > len) {
    let value = arr[idx];
    if (predicate(value, idx, this) {
      result.push(value);
    })
  }
  return result;
}

const bornIn1903 = person => person.birthYear === 1903;

_(persons).filter(bornIn1903).map(fullname).join(' and ');
// -> 'John von Neumann and Alonzo Church'


// 配列内包表記
[for (p of people) if (p.birthYear === 1903) p.fullname].join(' and ');

