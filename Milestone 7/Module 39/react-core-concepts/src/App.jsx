import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from './Friends';

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();

  function handleClick1() {
    alert("Button 1 Clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };
  const handleClick4 = (num) => {
    alert(`Total Value is ${num + 5}`);
  };

  return (
    <>
      <h3>React Core Concepts Part-2</h3>

      <Suspense fallback={<h3 className="card">Friends are loading....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3 className="card">Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick1}>Click Me 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert("Button 3 Clicked")}>Click Me 3</button>
      <button onClick={() => handleClick4(10)}>Click Me 4</button>
    </>
  );
}

export default App;
