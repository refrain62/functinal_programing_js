
// // isValid :: String -> Boolean
// function isValid(str) {
//   // ...
// }

// // makeAsyncHttp :: String, String, Array -> Boolean
// function makeAsyncHttp (method, url, data) {
//   // ...
// }



// // isValid :: String -> (String, String)
// isValid(' 444-44-4444 ');   // -> (false, 'Input is too long')


var t = (30, 60, 90);

// scala言語の場合
// var sumAnglesTriangle = t._1 + t._2 + t._3;
// console.log(sumAnglesTriangle);


// 独自に実装した Tupleデータ型
const Tuple = function( /* types */ ) {
  const typeInfo = Array.prototype.slice.call(arguments, 0);
  const _T = function( /*values */ ) {
    const values = Array.prototype.slice.call(arguments, 0);
    if (values.some(
      val => val === null || val === undefined
      )) {
        throw new ReferenceError('Tuples may not have any null avlues');
    }
    if (values.length !== typeInfo.length) {
      throw new TypeError('Tuple arity does not match its prototype');
    }
    values.map((val, index) => {
      this['_' + (index + 1)] = checkType(typeInfo[index])(val);
    }, this);
    Object.freeze(this);
  };
  _T.prototype.values = () => {
    return Object.keys(this)
      .map(k => this[k], this);
  };
  return _T;
};

const Status = Tuple(Boolean, String);
console.log(
  Status
);

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

// isValid :: String -> Status
const isValid = function (str) {
  if (str.length === 0) {
    return new Status(false, 'Invalid input. Expected non-empty value!');
  }
  else {
    return new Status(true, 'Success!');
  }
}

console.log(
  isValid(normalize(trim('444-44-4444')))
);
// -> (true, 'Success!')

console.log(
  isValid(normalize(trim(' 444-44-4444 ')))
);
// -> (false, 'Invalid input. Expected non-empty value!')

