function nagate(func) {
  return function() {
    return !func.apply(null, arguments);
  };
}

function isNull(val) {
  return val === null;
}

var isNotNull = nagate(isNull);

console.log(isNotNull(null)); // -> false
console.log(isNotNull({})); // ->true

