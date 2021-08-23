import logo from './logo.svg';
import './App.css';
import Firebaseposter from "./components/firebaseposter";
import "./firebase/firebase";

function App() {


  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Firebaseposter  />
          </header>
      </div>
  );
}

export default App;
