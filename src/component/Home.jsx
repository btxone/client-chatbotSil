import React from 'react';
import Target from './Target.jsx';
import Footer from './Footer.jsx';
// import Login from "../Login/Login.jsx"
import styled from 'styled-components';


const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%
`

const HomeNav = styled.div`
background-color: black;
  color: #fff;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BtnClose = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;

    &:hover{
        color: #ccc;
    }
`

const ContainerIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const HomeTitle = styled.h3`
    margin: 3% 0 0 0

`

const HomeText = styled.p`
    margin: 3% 0 0 0;
    font-size: 0.9rem;

`

const Home = (props) => {
    const { setShowModal, showModal, setShowHome,  setShowChat, setShowHistory } = props;

    const handleCloseModal = () => {
        setShowModal(false)
    };

    return (
        <ContainerHome>
            <HomeNav>
                <h3>Rackoot-Asistant</h3>
                <BtnClose onClick={handleCloseModal}>
                    X
                </BtnClose>
            </HomeNav>
            <ContainerIntro>
                <HomeTitle>Hello Silvi!</HomeTitle>
                <HomeText>Maybe this these cards can help you</HomeText>
            </ContainerIntro>
            <Target title={"What is a Rackoot"} content={"When we talk about rackoot, we're referring to a virtual rack that hosts all your tiles. You have to give it a name and can add a description to it."} />
            <Target title={"What is a Tile"} content={"A tile is the equivalent of a bookmark, but we want to be more than that. That's why we have some exciting news coming soon, designed just for you."} />
            <Footer setShowHome={setShowHome} setShowChat={setShowChat} setShowHistory={setShowHistory}/>
            {/* <Login></Login> */}
        </ContainerHome>
    );
};

export default Home;