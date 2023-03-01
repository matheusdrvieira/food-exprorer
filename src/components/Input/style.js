import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   height:5.6rem;

   display:flex;
   align-items:center;

   border-radius:1.0rem;
    
   background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
   
    >input{
        width:100%;
        height:5.6rem;

        border:0;
        padding:1.4rem;

        background:transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 100%;
        }
    }
    
    >svg{
        margin-left:1.6rem;

        color: ${({ theme }) => theme.COLORS.SVG};
    }
`;