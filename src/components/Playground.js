/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, {useState} from 'react';

function Playground(props) {
  const [count, setCount]= useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [weapon, setWeapon] = useState("scissors");
  // const state =  useState(0);
  // const count =  state(0);
  // const setCount = state[1]
  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
        <button onClick={evt => setSpinnerOn(false)}>Turn Spinner Off</button>
      </div>
    )
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={()  => setCount(count + 1)}> increment</button>
      <button onClick={()  => setCount(count - 1 )}> decrement</button>
      <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
      <button onClick={()  => setSpinnerOn(! spinnerOn)}>Toggle Spinner</button>
      <h3>Current weapon is: {weapon}</h3>
      <button onClick={()  => setWeapon("scissors")}>Pick scissors</button>
      <button onClick={()  => setWeapon("rock")}>Pick rock</button>
      <button onClick={()  => setWeapon("paper")}>Pick paper</button>
    </div>
  )
}

export default Playground;