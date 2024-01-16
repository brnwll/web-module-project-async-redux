import React, { useState } from "react";

const Joke = ({ joke }) => {
  const [displayPunch, setDisplayPunch] = useState(false);

  const handleClick = () => {
    setDisplayPunch(!displayPunch);
  };

  return (
    <div>
      <h3>{joke.setup}</h3>
      {!displayPunch && (
        <button id="revealPunch" onClick={handleClick}>
          ❓
        </button>
      )}
      {displayPunch && <p>{joke.punchline}</p>}
    </div>
  );
};

export default Joke;
