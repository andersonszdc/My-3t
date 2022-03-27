import React, { useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import X from "./components/X";

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const spaces = [
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
  { index: 5 },
  { index: 6 },
  { index: 7 },
  { index: 8 },
  { index: 9 },
];

function App() {
  return (
    <div className="App">
      {spaces.map((data, index) => (
        <Item key={index} data={data} />
      ))}
    </div>
  );
}

export default App;

const Item = ({ data }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div onClick={() => setIsClicked(true)}>
      {(isClicked && <Circle />) || <X />}
    </div>
  );
};
