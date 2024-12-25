// computeAverageGrade プログラムをテストする
const fork = (join, func1, func2) =>
  (val) =>
      join(func1(val), func2(val));

const toLetterGrade = (grade) => {
  if (grade >= 90) return 'A';
  if (grade >= 80) return 'B';
  if (grade >= 70) return 'C';
  if (grade >= 60) return 'D';
  return 'F';
};

const computeAverageGrade =
  R.compose(toLetterGrade, form (R.divide, R.sum, R.length));


// 処理全体としてのテストも可能
Qunit.test('Compute Average Grade', function(assert) {
  assert.equal(computeAverageGrade([80, 90, 100]), 'A');
});

// 関数別にテストが可能
Qunit.test('Compute Average Grade: toLetterGrade', function(assert) {
  assert.equal(toLetterGrade(90),  'A');
  assert.equal(toLetterGrade(200), 'A');
  assert.equal(toLetterGrade(80),  'B');
  assert.equal(toLetterGrade(89),  'B');
  assert.equal(toLetterGrade(70),  'C');
  assert.equal(toLetterGrade(60),  'D');
  assert.equal(toLetterGrade(59),  'F');
  assert.equal(toLetterGrade(-10),  'F');
})

QUint.test('Functional Combinator: fork', function(assert) {
  const timesTwo = fork((x) => x + x, R.identity, R.identity);
  assert.equal(timesTwo(1), 2);
  assert.equal(timesTwo(2), 4);
});

