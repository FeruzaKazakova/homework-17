import styled from "styled-components"

export const Card = ({children}) => {
    return(
        <div>
            <CardContainer>{children}</CardContainer>
        </div>
    )
}

const CardContainer = styled.div`
    padding: 2rem 1.5rem;
    box-shadow: -2px 4px 23px -2px rgba(59,59,59);
    width: 500px;
    margin: 10px auto;
    border-radius: 8px;
    margin-top: 2rem;
    background-color: white;
`