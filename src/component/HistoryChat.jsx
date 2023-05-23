import { Link } from 'react-router-dom';
import backLogo from '../assets/arrow-left-solid.svg'
import React, { useState, useEffect } from 'react';
import robotLogo from '../assets/asistente-de-robot.png';
import noMessage from "../assets/noMessage.svg"
import styled from "styled-components"


const email = "pau@gmail.com";
const BASE_URL = 'https://chatbot-dev.up.railway.app/api/chatgpt';


const ContainerHistoryChat = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`
const ContainerLinkHistoryChat = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-decoration: none;
  color: black;
  position: fixed;
  align-items: center;
  right: 10px;
  margin: 10px 20px;
`
const ChatHistory = styled.div`
  height: 100%;
  width: 90%;
  margin-top: 15%;
  margin-bottom: 20px;
`

const ContainerResponse = styled.div`
  padding: 2% 5%;
  margin: 0;
`

const PromptHistory = styled.div`
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 4%;
  margin-bottom: 2%;
`

const MessageHistory = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 8px;
  padding: 4%;
`

const ContainerEmptyHistory = styled.div`
  margin: 30% 10%;
  text-align: center;
`

const EmptyHistoryText = styled.p`
  font-size: 1.4rem;
`

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
        <ContainerHistoryChat>
            <ContainerLinkHistoryChat
                to="/"
            >
                <img style={{ width: "15px" }} src={backLogo} alt="back home" />
                <span>Back</span>
            </ContainerLinkHistoryChat>
            <ChatHistory>
                {historyChat.length > 0 ? historyChat.map((e, idx) => {

                    return (
                        <ContainerResponse key={idx}>
                            <div>
                                <PromptHistory >
                                    - {e.prompt}
                                </PromptHistory>
                                <MessageHistory>
                                    <img style={{ width: "20px", marginRight: "8px" }} src={robotLogo} alt="image robot" />
                                    <span>{e.message}</span>
                                </MessageHistory>
                            </div>
                        </ContainerResponse>
                    )
                }) : <ContainerEmptyHistory>
                    <img src={noMessage} style={{ width: "200px" }} alt="no history messages" />
                    <EmptyHistoryText>You don't have any message yet.</EmptyHistoryText>
                </ContainerEmptyHistory>}
            </ChatHistory>
        </ContainerHistoryChat>
    );
};

export default HistoryChat;