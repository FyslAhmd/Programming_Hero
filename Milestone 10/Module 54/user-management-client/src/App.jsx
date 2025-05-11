import "./App.css";
import Users from "./components/users";

const userPromise = fetch("http://localhost:5000/users").then((RES) =>
  RES.json()
);

function App() {
  return (
    <>
      <h1>User Management Application</h1>
      <Users userPromise={userPromise}></Users>
    </>
  );
}

export default App;
