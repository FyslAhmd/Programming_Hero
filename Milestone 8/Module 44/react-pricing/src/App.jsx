import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Pricings from "./components/pricings/Pricings";
import Charts from "./components/charts/Charts";
import axios from 'axios'
import Marks from "./components/marks/Marks";

const pricingpromise = fetch('pricing.json').then(res => res.json());

const marksPromise = axios.get('marks.json');

function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>

    <main className="px-20 my-20">
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Pricings pricingpromise={pricingpromise}></Pricings>
      </Suspense>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Marks marksPromise={marksPromise}></Marks>
      </Suspense>

      <Charts></Charts>
    </main>
    </>
  );
}

export default App;
