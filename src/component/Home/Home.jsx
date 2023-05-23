import React from 'react';
import Target from '../Target/Target.jsx';
import Footer from '../Footer.jsx';
import './Home.css'
import Login from "../Login/Login.jsx"


const Home = (props) => {
    const { setShowModal, showModal } = props;

    const handleCloseModal = () => {
        setShowModal(false)
    };

    return (
        <div className='container-home'>
            <div className="modal-header">
                <h3>Rackoot-Asistant</h3>
                <button className="close-button" onClick={handleCloseModal}>
                    X
                </button>
            </div>
            <div className='container-intro'>
                <h3>Hello Silvi!</h3>
                <p>Maybe this these cards can help you</p>
            </div>
            <Target title={"What is a Rackoot"} content={"When we talk about rackoot, we're referring to a virtual rack that hosts all your tiles. You have to give it a name and can add a description to it."} />
            <Target title={"What is a Tile"} content={"A tile is the equivalent of a bookmark, but we want to be more than that. That's why we have some exciting news coming soon, designed just for you."} />
            <Footer />
            {/* <Login></Login> */}
        </div>
    );
};

export default Home;