import { Link } from 'react-router-dom';
import backLogo from '../../assets/arrow-left-solid.svg'
import React, { useState, useEffect } from 'react';
import robotLogo from '../../assets/asistente-de-robot.png';
import noMessage from "../../assets/noMessage.svg"
import './HistoryChat.css'

const email = "pau@gmail.com";
const BASE_URL = 'https://chatbot-dev.up.railway.app/';

const HistoryChat = () => {
    const [historyChat, setHistoryChat] = useState([])


    useEffect(() => {
        async function fetchHistoryChat() {
            const chatHistory = await getChatGPT(email);
            setHistoryChat(chatHistory);
        }
        fetchHistoryChat();
    }, [])


    const getChatGPT = async (email) => {
        try {
            const response = await fetch(`${BASE_URL}?email=${email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    }



    return (
        <div className='container-historyChat'>
            <Link
                to="/"
                className='container-linkHistoryChat'
            >
                <img style={{ width: "15px" }} src={backLogo} alt="back home" />
                <span>Back</span>
            </Link>
            <div className='chat-history'>
                {historyChat.length > 0 ? historyChat.map((e, idx) => {

                    return (
                        <div className='container-response' key={idx}>
                            <div>
                                <div className='prompt-history' >
                                    - {e.prompt}
                                </div>
                                <div className='message-history'>
                                    <img style={{ width: "20px", marginRight: "8px" }} src={robotLogo} alt="" />
                                    <span>{e.message}</span>
                                </div>
                            </div>
                        </div>
                    )
                }) : <div className='container-emptyHistory'>
                    <img src={noMessage} style={{ width: "200px" }} alt="" />
                    <p>You don't have any message yet.</p>
                </div>}
            </div>
        </div>
    );
};

export default HistoryChat;