import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Schedule = () => {
  const navigate = useNavigate()
  return (
    <ScheduleContainer>
      <Title>Schedule Page</Title>
      <ScheduleButton onClick={() => {navigate("/notifications")}}>Go to Notifications Page</ScheduleButton>
    </ScheduleContainer>
  )
}

export default Schedule;

const ScheduleContainer = styled.div`
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
const ScheduleButton = styled.button`
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