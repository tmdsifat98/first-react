import { Suspense } from "react";
import "./App.css";
import Batsman from "./components/batsman";
import Summery from "./components/summery";
import Counter from "./components/counter";
import Effect from "./components/useeffect";
import Friends from "./components/friends";

const friends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};
const users = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  return (await res).json();
};

function App() {
  const friendsData = friends();
  const userData = users();
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h1>loading.........</h1>}>
        <Friends friendsData={friendsData}></Friends>
      </Suspense>
      <Effect></Effect>
      <Counter></Counter>

      <Suspense fallback={<h2>Load hoccheee!!!</h2>}>
        <Summery userData={userData}></Summery>
      </Suspense>
      <Batsman></Batsman>
    </>
  );
}

export default App;
