import styled from "styled-components";

export const Container = styled.select`
   width:100%;
   height:5.6rem;

   display:flex;
   align-items:center;

   border-radius:1.0rem;
    
   color: white;
   background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

   svg{
    color: red;
   }
`;