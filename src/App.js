import React, { useCallback, useState } from "react";

import "./styles.scss";
import { Matrix } from './Matrix';

import levels from './levels';

const App = () => {
  const [level, setLevel] = useState(() => levels.Logar);
  const [round, setRound] = useState(() => 0);
  const [menuOpen, setMenuOpen] = useState(() => false);

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
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        {Object.values(levels).map(l => <button onClick={() => {
          setLevel(levels[l.title])
          setMenuOpen(false);
          setRound(0);
        }}><h2>{l.title}</h2></button>)}
      </div>
      <h2 className='level-title'>
        {`${level.title}`}
        <div className='button' onClick={() => setMenuOpen((prev) => !prev)}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </h2>
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
