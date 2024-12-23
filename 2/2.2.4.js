var person = new Person('Alonzo', 'Church', '444-44-4444');
const lastnameLens = R.lensProp('lastname');

R.view(lastnameLens, person);
// -> 'Church'

var newPerson = R.set(lastnameLens, 'Mourning', person);
newPerson.lastname; // -> 'Mourning'
person.lastname; // -> 'Church


person.address = new Address('US', 'NJ', 'Princeton', zipCode('08544', '1234'), 'Alexander St.');

var zipPath = ['address', 'zip'];
var ZipLens = R.lens(R.path(zipPath), R.assocPath(zipPath));
R.view(ZipLens, person);
// -> zipCode('08544', '1234')


var newPerson = R.set(ZipLens, zipCode('90210', '5678'), person);
var newZip = R.view(ZipLens, newPerson);
// -> zipCode('90210', '5678')
var originalZip = R.view(ZipLens, person);
// -> zipCode('08544', '1234')
newZip.toString() !== originalZip.toString(); // -> true

