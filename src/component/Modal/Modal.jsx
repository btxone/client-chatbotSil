import React from 'react';
import './Modal.css';
import ChatGpt from '../ChatGpt/ChatGpt.jsx';
import HistoryChat from '../HistoryChat/HistoryChat.jsx';
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home.jsx';
import { Navigate } from 'react-router-dom';

const Modal = (props) => {
    const { setShowModal, showModal } = props;


    // const handleCloseModal = () => {
    //     setShowModal(false)
    // };

    return (
        <div className="rckchat_modal">
            <Routes>
                <Route path="*" element={<Home setShowModal={setShowModal} showModal={showModal}/>}></Route>
                <Route path="/chat" element={<ChatGpt setShowModal={setShowModal} showModal={showModal}/>}></Route>
                <Route path="/historyChat" element={<HistoryChat />}></Route>
                {/* <Route path="*" element={<Navigate to="/home" />}></Route> */}
            </Routes>
        </div>
    );
}

export default Modal;













