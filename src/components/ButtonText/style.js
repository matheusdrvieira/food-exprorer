import styled from "styled-components";

export const Container = styled.button`
    display:flex;
    align-items:center;

    border:0;

    background:none;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;