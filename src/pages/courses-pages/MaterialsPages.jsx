import React, { useState } from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import Modal from '../../UI/Modal';

const MaterialsPages = () => {
    const [show, setShow] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const materials = [
        {
            id:1,
            title:"Material 1"
        },
        {
            id:2,
            title:"Material 2"
        }
    ];

    const showModalHandler = () =>{
        searchParams.set("modal", "addNewMaterial")
        setSearchParams(searchParams)
    }

    const closeModalHandler = () =>{
        searchParams.delete("modal")
        setSearchParams(searchParams)
    };

  return (
    <div>
        {searchParams.has("modal") ? <Modal onClose={closeModalHandler}/> :
        <>
            { show ? <Outlet/> : <MainContainer>
            <ButtonDiv>
                <AddButton onClick={showModalHandler}>Add new material</AddButton>
            </ButtonDiv>
            {materials.map((material) => {
                return (
                <Card>
                    <MaterialsContainer>
                        <h3 key={Math.random().toString()} id={material.id}>{material.title}</h3>
                <DetailsButton onClick={() => {
                    navigate(`${material.id}/details`)
                    setShow(<MainContainer/>)
                    }}>Details</DetailsButton>
                </MaterialsContainer>
                </Card>)
            })}
            
            </MainContainer>}
            </>}
    </div>
  )
}

export default MaterialsPages;

const ButtonDiv = styled.div`
    margin-left: 48rem;
`
const AddButton = styled.button`
    margin-top: 2rem;
    background-color: #ffc252;
    border: 0;
    border-radius: 2rem;
    padding: 15px 56px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.1rem;
    color: white;
`

const MaterialsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
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