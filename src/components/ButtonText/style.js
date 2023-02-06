import styled from "styled-components";

export const Container = styled.button`
    border:0;
    font-size:16px;
    display:flex;
    align-items:center;
    background:none;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;