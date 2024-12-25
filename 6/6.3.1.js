// テストが正常に動くパターン
QUnit.test("Increment with zero", function(assert) {
  assert.equal(increment(0), 1);
});

QUnit.test("Increment with zero(again)", function(assert) {
  assert.equal(increment(0), 1);
});

QUnit.test("Increment with ten", function(assert) {
  assert.equal(increment(10), 11);
});

QUnit.test("Increment with nagative one", function(assert) {
  assert.equal(increment(-1), 0);
});


// 入れ替えても問題ない

QUnit.test("Increment with ten", function(assert) {
  assert.equal(increment(10), 11);
});

QUnit.test("Increment with zero", function(assert) {
  assert.equal(increment(0), 1);
});

QUnit.test("Increment with nagative one", function(assert) {
  assert.equal(increment(-1), 0);
});

QUnit.test("Increment with zero(again)", function(assert) {
  assert.equal(increment(0), 1);
});
