const wd = 'gyakumoji';

// 文字列を配列として分解する
const arrWd = wd.split('');
console.log(arrWd);

// 要素を順に処理する＋3つ目の引数を指定無しにし、直前の計算の戻値が返ってくる特性を使う
// yg g y
// ayg yg a
// kayg ayg k
// ukayg kayg u
// mukayg ukayg m
// omukayg mukayg o
// jomukayg omukayg j
// ijomukayg jomukayg i
const result = arrWd.reduce((w1, w2) => {let w = w2 + w1; console.log(w,w1,w2); return w;});
console.log(result);

// 略するとこうなる
const result2 = arrWd.reduce((w1, w2) => w2 + w1);
console.log(result2);

