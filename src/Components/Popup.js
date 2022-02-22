
import Modal from "react-modal";
import { FaRegTimesCircle} from "react-icons/fa"

const Popup = ({ primary, modalIsOpen, closeModal, currentKey, handleSubmit, changeGear, changePrimary, changeSecondary}) => {
     return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
            content: {
                backgroundColor: "#ccc",
                maxWidth: "700px",
                margin: "auto"
            },
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.7)"
            }
        }
        }
    >     <button onClick={closeModal} className="btn btn-close" ><FaRegTimesCircle /></button>
        <h2>Bind To "{currentKey}" </h2>
        <div>
           <form onSubmit={handleSubmit} >
               <label htmlFor="">Primary Weapons:</label><br />
               <select name="primary" className="select" onChange={changePrimary} value={primary}>
                   <option value="">----Rifles----</option>
                   <option value="buy famas;">FAMAS</option>
                   <option value="buy galilar;">GALIL AR</option>
                   <option value="buy m4a1;">M4A1-S/M4A4</option>
                   <option value="buy ak47;">AK-47</option>
                   <option value="buy ssg08;">SSG 08</option>
                   <option value="buy aug;">AUG</option>
                   <option value="buy sg553;">SG 553</option>
                   <option value="buy awp;">AWP</option>
                   <option value="buy scar20;">SCAR-20</option>
                   <option value="buy g3sg1;">G3SG1</option>
                   <option value="">----SMGs----</option>
                   <option value="buy mp9;">MP9</option>
                   <option value="buy mac10;">MAC-10</option>
                   <option value="buy mp7;">MP7</option>
                   <option value="buy ump45;">UMP-45</option>
                   <option value="buy p90;">P90</option>
                   <option value="buy bizon;">PP BIZON</option>
                   <option value="">----HEAVY----</option>
                   <option value="buy nova;">Nova</option>
                   <option value="buy xm1014;">XM1014</option>
                   <option value="buy mag7;">MAG-7</option>
                   <option value="buy sawedoff;">Sawed-Off</option>
                   <option value="buy m249;">M249</option>
                   <option value="buy negev;">Negev</option>
               </select><br />
               <label htmlFor="">Secondary Weapons:</label><br />
               <select name="secondary" id="" className="select" onChange={changeSecondary}>
                   <option value="">----Pistols----</option>
                   <option value="buy hkp2000;">P2000/USP-S</option>
                   <option value="buy glock;">Glock-18</option>
                   <option value="buy elite;">Dual Barettas</option>
                   <option value="buy p250;">P250</option>
                   <option value="buy fiveseven;">Five-SeveN/CZ75-Auto</option>
                   <option value="buy tec9;">Tec-9/CZ75-Auto</option>
                   <option value="buy deagle;">Desert Eagle</option>
                   <option value="buy revolver;">R8 Revolver</option>
               </select>
               <p>Granades:</p>              
               <label>
                    <input type="checkbox" value="buy incgrenade;"  onChange={changeGear}/>Incendiary
               </label><br />              
               <label>
                    <input type="checkbox" value="buy molotov;" onChange={changeGear}/>Molotov
               </label><br />              
               <label>
                    <input type="checkbox" value="buy decoy;" onChange={changeGear}/>Decoy              
               </label><br />
               <label>
                    <input type="checkbox" value="buy flashbang;" onChange={changeGear}/>Flashbang 
               </label><br />
               <label>
                    <input type="checkbox" value="buy hegrenade;" onChange={changeGear}/>High Explosive
               </label><br />
               <label>
                    <input type="checkbox" value="buy smokegrenade;" onChange={changeGear}/>Smoke
               </label><br />
               <p>Gear:</p>
               
               <label>
                    <input type="checkbox" value="buy vest;" onChange={changeGear} />Kevlar 
               </label><br />
               <label>
                    <input type="checkbox" value="buy vesthelm;" onChange={changeGear} />Kevlar + Helmet
               </label><br />
               <label>
                    <input type="checkbox" value="buy defuser;" onChange={changeGear}/>Defuse Kit 
               </label><br />
               <label>
                    <input type="checkbox" value="buy taser 34;" onChange={changeGear}/>Zeus x27 
               </label><br />
               <input className="btn btn-save" type="submit" value="Save" />
           </form>
        </div>
        
        <button onClick={closeModal} className="btn btn-close1" >Close</button>
            </Modal>
  )
}

export default Popup