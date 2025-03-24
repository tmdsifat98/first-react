import { useState } from "react";

export default function Batsman() {
  const [sixes, setSixes] = useState(0);
  const [runs, setRuns] = useState(0);
  const singleRuns = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const doubleRuns = () => {
    const updatedRuns = runs + 2;
    setRuns(updatedRuns);
  };
  const fourRuns = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };
  const sixRuns = () => {
    sixCount();
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
  };
  const sixCount = () => {
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
  };
  return (
    <div>
      {runs >= 50 && <p>Congrast!!!!!!!!!!!</p>}
      <p>sixes: {sixes}</p>
      <h3>player : Bangla tiger</h3>
      <h1>score : {runs} </h1>
      <button onClick={singleRuns}>add 1</button>
      <button onClick={doubleRuns}>add 2</button>
      <button onClick={fourRuns}>add 4</button>
      <button onClick={sixRuns}>add 6</button>
    </div>
  );
}
