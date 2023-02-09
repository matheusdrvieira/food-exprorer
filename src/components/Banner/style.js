import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 12.0rem;
    
    display: flex;

    margin-top: 4.4rem;
    margin-bottom: 6.2rem;

    border-radius: 3px;
    
    transition: 500ms;
    
    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        >h1{
            font-family: 'Poppins';
            font-size: 1.8rem;
            line-height: 100%;
            
            margin-bottom: 1.0rem;
        }

        >p{
            font-family: 'Poppins';
            font-size: 1.2rem;
            line-height: 100%;
        }
    }

    >img{
        width: 19.1rem;
        height: 14.9rem;

        margin-top: -2.9rem;
        margin-left: -3.2rem;
    }

@media (min-width: 1000px) {
    height: 26.0rem;

    margin-top: 16.4rem;

    border-radius: 8px;

    >div{
        padding: 0 8px;

        >h1{
            font-weight: 500;
            font-size: 4.0rem;
            line-height: 100%;

            margin-bottom: 2.0rem;
        }

        >p{
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 100%;
        }
    }

    >img{
        width: 50.0rem;
        height: 35.0rem;

        margin-top: -9.1rem;
        margin-left: -4.8rem;

        transition: 500ms;
    }
}

@media (min-width: 1100px) {
    >img{
        width: 63.2rem;
        height: 40.6rem;

        margin-top: -14.6rem;
        margin-left: -5.5rem;

        transition: 500ms;
    }
}`;