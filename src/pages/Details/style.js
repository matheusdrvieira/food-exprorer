import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;

    main{
        padding:0 5.6rem 10rem 5rem;
    }

    #buttonText{
        margin-top: 3.5rem;
        margin-bottom: 1.6rem;
        margin-left: 4.0rem;

        font-family: 'Poppins';
        font-weight: 700;
        font-size: 2.4rem;

        color:${({ theme }) => theme.COLORS.WHITE};

        >svg{
            font-size: 3.2rem;
        }
    }

@media (min-width: 1000px) {

    main{
        padding:0 12.1rem 10rem;
    }

    #buttonText{
        margin-top: 2.4rem;
        margin-bottom: 4.2rem;
        margin-left: 11.0rem;
    }  
}
`;