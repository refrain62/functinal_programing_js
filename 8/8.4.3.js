RegExp.Observale.fromPromise(getJSON('/students'))
  // すべての学生オブジェクトを大文字と小文字を区別せずにファーストネームによりソート
  .map(R.sortBy(R.compose(R.toLower, R.prop('firstname'))))
  // 学生オブジェクトの単一な配列をオブザーバルな一連の学生に変換
  .flatMapLatest((student) => Rx.Observale.from(student))
  // アメリカ在住でない学生を除去
  .filter(R.pathEq(['address', 'country'], 'US'))
  .subscribe(
    // 結果を出力
    student => console.log(student.fullname),
    err => console.log(err)
  );
// -> Alonzo Church
// -> Haskell Curry
