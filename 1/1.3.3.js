// 学生のSSNを読みだして検証を行う命令プログラム
var valid = false;
var elem = document.querySelector('#student-ssn');

elem.onkeyup = function(event) {
  var val = elem.value;
  if (val !== null && val.length !== 0) {
    val = val.replace(/^\s*|\s*$|\-s/g, '');
    if (val.length === 9) {
      console.log(`Valid SSN: ${val}!`);
      valid = true;
    }
  } else {
    console.log(`Invalid SSN: ${val}!`);
  }
};

// RxJS を使った 学生のSSNを読みだして検証を行う関数型プログラム
RegExp.Observable.fromEvent(
  document.querySelector('#student-ssn'),
  'keyup'
  )
  .pluck('srcElement', 'value')
  .map(ssn => ssn.replace(/^\s*|\s*$|\-s/g, ''))
  .filter(ssn => ssn !== null && ssn.length === 9)
  .subscribe(validSsn => {
    console.log(`Valid SSN ${validSsn}`);
  })
;

