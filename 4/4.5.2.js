const str = `We can only see a short distance ahead but we can see plenty there that needs to be done`;
const explode = (str) => str.split(/\s+/);
const count = (arr) => arr.length;

const countWords = compose(count, explode);

console.log(
  countWords(str)
);
// -> 19


// compose 関数の実装
function compose(/* fns */) {
  let args = arguments;
  let start = args.length - 1;

  return function() {
    let i = start;
    let result = args[start].apply(this, arguments);
    while (i--) {
      result = args[i].call(this, result);
    }
    return result;
  };
}

