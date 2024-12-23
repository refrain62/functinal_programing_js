// 命令型
function printPeopleInTheUs(people) {
  for (let i = 0; i < people.length; i++) {
    var thisPerson = people[i];
    if (thisPerson.address.country === 'US') {
      console.log(thisPerson);
    }
  }
}

// p1 p2 p3 はすべてPerson型のインスタンス
printPeopleInTheUs([p1, p2, p3]);


// action関数で
function printPeople(people, action) {
  for (let i = 0; i < people.length; i++) {
    action (people[i]);
  }
}

var action function (person) {
  if (person.address.country === 'US') {
    console.log(person);
  }
}

printPeople(people, action);


// リファクタリング
function printPeople(people, selector, printer) {
  people.forEach(function (person) {
    if (selector(person)) {
      printer(person);
    }
  });
}

var inUS = person => person.address.country === 'US';

printPeople(people, inUS, console.log);

