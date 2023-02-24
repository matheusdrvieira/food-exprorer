import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 18px;
    gap: 12px;
    
    div{
        div{
            display: flex;
            align-items: center;
            gap: 10px;

            h1{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 20px;
                white-space: nowrap;
            }
    
            p{
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 12px;
                white-space: nowrap;
                color: #C4C4CC;
            }
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