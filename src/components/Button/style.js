import styled from "styled-components";

export const Container = styled.button`
    width:100%;
    height:5.6rem;
    
    display:flex;
    align-items:center;
    justify-content:center;
    
    border-radius:1.0rem;
    border:none;
    
    margin-top:1.5rem;

    font-family: 'Poppins';
    font-size: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;