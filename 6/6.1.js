QUnit.test('Test Find Person', function(assert) {
  const ssn = '444-44-4444';
  const p = findPerson(ssn);
  assert.equal(p.ssn, ssn);
});


