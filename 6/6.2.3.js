// テストが正常に動くパターン
QUnit.test("Increment with zero", function(assert) {
  assert.equal(increment(), 1);
});

QUnit.test("Increment with nagative", function(assert) {
  // 前提条件を変更
  counter = -10;
  assert.equal(increment(), -9);
});

QUnit.test("Increment with positive", function(assert) {
  counter = 10;
  assert.equal(increment(), 11);
});


// 入れ替えをすることでテストが失敗する

QUnit.test("Increment with nagative", function(assert) {
  // 前提条件を変更
  counter = -10;
  assert.equal(increment(), -9);
});

QUnit.test("Increment with zero", function(assert) {
  // ここが前提条件に影響し、失敗する
  assert.equal(increment(), 1);
});

QUnit.test("Increment with positive", function(assert) {
  counter = 10;
  assert.equal(increment(), 11);
});

