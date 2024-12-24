function makeAddFunction(amount) {
  function add(number) {
    return number + amount;
  }
  return add;
}

function makeExponentialFunction(base) {
  function raise (exponent) {
    return Math.pow(base, exponent);
  }
  return raise;
}

var addTenTo = makeAddFunction(10);
console.log(
  addTenTo(10) // -> 20
);

var raiseThreeTo = makeExponentialFunction(3);
console.log(
  raiseThreeTo(2) // -> 9
);


var outerVar = 'Outer';

function makeInner(params) {
  var innerVar = 'Inner';

  function inner() {
    console.log(`I can see: ${outerVar}, ${innerVar}, and ${params}`);
  }
  return inner;
}

var inner = makeInner('param');
inner();

