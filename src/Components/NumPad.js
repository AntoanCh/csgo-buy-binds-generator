import Button from "./Button" 
import {useState} from "react"

const NumPad = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      <button className="btn-main" onClick={toggleShow}>NUMPAD</button>
      {show &&  <div className="numpad">
        <Button val={"NUMLK"} />
        <Button val={"/"} />
        <Button val={"*"} />
        <Button val={"-"} />
        <Button val={"7"} />
        <Button val={"8"} />
        <Button val={"9"} />
        <Button val={"plus"} />
        <Button val={"4"} />
        <Button val={"5"} />
        <Button val={"6"} />
        <Button val={"1"} />
        <Button val={"2"} />
        <Button val={"3"} />
        <Button val={"Enter"} />
        <Button val={"zero"} />
        <Button val={"."} />
      </div>}
      
    </div>
  )
}

export default NumPad