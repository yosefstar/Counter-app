import React, { useState } from 'react';

function Counter() {
  // useStateフックを使ってcount変数を0で初期化
  const [count, setCount] = useState(0);

  // クリックイベントのハンドラー
  function handleIncrement() {
    // setCountを呼び出して、countを1つ増やす
    setCount(count + 1);
  }

  function handleDecrement() {
    // setCountを呼び出して、countを1つ減らす
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      {/* +1ボタン */}
      <button onClick={handleIncrement}>+1</button>
      {/* -1ボタン */}
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
}

export default Counter;