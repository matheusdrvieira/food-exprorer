import styled from "styled-components";

export const Container = styled.span`
   font-size:12px;
   border-radius:10px;
   
   padding:5px 14px;
   margin-right:8px;
   
   color:${({ theme }) => theme.COLORS.WHITE};
   background-color:${({ theme }) => theme.COLORS.BACKGROUND_700};
`;