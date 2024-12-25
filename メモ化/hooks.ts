import { useState, useEffect, useCallback } from 'react';

export const CounterComponent = () => {
  const [count, setCount] = useState(0);

  // カウントアップのコールバック関数をメモ化
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);

  // increment関数に依存して副作用を実行
  useEffect(() => {
    console.log('Increment funciton changed');
    // 他の処理や副作用を実行
    // ...
  }, [increment]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

