import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const MaterialDetails = () => {
    const params = useParams()
    const materId = params.id;
  return (
    <>
    <Card>
    <Title>Material Details page</Title>
    <Title2>Material Name {materId}</Title2>
    </Card>
    <Nav>
      <NavList>
        <li>
          <NavLink to="submitted" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#3bb09b" : "",
                                   textDecoration: isActive ? "underline" : "none",
                                   textDecorationColor: isActive ? "yellow" : "none",
                                })
                            }>Submitted</NavLink>
        </li>
        <li>
          <NavLink to="waiting" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#3bb09b" : "",
                                   textDecoration: isActive ? "underline" : "none",
                                   textDecorationColor: isActive ? "yellow" : "none",
                                })
                            }>Waiting</NavLink>
        </li>
        <li>
          <NavLink to="late" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#3bb09b" : "",
                                   textDecoration: isActive ? "underline" : "none",
                                   textDecorationColor: isActive ? "yellow" : "none",
                                })
                            }>Late</NavLink>
        </li>
      </NavList>
    </Nav>
    <Div>
      <Outlet/>
    </Div>
    </>
  )
}

export default MaterialDetails;

const Card = styled.div`
  background-color: white;
  margin-left: 15rem;
  margin-right: 1rem;
  height: 20rem;
  position: relative;
  top: 1rem;
`
const Title = styled.h3`
  margin-left: 2rem;
  padding-top: 2rem;
  font-weight: 400;
`
const Title2 = styled.h3`
  margin-left: 2rem;
  padding-top: 1rem;
  font-weight: 400;
`
const Nav = styled.div`
  background-color: #3bb09b;
  margin-top: 2rem;
  margin-left: 15rem;
  margin-right: 1rem;
  height: 4rem;
`
const NavList = styled.ul`
    display: flex;
    margin-left: 5rem;
    list-style: none;
    color: white;
    font-size: 24px;
    margin-right: 1.5rem;
    li{
        cursor: pointer;
        font-weight: 700;
        margin-right: 7rem;
        margin-top: 1rem;
    }
`
const Div = styled.div`
  background-color: #bce0d9;
  margin-left: 15rem;
  margin-right: 1rem;
  height: 14rem;
`