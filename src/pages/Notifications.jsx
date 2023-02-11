import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Notifications = () => {
  const navigate = useNavigate()
  return (
    <NotificationsContainer>
      <Title>Notifications Page</Title>
      <NotificationsButton onClick={() => {navigate("/courses/materials")}}>Go to Materials Page</NotificationsButton>
    </NotificationsContainer>
  )
}

export default Notifications;

const NotificationsContainer = styled.div`
  background-color: white;
  margin-left: 15rem;
  margin-right: 1rem;
  height: 43rem;
  position: relative;
  top: 2rem;
`
const Title = styled.h2`
  margin-left: 2rem;
  padding-top: 2rem;
  font-weight: 400;
`
const NotificationsButton = styled.button`
  background-color: #3bb09b;
  border: 0;
  border-radius: 2rem;
  padding: 20px 60px;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 20px;
  margin-top: 4rem;
`