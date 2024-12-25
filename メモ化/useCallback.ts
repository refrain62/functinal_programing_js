// 子コンポーネント
import { memo } from 'react';

type Props = {
  counter: () => void;
};

export const CounterComponent = memo(({ count }: Props) => {
  console.log('render CounterComponent');
  return (
    <div>
      <h2 style={{ color: 'blue' }}>Counter Component</h2>
      <button onClick={counter}>count up in CounterComponent</button>
    </div>
  );
});


// 親コンポーネント
import { useCallback, useState } from 'react';
import './App.css';
import { CalculationComponent } from './CounterComponent';

function App() {
  const [count, setCount] = useState(0);
  const [countV2, setCountV2] = useState(0);

  // Propsとして渡す関数
  const counter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const counterV2 = useCallBack(() => {
    setCountV2((prev) => prev + 1);
  }, [setCountV2]);

  return (
    <>
      <p>{count}</p>
      <button onClick={counter}>count up</button>
      <p>{countV2}</p>
      <button onClick={counterV2}>count up V2</button>
      <br />
      <CounterComponent counter={counter} />
    </>
  );
}

export default App;
