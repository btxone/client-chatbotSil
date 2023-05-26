import Modal from './component/Modal.jsx'
import React, { useState } from 'react';
import img from "../public/assets/logo2.png";
import styled from 'styled-components';

const AppBtnBot = styled.button`
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 10px;
  border: none;
  background-color: transparent;
  width: 80px;
`

const ImgBot = styled.img`
   width: 100%;
`

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
      <AppBtnBot onClick={handleShowModal}>
        <ImgBot src={img} alt="robot nice image" />
      </AppBtnBot>
      {showModal &&
        <>
          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      }
    </>
  )
}

export default App

