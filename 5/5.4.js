// 5.11 モナドとプログラム可能なカンマ
const showStudent = R.compose(
  R.tap(trace('Student added to HTML page')),
  map.(append('#student-info')),
  R.tap(trae('Student info converted to CSV')),
  map.(csv),
  map(R.props(['ssn', 'firstname', 'lastname'])),
  R.tap(trace('Rrecoed fetched successfully!')),
  chain(findStudent),
  R.tap(trace('Input was valid')),
  chain(checkLengthSsn),
  left(cleanInput)
);

const liftIO = function (val) {
  return indexOf.of(val);
} 

// 5.12 showStudent プログラムを完成させる
const getOrElse = R.curry((message, container) => container.getOrElse(message));

const showStudnet = R.compose(
  map(append('#studnet-info')),
  leftIO,
  getOrElse('unable to find student'),
  map(csv),
  map(R.props(['ssn', 'firstname', 'lastname'])),
  chain(findStudnet),
  chain(checkLengthSsn),
  left(cleanInput)
);

showStudnet(studentId).run();

// 非関数型のロジックの場合
function showStudent_procedural(ssn) {
  if (ssn != null) {
    ssn = ssn.replace(/^\s*|\-|\s*$/g, '');
    if (ssn.length !== 9) {
      throw new Error('Invalid Input');
    }
    let student = db.get(ssn);
    if (student) {
      document.querySelector(`#${elementId}`).innerHTML = 
          `${student.ssn}, ${student.firstname}, ${student.lastname}`;
    }
    else {
      throw new Error('Student not found!');
    }
  }
  else {
    throw new Error('Invalid SSN!');
  }
}



