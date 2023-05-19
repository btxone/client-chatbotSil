import './App.css'
import Modal from './component/Modal/Modal.jsx'
import React, { useState } from 'react';
import img from "./assets/logo2.png"
//este componente solo tiene el robot tierno, y llama al modal. 


function App() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (setShowModal) => {
    setShowModal(false)
  };

  return (
    <>
      <button className="chatbot-button" onClick={handleShowModal}>
        <img className='logo' src={img} alt="robot nice image" />
      </button>
      {showModal &&
        <>
          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      }

    </>
  )
}

export default App

