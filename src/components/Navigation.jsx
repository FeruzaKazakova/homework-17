import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Container>
        <nav>
            <Logo>LOGO</Logo>
            <NavList>
                <li>
                    <NavLink to="/courses" style={({isActive}) => ({
                                   color: isActive ? "black" : "rgb(31, 110, 212)",
                                   background: isActive ? "#d1d1d1" : "white",
                                   padding: isActive ? "5px 50px" : "10px",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>Courses</NavLink>
                </li>
                <li>
                    <NavLink to="/announcements" style={({isActive}) => ({
                                   color: isActive ? "black" : "rgb(31, 110, 212)",
                                   background: isActive ? "#d1d1d1" : "white",
                                   padding: isActive ? "5px 10px" : "10px",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>Announcements</NavLink>
                </li>
                <li>
                    <NavLink to="notifications" style={({isActive}) => ({
                                   color: isActive ? "black" : "rgb(31, 110, 212)",
                                   background: isActive ? "#d1d1d1" : "white",
                                   padding: isActive ? "5px 23px" : "10px",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>Notifications</NavLink>
                </li>
                <li>
                    <NavLink to="/schedule" style={({isActive}) => ({
                                   color: isActive ? "black" : "rgb(31, 110, 212)",
                                   background: isActive ? "#d1d1d1" : "white",
                                   padding: isActive ? "5px 44px" : "10px",
                                   textDecoration: isActive ? "none" : "none",
                                })
                            }>Schedule</NavLink>
                </li>
            </NavList>
        </nav>
    </Container>
  )
}

export default Navigation;

const Container = styled.div`
position: fixed;
z-index: 100;
    background-color: #e3e0e0;
    width: 220px;
    height: 100%;
 ul{
   display: block;
   list-style: none;
   padding: 16px 25px;
   color: rgb(31, 110, 212);
}
`
const NavList = styled.ul`
background-color: white;
    li{
        cursor: pointer;
        font-weight: 600;
        font-size: 1.3rem;
        padding: 0.5rem;
        width: 100%;
    }
`
const Logo = styled.h2`
    color: #820eb4;
    margin: 50px 0px 70px;
    margin-left: 2rem;
`