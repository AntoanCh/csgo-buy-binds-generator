
import {useState} from "react";


const Generate = ({binds, onCopy}) => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show)
  }
  const cpyBtnStyles = {
    float: "right",
    padding: "2px 10px",
    backgroundColor: "black",
    color: "orange",
    fontWeight: "800",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
  return (
    <div >
         <button className="btn btn-main" onClick={toggleShow}>{show ? "HIDE BINDS" : "SHOW CURRENT BINDS"}</button>
         <p>Copy and Paste the following commands in your game's <i>autoexec.cfg</i></p>
         {show && <div className="binds">
             <button style = {cpyBtnStyles} onClick={onCopy}>Copy</button>
             <p id="result"> '//buy binds' <br />
             {binds.map(bind => 
              `bind "${bind[0]}" "${bind.filter(e => e !== bind[0]).join(" ")}" \n`)  } </p>
           
             </div>}
    </div>
  )
}

export default Generate