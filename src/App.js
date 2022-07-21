import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [height,setHeight] = useState(0);
  const [superPower,setSuperPower] = useState("");
  const [displayCharacter,setDisplayCharacter] = useState(false);

  return (
    <div className="App">
      <h1>Create A Hero</h1>
      <label>Name:</label>
      <input type="text" placeholder='enter name'  onChange={(e)=> setName(e.target.value)}/>
      <label>Age:</label>

      <input type="number" onChange={(e)=> setAge(e.target.value)}/>
      <label>Height:</label>

      <input type="number" onChange={(e)=> setHeight(e.target.value)}/>
      <label>superPower:</label>

      <input type="text" onChange={(e)=> setSuperPower(e.target.value)}/><br />
      <button onClick={() => setDisplayCharacter(true)}>DisplayCharacter</button>
    {displayCharacter && <div>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>

      <h3>Height : {height}</h3>
      <h3>superPower : {superPower}</h3>

      </div>}
    </div>
  );
}

export default App;
