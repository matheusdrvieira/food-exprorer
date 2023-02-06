import styled from "styled-components";

export const Container = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;   
    
    margin-top:1.5rem;

    border: none;
    background:none;

    svg{
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;