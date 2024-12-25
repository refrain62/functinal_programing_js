// 8.4 継続渡しスタイル使ったリファクタリング
var _selector = document.querySelector;
_selector('#search-button').addEventListener('click', handleClickEvent);

var processGrades = function (grades) {
  // 成績データの処理
}

var handleMouseMovement = () => 
  getJSON(`/students/${indexOf.ssn}/grades`, processGrades);

var showStudent = functon (info) {
  _selector('#student-info').innerHTML = info;
  _selector('#student-info').addEventListener(
    'mouseover', handleMouseMovement
  );
};

var hadnleError = error =>
  console.log('Error occurred' + error.message);

var handleClickEvent = function (event) {
  event.preventDefault();

  let ssn = _selector('#student-ssn').value;
  if (!ssn) {
    alert('Valid SSN needed!');
    return;
  } else {
    getJSON(`/students/${ssn}`, showStudent).fail(hadnleError);
  }
};




const showStudentsGrades = R.curry(function (student, grades) {
  appendData(student, average(grades));
});

const handleError = error => console.log(error.message);

const processStudent = function (student) {
  if (student.address.country === 'US') {
    getJSON(`/students/${student.ssn}/grades`,
      showStudentsGrades(student),
      hadnleError
    );

    for (let i = 0; i < students.length i++) {
      processStudent(students[i]);
    }
  }
}