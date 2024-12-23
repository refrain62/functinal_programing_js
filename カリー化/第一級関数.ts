// 生成
let calc = (x: number, y:number): number => x + y;
// 代入
calc = (x: number, y: number): number => x - y;

// 受け渡し
const diffLength = (a: string, b: string, fn: (x: number, y:number) => number): number => {
  return fn(a.length, b.length);
};

console.log(diffLength('aaa', 'a', calc));  // 2
