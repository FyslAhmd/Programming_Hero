import "./App.css";
import Counter from './Counter';
import Batsman from './Batsman';

function App() {
  function handleClick1() {
    alert('Button 1 Clicked');
  }
  const handleClick2 = () => {
    alert('Button 2 Clicked');
  }
  const handleClick4 = (num) => {
    alert(`Total Value is ${num+5}`)
  }

  return (
    <>
      <h3>React Core Concepts Part-2</h3>
      
      <Batsman></Batsman>

      <Counter></Counter>
      
      <button onClick={handleClick1}>Click Me 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=> alert('Button 3 Clicked')}>Click Me 3</button>
      <button onClick={()=> handleClick4(10)}>Click Me 4</button>
    </>
  );
}

export default App;
