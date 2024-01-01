import { useState, useRef } from "react";

export default function Player() {
  const PlayerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();

  const clickHandler = () => {
    setEnteredPlayerName(PlayerName.current.value);
    PlayerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={PlayerName} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
