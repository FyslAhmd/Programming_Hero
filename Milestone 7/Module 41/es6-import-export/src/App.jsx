import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
// import { add, diff, mul ,divide as div} from "./utility/Math/math";

const bottlePromise = fetch('./bottles.json').then(res=>res.json());

function App() {

  // const sum = add(10,20);
  // const sub = diff(10,5);
  // const multi = mul(10,2);
  // const divide = 10/2;
  // const vaag = div(10,5);
  // console.log(sum,sub,multi,divide,vaag);


  return (
    <>
      <h1>ES6 Import Export</h1>
      <Suspense>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
