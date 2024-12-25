function curry2(fn) {
  return function (firstArg) {
    return function (secondArg) {
      return fn(firstArg, secondArg);
    };
  };
}

const name = curry2((last, first) => new StringPair(last, first));
[fist, last] = name('Curry')('Haskell').values();

console.log(
  first
);
// -> 'Curry'

console.log(
  last
);
// -> 'Haskell'

console.log(
  name('Curry')
);
// Function

