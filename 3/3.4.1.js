var names = [
  'alonzo church',
  'Haskell curry',
  'stephen_kleene'
];

// 命令型プログラム
// 配列に対して逐次処理を実行
var result = [];
for (let i = 0; i < names.length; i++) {
  var n = names[i];
  if (n !== undefined && n !== null) {
    var ns = n.replace(/_/, ' ').split(' ');
  
    for (let j = 0; j < ns.length; j++) {
      var p = ns[j];
      p = p.charAt(0).toUpperCase() + p.slice(1);
      ns[j] = p;
    }
  
    if (result.indexOf(ns.join(' ')) < 0) {
      result.push(ns.join(' '));
    }
  }
}

console.log(
  result.sort()
);
// -> [ 'Alonzo Church', 'Haskell Curry', 'Stephen Kleene' ]


// 関数型アプローチ
_.chain(names)
  .filter(isValid)
  .map(s => s.replace(/_/, ' '))
  .uniq()
  .map(_.startCase)
  .sort()
  .value();
// -> [ 'Alonzo Church', 'Haskell Curry', 'Stephen Kleene' ]


const gatherStats = function (stat, country) {
  if (!isValid(stat[country])) {
    stat[country] = {'name': country, 'count': 0};
  }
  stat[country].count++;
  return stat;
}