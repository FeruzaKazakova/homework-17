import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Courses = () => {
  return (
    <div>
        <CoursesCont>
            <Nav>
                <NavList>
                    <li>
                        <NavLink to="materials" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#2990de" : "",
                                   textDecoration: isActive ? "underline" : "none",
                                   textDecorationColor: isActive ? "yellow" : "none",
                                })
                            }>Materials</NavLink>
                    </li>
                    <li>
                        <NavLink to="students" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#2990de" : "",
                                   textDecoration: isActive ? "underline" : "none",
                                   textDecorationColor: isActive ? "yellow" : "none",
                                })
                            }>Students</NavLink>
                    </li>
                    <li>
                        <NavLink to="ratings" style={({isActive}) => ({
                                   color: isActive ? "black" : "white",
                                   background: isActive ? "#2990de" : "",
                                   textDecoration: isActive ? "underline" : "none",
                                   textDecorationColor: isActive ? "yellow" : "none",
                                })
                            }>Ratings</NavLink>
                    </li>
                </NavList>
            </Nav>
        </CoursesCont>
        <Outlet/>
    </div>
  )
}

export default Courses;

const CoursesCont = styled.div`
    background-color: #2990de;
    width: 100%;
    padding: 30px;
    position: relative;
    nav{
        width: 100%;
    }
`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavList = styled.ul`
    display: flex;
    margin-left: 18rem;
    list-style: none;
    color: white;
    font-size: 24px;
    margin-right: 1.5rem;
    li{
        cursor: pointer;
        font-weight: 700;
        margin-right: 7rem;
    }
`