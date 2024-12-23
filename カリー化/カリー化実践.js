// 関数を利用しない場合
var records = [
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
for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
    var rec = records_1[_i];
    var user = { name: '', age: '' };
    if (rec['名前'])
        user.name = rec['名前'];
    else
        user.name = '';
    if (rec['年齢'])
        user.age = rec['年齢'];
    else
        user.age = '';
    // ・・・
    console.log(user);
}
// 普通の関数で対応した場合
var fetchValue = function (table, key) {
    if (table[key])
        return table[key];
    return '';
};
for (var _a = 0, records_2 = records; _a < records_2.length; _a++) {
    var rec = records_2[_a];
    var user = {
        name: fetchValue(rec, '名前'),
        age: fetchValue(rec, '年齢'),
        job: fetchValue(rec, '職業'),
        hobby: fetchValue(rec, '趣味'),
        comment: fetchValue(rec, '一言'),
    };
    console.log(user);
}
// 関数をカリー化した場合
// (key: string) => string が戻り値の関数
var fetchValue2 = function (table) {
    return function (key) {
        if (table[key])
            return table[key];
        return '';
    };
};
for (var _b = 0, records_3 = records; _b < records_3.length; _b++) {
    var rec = records_3[_b];
    // 一つ目の引数に部分適用
    var record = fetchValue2(rec);
    var user = {
        // 二つ目の引数を渡していく
        name: record('名前'),
        age: record('年齢'),
        job: record('職業'),
        hobby: record('趣味'),
        comment: record('一言'),
    };
    console.log(user);
}
