// 値をラッピングするための関数データ型
class Wrapper {
  constructor (value) {
    this._value = value;
  }
  // map :: (A -> B) -> Wrapper(A) -> B
  map(f) {
    return f(this._value);
  };

  toString() {
    return 'Wrapper (' + this._value + ')';
  }
}

// wrap :: A -> Wrapper(A)
const wrap = (val) => new Wrapper(val);



const warapperValue = wrap('Get Functional');
wrappedValue.map(R.identity); // -> 'Get Functional'


wrappedValue.map(console.log);
wrappedValue.map(R.toString()); // -> 'GET FUNCTONAL'


const wrappedNull = wrap(null);
wrappedNull.map(doWork);


// fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
Wrapper.prototype.fmap = function (f) {
  return wrap(f(this.val));
}