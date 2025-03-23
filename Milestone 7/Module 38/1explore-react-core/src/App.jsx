import "./App.css";
import ToDo from './ToDo';
import Actor from './Actor';
import Singer from './Singer';

function App() {
  const actors = ['Tom Hanks', 'Tom Cruise', 'Tom Hardy', 'Tom Holland', 'Tom Felton'];
  const singers = [
    {name: 'Arijit Singh', age: 34},
    {name: 'Atif Aslam', age: 38},
    {name: 'Arman Malik', age: 26},
  ]
  return (
    <>
      <h1>React Core Concepts</h1>
      {singers.map(singer => <Singer singer={singer}></Singer>)}

      {actors.map(actor => <Actor actName={actor}></Actor>)}

      {/* <ToDo task='Learn React' isDone={true}></ToDo>
      <ToDo task='Revise JS' isDone={false}></ToDo>
      <ToDo task='Learn Next JS' isDone={false}></ToDo> */}

      {/* <Player name='Faysal Patwary' run='105'></Player>
      <Player name='Russel Patwary' run='09'></Player>
      <Student name='Faysal Ahmed' roll='4699'></Student>
      <Student name='Esrat Jahan' roll='4690'></Student>
      <Text></Text> */}
    </>
  );
}

function Player({name, run}) {
  return (
    <div className="student">
      <h2>Name: {name}</h2>
      <h2>Run : {run}</h2>
    </div>
  )
}

function Student(info) {
  return (
    <div className="student">
      <h2>Student Information</h2>
      <p>Name: {info.name}</p>
      <p>Roll: {info.roll}</p>
    </div>
  )
}

function Text() {
  let name = "Faysal Ahmad Patwary";
  const preStyle = {
    color: 'red',
    backgroundColor: 'green',
    border: '2px solid yellow'
  }
  return (
    <div style={preStyle}>
      <h2>This is my First React App</h2>
      <h2>I'm {name}</h2>
    </div>
  );
}

export default App;
