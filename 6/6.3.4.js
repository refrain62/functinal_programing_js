
// 6.3 findStudentの外部依存性をモックする(QunitとSinon.JSを利用)
var studentStore, mockContext;

Qunit.module('CH06', {
  beforeEach: function() {
    studentStore = DB('Students');
    mockContext = sinon.mock(studentStore);
  },
  afterEach: function() {
    mockContext.verify();
    mockContext.restore();
  }
});

QUnit.test('showStudent: findStudent returning null', function(assert) {
  mockContext.expects('get').once().returns(null);
  const findStudent = safefetchRecord(studentStore);
  
  assert.ok(findStudent('xxx-xx-xxxxx').isLeft);
});

QUnit.test('showStudent: findStudent returning valid object', function(assert) {
  mockContext.expects('find').once().returns(
    new student('Alonzo', 'Church', 'Princeton').setSsn('444-44-4444')
  );

  const findStudent = safefetchRecord(studentStore);
  assert.ok(findStudent('44-444-4444').isRight);
});


