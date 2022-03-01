// import {AiFillCaretUp} from "react-icons/ai";
// import {AiFillCaretLeft} from "react-icons/ai";
// import {AiFillCaretDown} from "react-icons/ai";
// import {AiFillCaretRight} from "react-icons/ai";

const Button = ({val, openModal, name}) => {
  return (
    <div className={val}>
        <button className="btn btn-key" onClick={() => {openModal(val)}}>{name}</button>
    </div>
  )
}

export default Button