import React, { useCallback, useState } from "react";

import "./styles.scss";
import { Matrix } from './Matrix';

import levels from './levels';

const App = () => {
  const [level, setLevel] = useState(() => levels.Logar);
  const [round, setRound] = useState(() => 0);

  const increment = (e) => {
    setRound(() => {
      return Math.max(0, round - 1);
    });
  };

  const decrement = (e) => {
    setRound(() => {
      return Math.min(level.rounds.length - 1, round + 1);
    });
  };



  return (
    <div className="App">
      <h2 className='level-title'>{`${level.title}`}</h2>
      <div className='level-pick'>
        <div className="button icon" onClick={increment}>
          <ion-icon name="chevron-back-circle-outline" />
        </div>
        <div>{level.rounds.length - round}</div>
        <div className="button icon" onClick={decrement}>
          <ion-icon name="chevron-forward-circle-outline" />
        </div>
      </div>
      <Matrix matrix={level.rounds[round].matrix} />
    </div>
  );
};

export default App;
