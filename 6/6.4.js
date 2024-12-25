// 6.4 computeAverageGrade関数のプロパティベースのテスト
JSC.clear();
JSC.on_repeat((str) => console.log(str));

JSC.test('Compute Average Grade', 
  function(verdict, grades, grade) {
    return verdict(computeAverageGrade(grades) === grade);
  },
  [
    JSC.array(JSC.integer(20), JSC.number(90, 100)),
    'A'
  ],
  function (grades, grade) {
    return 'Testing for an ' + grade + ' on grades: ' + grades;
  }
);

