import {AiFillCaretUp} from "react-icons/ai";
import {AiFillCaretLeft} from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretRight} from "react-icons/ai";

const Button = ({val}) => {
    const btnDisplay = function(val) {
        switch(val) {
            case "plus":
                return "+";
            case "zero": 
                return "0";
            case "upArr":
                return <AiFillCaretUp />
            case "leftArr":
                return <AiFillCaretLeft />
            case "downArr":
                return <AiFillCaretDown />
            case "rightArr":
                return <AiFillCaretRight />
            default: return val
        }
    }
  return (
    <div className={val}>
        <button className="btn">{btnDisplay(val)}</button>
        
    </div>
  )
}

export default Button