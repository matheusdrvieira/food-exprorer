import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;

    main{
        padding: 0 3.5rem 10rem;
        
        section{
            margin-bottom: 1.8rem;

            h2{
                margin-top: 5.6rem;
                margin-bottom: 2.7rem;
    
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 3.2rem;
            }
        }

        span{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 2.0rem;
        }

        #buttonConfirm{
            width: 21.6rem;
            height: 4.8rem;
            border-radius: 5px;

            margin-top: 1.8rem;
            margin-bottom: 5.0rem;
        }
    }

@media(min-width: 1000px) {

    main{
        padding: 0 12.3rem 10rem;

        display: flex;
        
        justify-content: space-between;

        gap: 2.0rem;
    } 
}
`;