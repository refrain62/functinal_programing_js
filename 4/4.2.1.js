// 関数trimおよびnormalizeを使って関数パイプラインを構築する
// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

console.log(
  normalize(trim(' 444-44-4444 ')) // -> '444444444'
);
