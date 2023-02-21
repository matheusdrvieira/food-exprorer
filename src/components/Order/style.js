import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    margin-bottom: 18px;
    gap: 12px;
    
    div{
        h1{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 20px;
        }

        button{    
            font-weight: 400;
            font-size: 12px;

            color: red;
        }
    }

    img{
        width:72px;
        height: 72px;
        border-radius: 50%;
    }

`;