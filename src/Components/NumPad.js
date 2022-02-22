import Button from "./Button" 
import {useState} from "react"

const NumPad = ({openModal}) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      <button className="btn btn-main" onClick={toggleShow}>NUMPAD</button>
      {show &&  <div className="numpad">
        <Button val={"NUMLK"} name={"NUMLK"} />
        <Button val={"kp_slash"} name={"/"} openModal={openModal} />
        <Button val={"kp_multiply"} name={"*"}  openModal={openModal}/>
        <Button val={"kp_minus"} name={"-"}  openModal={openModal}/>
        <Button val={"kp_home"} name={"7"}  openModal={openModal}/>
        <Button val={"kp_uparrow"} name={"8"}  openModal={openModal}/>
        <Button val={"kp_pgup"} name={"9"}  openModal={openModal}/>
        <Button val={"kp_plus"} name={"+"}  openModal={openModal}/>
        <Button val={"kp_leftarrow"} name={"4"}  openModal={openModal}/>
        <Button val={"kp_5"} name={"5"}  openModal={openModal}/>
        <Button val={"kp_rightarrow"} name={"6"}  openModal={openModal}/>
        <Button val={"kp_end"} name={"1"}  openModal={openModal}/>
        <Button val={"kp_downarrow"} name={"2"}  openModal={openModal}/>
        <Button val={"kp_pgdn"} name={"3"}  openModal={openModal} />
        <Button val={"kp_enter"} name={"Enter"} openModal={openModal}/>
        <Button val={"kp_ins"} name={"0"} openModal={openModal}/>
        <Button val={"kp_del"} name={"."} openModal={openModal}/>
      </div>}
      
    </div>
  )
}

export default NumPad