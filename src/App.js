import './App.css';
import Diapositiva from "./components/Diapositiva";
import { DatosDiapos } from './components/DatosDiapos';

function App() {
  return (
    <div className="App">
       <Diapositiva diapositivas={DatosDiapos} />
    </div>
  );
}

export default App;
