import React , {useState} from 'react';
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

//en este componente se crearon los estados para mostrar home, chat y history. importante recordar si creamos otro de enviar como props todos los set para ocultarlos o mostrarlos. ejemplo: si creamos el componente profile: hay que crear otro estado de [profile, setProfile] y enviar este nuevo set a todos los componentes y setearlo en false, y al componente Profile enviar todos los set existentes y solo dejar el setProfile en true. 
const Modal = (props) => {
    const { setShowModal, showModal } = props;
    const [showHome, setShowHome] = useState(true)
    const [showChat, setShowChat] = useState(false)
    const [showHistory, setShowHistory] = useState(false)

    return (
        <ContainerModal>
            {showHome && <Home setShowModal={setShowModal} showModal={showModal} setShowHome={setShowHome} setShowChat={setShowChat} setShowHistory={setShowHistory}/>}
            {showChat && <ChatGpt setShowModal={setShowModal} showModal={showModal} setShowHome={setShowHome} setShowChat={setShowChat} setShowHistory={setShowHistory}/>}
            {showHistory && <HistoryChat setShowHome={setShowHome} setShowChat={setShowChat} setShowHistory={setShowHistory}/>}
        </ContainerModal>
    );
}

export default Modal;













