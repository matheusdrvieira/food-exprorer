import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 7.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 2.7rem;

    position: absolute;
    bottom: 0;

    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    p{
        font-weight: 700;
        font-size: 1.2rem;
    }

    div{
        display: flex;
        align-items: center;
        
        gap: 1rem;

        font-weight: 700;
        font-size: 1.6rem;

        img{
            width: 1.8rem;
            height: 1.8rem;
        }
    }

@media (min-width: 1000px) {
    padding: 0 12.3rem;

    p{
        font-weight: 700;
        font-size: 1.4rem;
    }

    div{
        font-weight: 700;
        font-size: 2.4rem;

        img{
            width: 3.0rem;
            height: 3.0rem;
        }
    }
}
`;