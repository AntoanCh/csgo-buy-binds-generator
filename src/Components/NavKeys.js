import Button from "./Button"
import {useState} from "react"

const NavKeys = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show)
  }
  return (
      <div>
        <button className="btn-main" onClick={toggleShow}>NAVIGATION KEYS</button>
        {show && <div className="navkeys">
        <Button val={"INS"} />
        <Button val={"HOME"} />
        <Button val={"PGUP"} />
        <Button val={"DEL"} />
        <Button val={"END"} />
        <Button val={"PGDN"} />
        <Button val={"upArr"} />
        <Button val={"leftArr"} />
        <Button val={"downArr"} />
        <Button val={"rightArr"} />
    </div>}
    
    </div>
  )
}

export default NavKeys