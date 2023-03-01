import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;

    padding-right:1.6rem;
    border-radius:1.0rem;

    border:${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.INPUT_DASHED}` : "none"};
    
    color:${({ theme }) => theme.COLORS.WHITE};
    background-color:${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.INPUT_TAG};
   
    button{
        height: 1.6rem;
        background:none;
        border:none;

        >svg{
            color:${({ theme }) => theme.COLORS.WHITE};
        }
    }

    input{
        width:100%;
        height:3.8rem;
        border:none;
        padding:1.6rem;
        background:transparent;
        color:${({ theme }) => theme.COLORS.WHITE};
            
        &::placeholder{
            color:${({ theme }) => theme.COLORS.INPUT_DASHED};
        }
    }
`;