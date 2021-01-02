import React from 'react'
import { FaDivide, FaTimes } from 'react-icons/fa'
import {useGlovalContext} from './context'
const Modal = () => {
  const {popUp,notShowPopUp} = useGlovalContext()
  return (
    <div className={`modal-overlay ${popUp && 'show-modal'}`}>
      <div className="modal-container">
        <h3>modal cont</h3>
        <button className="close-modal-btn" onClick={notShowPopUp}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
