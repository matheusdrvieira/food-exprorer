import styled from "styled-components";

export const Container = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;   

    border: none;
    background:none;

    svg{
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;