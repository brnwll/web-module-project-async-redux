import React, { useState } from "react";

const Joke = ({ joke }) => {
  const [displayPunch, setDisplayPunch] = useState(false);

  const handleClick = () => {
    setDisplayPunch(!displayPunch);
  };

  return (
    <div className="joke">
      <h3>{joke.setup}</h3>
      {!displayPunch && (
        <button className="revealPunch" onClick={handleClick}>
          ?
        </button>
      )}
      {displayPunch && (
        <h4 className="punchline">
          <div className="emojis">🤣 🤭 😹 😆 😂</div>
          <div>{joke.punchline}</div>
        </h4>
      )}
    </div>
  );
};

export default Joke;
