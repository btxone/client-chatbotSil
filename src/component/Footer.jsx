import React from "react";
import { Link } from "react-router-dom";
import logoHome from '../assets/logoHome.svg';
import logoChat from '../assets/logoChat.svg';
import logoHistory from "../assets/file-lines-solid.svg";
import styled from 'styled-components';

const ContainerFooter = styled.div`
    display: flex;
    align-self: end;
    justify-content: space-evenly;
    width: 100%;
    border-top-color: #cdcdcd;
    border-top-width: 3px;
    border-top-style: solid;
    justify-content: center;
    margin-top: 5%;
`
const ContainerLinkIcons = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    margin: 0;
    padding-top: 3%;
    cursor: pointer;
    text-decoration: none;
    color: black;
    background-color: transparent;
    border: none;

    &:hover, &:active{
        background-color: #dbdadb;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 20%;
        margin: 0;
        padding-top: 3%;
        cursor: pointer;
        background-color: #F0F0F0
    }
`

const Footertext = styled.p`
    font-size: 0.7rem;
    margin: 8 % 0;
    font-weight: bold;
`


const Footer = (props) => {
    const { setShowModal, showModal, setShowHome,  setShowChat, setShowHistory } = props

    const handlerHome = () =>{
        setShowHome(true)
        setShowChat(false)
        setShowHistory(false)
    }

    const handlerChat = () =>{
        setShowHome(false)
        setShowChat(true)
        setShowHistory(false)
    }
    const handlerHistory = () =>{
        setShowHome(false)
        setShowChat(false)
        setShowHistory(true)
    }
    return (
        <ContainerFooter>
            <ContainerLinkIcons onClick={()=>handlerHome()}>
                <img style={{ width: "20px" }} src={logoHome} alt="logo home" />
                <Footertext>Home</Footertext>
            </ContainerLinkIcons>
            <ContainerLinkIcons onClick={()=>handlerChat()}>
                <img style={{ width: "22px" }} src={logoChat} alt="logo session" />
                <Footertext>Chat with Us</Footertext>
            </ContainerLinkIcons>
            <ContainerLinkIcons onClick={()=>handlerHistory()}>
                <img style={{ width: "15px" }} src={logoHistory} alt="logo session" />
                <Footertext>History Chat</Footertext>
            </ContainerLinkIcons>
        </ContainerFooter>
    );
};

export default Footer;
