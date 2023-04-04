

import './App.css';
import { Control } from './components/Control';
import {Stepper} from "./components/Stepper"
function App() {
  return (
    <div className="App">
      <Stepper>
        <Control/>
      </Stepper>
    </div>
  );
}

export default App;
