import React from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Modal = ({onClose}) => {
  return (
    <>
     {createPortal(
        <>
        <Backdrop>
        <Modall>
        <Container>
            <h3 style={{marginLeft:"1.5rem", marginTop:"1.5rem"}}>Add new material modal</h3>
            <ButtonDiv>
            <Button onClick={onClose}>Close modal</Button>
            </ButtonDiv>
            </Container>
        </Modall>
    </Backdrop>
         </>,
         document.getElementById("modal")
  )}
  </>
  )
}

export default Modal;

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 101;
    cursor: pointer;
`
const Modall = styled.div`
    background-color: white;
    position: relative;
    left: 30rem;
    top: 10rem;
    width: 30rem;
    height: 10rem;
    border-radius: 16px;
    z-index: 102;
    h3{
        padding-top: 1rem;
    }
`

const ButtonDiv = styled.div`
    margin-top: 6rem;
`
const Button = styled.button`
    background-color: #3bb09b;
    border: 0;
    border-radius: 2rem;
    padding: 10px 30px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1rem;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`