import Button from "./Button"
import {useState} from "react"
import {AiFillCaretUp} from "react-icons/ai";
import {AiFillCaretLeft} from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretRight} from "react-icons/ai";


const NavKeys = ({openModal}) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show)
  }
  return (
      <div>
        <button className="btn btn-main" onClick={toggleShow}>NAVIGATION KEYS</button>
        {show && <div className="navkeys">
        <Button val={"ins"} name={"INS"} openModal={openModal}/>
        <Button val={"home"} name={"HOME"} openModal={openModal}/>
        <Button val={"pgup"} name={"PGUP"} openModal={openModal}/>
        <Button val={"del"} name={"DEL"} openModal={openModal}/>
        <Button val={"end"} name={"END"} openModal={openModal}/>
        <Button val={"pgdn"} name={"PGDN"} openModal={openModal}/>
        <Button val={"uparrow"} name={<AiFillCaretUp />} openModal={openModal}/>
        <Button val={"leftarrow"} name={<AiFillCaretLeft />} openModal={openModal}/>
        <Button val={"downarrow"} name={<AiFillCaretDown />} openModal={openModal}/>
        <Button val={"rightarrow"} name={<AiFillCaretRight />} openModal={openModal}/>
    </div>}
    
    </div>
  )
}

export default NavKeys