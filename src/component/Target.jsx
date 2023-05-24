import React, { useState } from 'react';
import ArrowUp from '../assets/arrow-up-solid.svg'
import ArrowDown from '../assets/arrow-down-solid.svg'
import styled from 'styled-components';

const ContainerTarget = styled.div`
    border-radius: 10px;
    padding: 0;
    margin: 0 4%;
    border: 1px solid #dbd7d7;
`

const ContainerTargetTitle = styled.button`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin: 0;
    background-color: white;
    width: 100%;
    border: none;
    align-items: center;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        background-color: #e2dede;
        border-radius: 5px;
    }
`

const TargetTitle = styled.h3`
    font-size: 0.9rem;
    padding: 0;
 `

const TargetArrow = styled.img`
    width: 15px;
    cursor: pointer;
    &:hover{
        background-color: #e2dede;
        border-radius: 5px;
        padding: 0 1px;
    }
`

const TargetContent = styled.div`
    padding: 0 10px 7px 10px;
`

const TargetContentText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
`


const Target = ({ title, content }) => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };


    return (
        <ContainerTarget>
            <ContainerTargetTitle onClick={toggleContent}>
                <TargetTitle>{title}</TargetTitle>
                {showContent ? (
                    <TargetArrow src={ArrowUp} alt="arrow up" />
                ) : (
                    < TargetArrow src={ArrowDown} alt="arrow down" />
                )}
            </ContainerTargetTitle>
            {showContent && <TargetContent>
                <TargetContentText>{content}</TargetContentText>
            </TargetContent>}
        </ContainerTarget>
    );
};








export default Target;