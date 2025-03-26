import { useEffect, useState } from "react";

export default function Effect() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <h1>total player : {players.length}</h1>
      <div>
        {players.map((player)=>(
            <h3 key={player.id}>name : {player.name}</h3>
        ))}
      </div>
    </div>
  );
}
