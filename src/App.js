import {useState} from "react"
import './App.css';
import NumPad from "./Components/NumPad"
import NavKeys from "./Components/NavKeys"
import Header from "./Components/Header"
import Popup from "./Components/Popup"
import Modal from "react-modal"
import Generate from "./Components/Generate"
import Footer from "./Components/Footer"

Modal.setAppElement('#root');

function App() {
  const [binds, setBinds] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [currentKey, setCurrentKey] = useState("");

  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [gear, setGear] = useState([]);


  const openModal = (key) => {
    setIsOpen(true);
    setCurrentKey(key);
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const changePrimary = (event) => {
    setPrimary(event.target.value);
  }
  const changeSecondary = (event) => {
    setSecondary(event.target.value);
  }
  const changeGear = (event) => {
    if(event.target.checked === true) {
      setGear([
        ...gear,
        event.target.value
      ])
    } 
    if(event.target.checked === false) {
      setGear(gear.filter(item => item !== event.target.value))
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setBinds(
     [...binds, [currentKey, primary, secondary, ...gear]]
      );
    setPrimary('');
    setSecondary('');
    setGear([]);
    setCurrentKey('');
    closeModal();
  }
    const onCopy = () => {
      const result = document.getElementById("result"); 
      navigator.clipboard.writeText(result.innerText);
      console.log(result.innerText)
    }
    // result. = result.replace(/\n/, "")

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Generate binds={binds} onCopy={onCopy} />
        <NumPad openModal={openModal} />
        <NavKeys openModal={openModal} />
        
        <Popup  
        handleSubmit={handleSubmit} 
        changeGear={changeGear} 
        changeSecondary={changeSecondary} 
        changePrimary={changePrimary} 
        modalIsOpen={modalIsOpen} 
        closeModal={closeModal} 
        currentKey={currentKey} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
