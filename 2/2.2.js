class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get address() {
    return this._address;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(year) {
    this._birthYear = year;
  }

  set address(addr) {
    this._address = addr;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssm, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }
}

// Personクラス
peopleInSameCountry(friends) {
  var result = [];
  for (let idx in friends) {
    var friend = friends[idx];
    if (this.address.country === friend.address.country) {
      result.push(friend);
    }
  }
  return result;
}

// Studentクラス
studentsInSameCountryAndSchool(friends) {
  var closeFriends = super.peopleInSameCountry(friends);
  var result = [];
  for (let idx in closeFriends) {
    var friend = closeFriends[idx];
    if (friend.school === this.school) {
      result.push(friend);
    }
  }
  return result;
}

var curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn state');
curry.address = new Address('Us');

var turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton');
turing.address = new Address('England');

var church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton');
church.address = new Address('US');

var kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton');
kleene.address = new Address('US');

console.log(
church.studentsInSameCountryAndSchool([curry, turing, kleene])
// => [kleene]
);


// 関数型ソリューションでは課題を小さな関数に分割します
function selector(country, school) {
  return function(student) {
    return student.address.country() === country && 
      student.school() === school;
  };
}

var findStudentsBy = function(friends, selector) {
  return friends.filter(selector);
}

findStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton'));
// -> [kleene]
