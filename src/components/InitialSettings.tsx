import React from "react";

const InitialSettings = ({
  players,
  handleChange,
  setDisplaySettings,
}: any) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    setDisplaySettings(false);
  };
  return (
    <div className="settings">
      <form>
        <div>
          <h1>Player 1</h1>
          <input
            type="text"
            value={players[0].name}
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div>x</div>
        <div>
          <h1>Player 2</h1>

          <input
            type="text"
            value={players[1].name}
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className="settings-action">
          <button onClick={handleClick}>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default InitialSettings;
