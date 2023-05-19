import React from 'react';
import './Modal.css';
import ChatGpt from '../ChatGpt/ChatGpt.jsx';
import HistoryChat from '../HistoryChat/HistoryChat.jsx';
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home.jsx';

const Modal = (props) => {
    const { setShowModal, showModal } = props;


    // const handleCloseModal = () => {
    //     setShowModal(false)
    // };

    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* <div className="modal-header">
                    <h3>Rackoot-Asistant</h3>
                    <button className="close-button" onClick={handleCloseModal}>
                        X
                    </button>
                </div> */}
                <div>
                </div>
                <Routes>
                    <Route path="/" element={<Home setShowModal={setShowModal} showModal={showModal}
                    />}></Route>
                    <Route path="/chat" element={<ChatGpt setShowModal={setShowModal} showModal={showModal}/>}></Route>
                    <Route path="/historyChat" element={<HistoryChat />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Modal;













