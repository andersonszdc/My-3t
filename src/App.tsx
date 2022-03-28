import React, { useEffect, useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import X from "./components/X";
import { Conditions } from "./conditions";
import Portal from "./HOC/Portal";

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const DEFAULT_PLAYS = [
  { index: 1, player: undefined },
  { index: 2, player: undefined },
  { index: 3, player: undefined },
  { index: 4, player: undefined },
  { index: 5, player: undefined },
  { index: 6, player: undefined },
  { index: 7, player: undefined },
  { index: 8, player: undefined },
  { index: 9, player: undefined },
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [displayWinner, setDisplayWinner] = useState(false);
  const [displayDraw, setDisplayDraw] = useState(false);
  const [plays, setPlays] = useState(DEFAULT_PLAYS);

  const resetGame = () => {
    setCurrentPlayer(1);
    setDisplayWinner(false);
    setPlays(DEFAULT_PLAYS);
  };

  useEffect(() => {
    if (Conditions(plays)) {
      setDisplayWinner(true);
    } else if (plays.every((play) => play.player !== undefined)) {
      setDisplayDraw(true);
    }
  }, [currentPlayer, plays]);

  return (
    <>
      <div className="action">
        <button onClick={resetGame}>reset</button>
        <button onClick={resetGame}>setting</button>
      </div>
      {!displayWinner && <h1 className="player"> Player {currentPlayer}</h1>}
      <div className="App">
        {plays.map((data, index) => (
          <Item
            key={index}
            data={data}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            plays={plays}
            setPlays={setPlays}
          />
        ))}
      </div>
      {(displayWinner || displayDraw) && (
        <Portal>
          <div className="scoreboard-wrapper">
            <div className="scoreboard">
              {displayWinner && `Player ${currentPlayer === 1 ? 2 : 1} won!`}
              {displayDraw && `Draw!`}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default App;

const Item = ({
  data,
  currentPlayer,
  setCurrentPlayer,
  plays,
  setPlays,
}: any) => {
  const handleClick = () => {
    if (!plays[data.index - 1].player) {
      setCurrentPlayer((prev: number) => (prev === 1 ? 2 : 1));
      const newPlays = plays;
      newPlays[data.index - 1].player = currentPlayer;
      setPlays(newPlays);
    }
  };
  return (
    <div className="wrapper-item" onClick={handleClick}>
      {data.player === 1 && <Circle />}
      {data.player === 2 && <X />}
    </div>
  );
};
