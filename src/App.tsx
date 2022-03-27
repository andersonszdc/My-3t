import React, { useEffect, useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import X from "./components/X";
import { Conditions } from "./conditions";

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

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [plays, setPlays] = useState([
    { index: 1, player: undefined },
    { index: 2, player: undefined },
    { index: 3, player: undefined },
    { index: 4, player: undefined },
    { index: 5, player: undefined },
    { index: 6, player: undefined },
    { index: 7, player: undefined },
    { index: 8, player: undefined },
    { index: 9, player: undefined },
  ]);

  useEffect(() => {
    if (Conditions(plays)) {
      const winner = currentPlayer === 1 ? 2 : 1;
      console.log(`Vitória do player ${winner}`);
    }
  }, [currentPlayer, plays]);

  return (
    <>
      <h1 className="player"> Player {currentPlayer}</h1>
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
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setCurrentPlayer((prev: number) => (prev === 1 ? 2 : 1));
    const newPlays = plays;
    newPlays[data.index - 1].player = currentPlayer;
    setPlays(newPlays);
  };
  return (
    <div className="wrapper-item" onClick={handleClick}>
      {isClicked && (data.player === 1 ? <Circle /> : <X />)}
    </div>
  );
};
