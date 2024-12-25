// isEmpty :: String -> Boolean
const isEmpty = s => !s || !s.trim();

console.log(
  isEmpty(null)
);
// -> true

console.log(
  isEmpty('test')
);
// -> false

