import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import backLogo from '../assets/circle-with-an-arrow-pointing-to-left_icon-icons.com_73625.png'
import sendLogo from '../assets/arrow-pointing-right-in-a-circle_icon-icons.com_73672.png'
import robotLogo from '../assets/asistente-de-robot.png'
import styled from "styled-components"

const email = "pau@gmail.com";
const BASE_URL_SERVER = process.env.BASE_URL

const ContainerChatGpt = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(24, 25, 25);
  background: linear-gradient(
    180deg,
    rgba(24, 25, 25, 0.8491771708683473) 8%,
    rgba(61, 51, 51, 0.7483368347338936) 18%,
    rgba(226, 222, 222, 0.9051995798319328) 49%,
    rgba(238, 238, 238, 1) 100%
  );
`

const ContainerNavbarChat = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerLinkChat = styled.button`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-decoration: none;
  color: white;
  align-items: center;
  background-color: transparent;
  border: none;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`
const TextChat = styled.p`
  font-size: 1.3rem;
  color: white;
`

const BtnXChat = styled.button`
  background-color: transparent;
  height: 80%;
  font-size: 1rem;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const ContainerGeneralChat = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  border-radius: 10px;
  border: 1px solid gray;
  margin-bottom: 10px;
`

const ChatContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 10px;
`

const ContainerResponseChat = styled.div`
  padding: 2% 5%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const PromptChat = styled.div`
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 4%;
  margin-bottom: 2%;
  align-self: flex-end;
  width: fit-content;
`;

const MessageChat = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 8px;
  padding: 4%;
`

const ChatForm = styled.form`
  background-color: white;
  border-radius: 8px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`

const InputChat = styled.input`
  width: 100%;
  padding: 3%;
  border: none;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`

const BtnChat = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;


const ChatGpt = (props) => {

    const [input, setInput] = useState("")
    const [prompt, setPrompt] = useState("")
    const [message, setMessage] = useState("")
    const [historyChat, setHistoryChat] = useState([])
    const [chat, setChat] = useState([])
  
    const { setShowModal, showModal, setShowHome, setShowChat, setShowHistory } = props;

    const handleCloseModal = () => {
        setShowModal(false)
    };

    const handlerHome = () =>{
      setShowHome(true)
      setShowChat(false)
      setShowHistory(false)
  }

    useEffect(() => {
        async function fetchHistoryChat() {
            const chatHistory = await getChatGPT(email);
            setHistoryChat(chatHistory);
        }
        fetchHistoryChat();
    }, [])

    useEffect(() => {
        if (message) {
            setChat(prevState => [...prevState, { "prompt": prompt, "message": message }])
            setInput("")
        }
    }, [message])

    function handleChange(event) {
        setInput(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPrompt(input)
        await sendToChatGPT(input)
    };

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

    const sendToChatGPT = async (input) => {
        try {
            const response = await fetch(`${BASE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "prompt": input, "email": email }),
            })
            const data = await response.json();
            console.log(data.message.content);
            console.log(data.usage);
            const stringParsed = replaceBackticksWithPre(data.message.content);
            setMessage(stringParsed)
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function replaceBackticksWithPre(string) {
        const regex = /```([\s\S]*?)```/g;
        const response = string.replace(regex, "<pre>$1</pre>");
        return response;
    }


    return (
        <ContainerChatGpt>
            <ContainerNavbarChat>
                <ContainerLinkChat
                    onClick={()=>handlerHome()}
                >
                    <img style={{ width: "15px", backgroundColor:"beige", padding:"2px" }} src={backLogo} alt="back home" />
                </ContainerLinkChat>
                <TextChat>Hello Silvi</TextChat>
                <BtnXChat onClick={handleCloseModal}>X</BtnXChat>
            </ContainerNavbarChat>


            <ContainerGeneralChat>
                <ChatContainer>
                    {chat.length > 0 && chat.map((e, idx)=> {
                    
                        return (
                            <ContainerResponseChat key={idx}>
                                    <PromptChat>
                                        - {e.prompt}
                                    </PromptChat>
                                    <MessageChat>
                                        <img style={{ width: "20px", marginRight: "8px" }} src={robotLogo} alt="" />
                                        <span>{e.message}</span>
                                    </MessageChat>
                            </ContainerResponseChat>
                        )
                    })}
                </ChatContainer>

                <ChatForm onSubmit={handleSubmit}>
                    <InputChat type="text" value={input} onChange={handleChange} placeholder='How can we help you?'>
                    </InputChat>
                    {input &&
                        <BtnChat type="submit">
                            <img style={{ width: "20px" }} src={sendLogo} alt="" />
                        </BtnChat>}
                </ChatForm>
            </ContainerGeneralChat>
        </ContainerChatGpt>
    );
};

export default ChatGpt;


