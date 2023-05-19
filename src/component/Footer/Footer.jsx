import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logoHome from '../../assets/logoHome.svg';
import logoChat from '../../assets/logoChat.svg';
import logoHistory from "../../assets/file-lines-solid.svg";

const Footer = () => {
    return (
        <div className="container-footer">
            <Link
                to="/"
                className="container-icons"
            >
                <img style={{ width: "20px" }} src={logoHome} alt="logo home" />
                <p>Home</p>
            </Link>
            <Link
                to="/chat"
                className="container-icons"
            >
                <img style={{ width: "22px" }} src={logoChat} alt="logo session" />
                <p>Chat with Us</p>
            </Link>
            <Link
                to="/historyChat"
                className="container-icons"
            >
                <img style={{ width: "15px" }} src={logoHistory} alt="logo session" />
                <p>History Chat</p>
            </Link>
        </div>
    );
};

export default Footer;