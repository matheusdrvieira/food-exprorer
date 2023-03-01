import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 1.2rem;
    margin-bottom: 1.8rem;
    
    >div{
        h1{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 2.0rem;

            white-space: nowrap;
        }
    
        p{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.2rem;

            color: #C4C4CC;
        }

        button{    
            font-weight: 400;
            font-size: 1.2rem;

            color: red;
        }
    }

    img{
        width:7.2rem;
        height: 7.2rem;
        
        border-radius: 50%;
    }
`;