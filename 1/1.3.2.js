// enrollment に格納されている各オブジェクトが学生を表す
let enorollment = [
  {enrolled: 2, grade: 100},  // 2つの授業を受けており、成績は100点
  {enrolled: 2, grade: 80},
  {enrolled: 1, grade: 89}
];

// 命令型アプローチの場合
var totalGrades = 0;
var totalStudentsFound = 0;

for (let i = 0; i < enorollment.length; i++) {
  let student = enorollment[i];

  if (student !== null) {
    if (student.enrolled > 1) {
      totalGrades += student.grade;
      totalStudentsFound++;
    }
  }
}

var average = totalGrades / totalStudentsFound; // -> 90

console.log(average);


// 関数チェーンによるプログラミング
// _はLodashオブジェクト
console.log(
_.chain(enorollment)
  .filter(student => student.enrolled > 1)
  .pluck('grade')
  .average()
  .value() // -> 90
);


