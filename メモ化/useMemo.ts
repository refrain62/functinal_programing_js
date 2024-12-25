import { useMemo } from 'react';

export const HeavyCalclationComponent = (props) => {
  const performHeavyCalclation = (value) => {
    // 重い計算や処理の実装
    // 例えば、非常に時間のかかるループ処理や再帰処理などを想定
    let result = 0;
    for (let i = 0; i < value; i++) {
      result += i;
    };
    return result;
  };

  // propsが変更されない限り、同じ結果を返す
  const memoizedResult = useMemo(() => performHeavyCalclation(props.value), [props.value]);

  return (
    // JSXを返す
  );
};

// 計算結果を他のコンポーネントや処理で再利用する場合
type Props = {
  data: number[];
}

export const CalculationComponent = ({ data }: Props) => {
  const memoizedResult = useMemo(() => {
    // 重たい処理
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
  }, [data]);

  useEffect(() => {
    // memorizedResultを使用した処理
  }, [memoizedResult])

  return (
    // JSXを返す
  );
};

