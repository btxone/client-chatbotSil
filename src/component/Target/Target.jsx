import React, { useState } from 'react';
import "./Target.css";
import ArrowUp from '../../assets/arrow-up-solid.svg'
import ArrowDown from '../../assets/arrow-down-solid.svg'

const Target = ({ title, content }) => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };


    return (
        <div className='container-target'>
            <button onClick={toggleContent} className='container-title'>
                <h3 className='title-target'>{title}</h3>
                {showContent ? (
                    <img className='arrow' src={ArrowUp} alt="" />
                ) : (
                    <img className='arrow' src={ArrowDown} alt="" />
                )}
            </button>
            {showContent && <div className='container-content'>
                <p className='content-target'>{content}</p>
            </div>}
        </div>
    );
};








export default Target;