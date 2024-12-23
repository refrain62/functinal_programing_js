// 関数を利用しない場合
const records: Record<string, string>[] = [
  {
    名前: 'ほげ太郎',
    年齢: '30',
    職業: 'エンジニア',
    一言: 'よろしくお願いします！',
  },
  {
    名前: 'ふが子',
    職業: 'デザイナー',
    趣味: 'キャンプ',
  }
];

for (const rec of records) {
  const user = {name: '', age: ''}
  if (rec['名前']) user.name = rec['名前'];
  else user.name = ''

  if (rec['年齢']) user.age = rec['年齢'];
  else user.age = ''
  // ・・・

  console.log(user);
}


// 普通の関数で対応した場合
const fetchValue = (table: Record<string, string>, key: string): string => {
  if (table[key]) return table[key];
  return '';
}

for (const rec of records) {
  const user = {
    name: fetchValue(rec, '名前'),
    age: fetchValue(rec, '年齢'),
    job: fetchValue(rec, '職業'),
    hobby: fetchValue(rec, '趣味'),
    comment: fetchValue(rec, '一言'),
  }

  console.log(user);
}


// 関数をカリー化した場合
// (key: string) => string が戻り値の関数
const fetchValue2 = (table: Record<string, string>): (key: string) => string => {
  return (key: string) => {
    if (table[key]) return table[key];
    return '';
  }
}

for (const rec of records) {
  // 一つ目の引数に部分適用
  const record = fetchValue2(rec);

  const user = {
    // 二つ目の引数を渡していく
    name: record('名前'),
    age: record('年齢'),
    job: record('職業'),
    hobby: record('趣味'),
    comment: record('一言'),
  }

  console.log(user);
}

