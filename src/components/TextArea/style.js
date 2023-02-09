import styled from "styled-components";

export const Container = styled.textarea`
    width:100%;
    height:17.2rem;
    
    border:0;
    border-radius:1.0rem;
    
    padding:1.4rem;

    resize:none;
    
    color:${({ theme }) => theme.COLORS.WHITE};
    background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    &::placeholder{
        color:${({ theme }) => theme.COLORS.GRAY};
    }
`;