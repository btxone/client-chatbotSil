import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backLogo from '../../assets/circle-with-an-arrow-pointing-to-left_icon-icons.com_73625.png'
import sendLogo from '../../assets/arrow-pointing-right-in-a-circle_icon-icons.com_73672.png'
import robotLogo from '../../assets/asistente-de-robot.png'
import './ChatGpt.css'


const email = "pau@gmail.com";
const BASE_URL = 'https://chatbot-dev.up.railway.app/api/chatgpt';
// console.log(BASE_URL);

const ChatGpt = (props) => {

    const [input, setInput] = useState("")
    const [prompt, setPrompt] = useState("")
    const [message, setMessage] = useState("")
    const [historyChat, setHistoryChat] = useState([])
    const [chat, setChat] = useState([])

    const { setShowModal, showModal } = props;

    const handleCloseModal = () => {
        setShowModal(false)
    };

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
        <div className='container-chatGpt'>
            <div className='container-navbar-chat'>
                <Link
                    to="/"
                    className='container-link-chat'
                >
                    <img style={{ width: "15px", backgroundColor:"beige", padding:"2px" }} src={backLogo} alt="back home" />
                    {/* <span>Back</span> */}
                </Link>
                <p className='text-chat'>Hello Silvi</p>
                <button className='btn-x-chat' onClick={handleCloseModal}>
                    X
                </button>
            </div>


            <div className="container-general-chat">
                <div className='chat-container'>
                    {chat.length > 0 && chat.map((e, idx)=> {
                    
                        return (
                            <div className='container-response-chat' key={idx}>
                                
                                    <div className='prompt-chat' >
                                        - {e.prompt}
                                    </div>
                                    <div className='message-chat'>
                                        <img style={{ width: "20px", marginRight: "8px" }} src={robotLogo} alt="" />
                                        <span>{e.message}</span>
                                    </div>
                              
                            </div>
                        )
                    })}
                </div>

                <form className='chat-form' onSubmit={handleSubmit}>
                    <input className='input-chat' type="text" value={input} onChange={handleChange} placeholder='How can we help you?'>
                    </input>
                    {input &&
                        <button className='btn-chat' type="submit">
                            <img style={{ width: "20px" }} src={sendLogo} alt="" />
                        </button>}
                </form>
            </div>
        </div>
    );
};

export default ChatGpt;


