import React, { useState } from "react";
import "./FantasyList.css";

type Footballer = {
  name: string;
  position: string;
};

function FantasyList() {
  const [footballers, setFootballers] = useState<Footballer[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");

  const handlePlayerNameChange = (event: any) => {
    setPlayerName(event.target.value);
  };

  const handlePlayerPositionChange = (event: any) => {
    setPlayerPosition(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setFootballers([
      ...footballers,
      { name: playerName, position: playerPosition },
    ]);
    setPlayerName("");
    setPlayerPosition("");
  };

  const handleDelete = (index: number) => {
    const newFootballers = [...footballers];
    newFootballers.splice(index, 1);
    setFootballers(newFootballers);
  };

  const handleClearAll = () => {
    setFootballers([]);
  };

  return (
    <div className="fantasy-list-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="player-name">Player Name:</label>
          <input
            type="text"
            id="player-name"
            value={playerName}
            onChange={handlePlayerNameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="player-position">Position:</label>
          <select
            id="player-position"
            value={playerPosition}
            onChange={handlePlayerPositionChange}
            required
          >
            <option value="">--Select Position--</option>
            <option value="QB">Quarterback (QB)</option>
            <option value="RB">Running Back (RB)</option>
            <option value="WR">Wide Receiver (WR)</option>
            <option value="TE">Tight End (TE)</option>
          </select>
        </div>
        <button className="btn submit" type="submit">
          Add Player
        </button>
      </form>

      {footballers.length > 0 ? (
        <div className="fantasy-list">
          <h2>My Fantasy Football List</h2>
          <ul>
            {footballers.map((footballer: Footballer, index) => (
              <li key={index}>
                <span>
                  {footballer.name} ({footballer.position})
                </span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>

          <button className="btn clear" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      ) : (
        <div className="fantasy-list">
          <p>No footballers added yet.</p>
        </div>
      )}
    </div>
  );
}

export default FantasyList;
