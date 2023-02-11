import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../components/Card';

const StudentsPages = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const students = [
      {
          id:1,
          title:"Student Name 1"
      },
      {
          id:2,
          title:"Student Name 2"
      }
  ];

  return (
    <div>
            { show ? <Outlet/> : <MainContainer>
            {students.map((student) => {
                return (
                <Card>
                    <StudentsContainer>
                        <h3 key={Math.random().toString()} id={student.id}>{student.title}</h3>
                <DetailsButton onClick={() => {
                  navigate(`${student.id}/details`)
                  setShow(<MainContainer/>)
                  }}>Details</DetailsButton>
                </StudentsContainer>
                </Card>)
            })}
            </MainContainer>}
    </div>
  )
}

export default StudentsPages;

const StudentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

const DetailsButton = styled.button`
  background-color: #3bb09b;
  border: 0;
  border-radius: 2rem;
  padding: 10px 50px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
`