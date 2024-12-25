import { memo } from 'react';

export const HavyCalculationComponent = memo((props) => {
  // 重い計算や処理を行う関数
  const performHeavyCalclation = (value) => {
    // 重い計算や処理の実装
    // 例えば、非常に時間のかかるループ処理や再帰処理などを想定
    let result = 0;
    for (let i = 0; i < value; i++) {
      result += i;
    };
    return result;
  };

  // props が変更されない限り、同じ結果を返す(useMemoについては後述)
  const sameResultEveryTime = performHeavyCalclation(props.value)

  return (
    <div>
      <p>入力値： {props.value}</p>
      <p>計算結果： {sameResultEveryTime}</p>
    </div>
  );
});

