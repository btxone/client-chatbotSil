import React from 'react';
import ChatGpt from './ChatGpt.jsx';
import HistoryChat from './HistoryChat.jsx';
import { Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import styled from 'styled-components';


const ContainerModal = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    max-width: 430px; 
    max-height: 550px;
    height: 550px;
    width: 430px;
    margin-right: 10px;
    margin-bottom: 110px;
    `


const Modal = (props) => {
    const { setShowModal, showModal } = props;


    // const handleCloseModal = () => {
    //     setShowModal(false)
    // };

    return (
        <ContainerModal>
            <Routes>
                <Route path="*" element={<Home setShowModal={setShowModal} showModal={showModal}/>}></Route>
                <Route path="/chat" element={<ChatGpt setShowModal={setShowModal} showModal={showModal}/>}></Route>
                <Route path="/historyChat" element={<HistoryChat />}></Route>
            </Routes>
        </ContainerModal>
    );
}

export default Modal;













