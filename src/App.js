
import './App.css';
import NumPad from "./Components/NumPad"
import NavKeys from "./Components/NavKeys"
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        
        <NumPad />
        <NavKeys />
      </div>
    </div>
  );
}

export default App;
