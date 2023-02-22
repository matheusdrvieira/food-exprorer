import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    main{
        padding: 0 35px;
        min-height: 100vh;

        
        section{
            margin-bottom: 18px;

            h2{
                margin-top: 56px;
                margin-bottom: 27px;
    
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 32px;
            }
        }

        span{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 20px;
        }

        #buttonConfirm{
            width: 216px;
            height: 48px;
            border-radius: 5px;

            margin-top: 18px;
            margin-bottom: 50px;
        }
    }

@media(min-width: 1000px) {

    main{
        padding: 0 123px;

        display: flex;
        
        justify-content: space-between;

        gap: 20px;
    } 
}
`;