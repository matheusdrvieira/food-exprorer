import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 7.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 2.7rem;

    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    p{
        font-weight: 700;
        font-size: 12px;
    }

    div{
        display: flex;
        align-items: center;
        
        gap: 10px;

        font-weight: 700;
        font-size: 16px;

        img{
            width: 18px;
            height: 18px;
        }
    }

@media (min-width: 1000px) {
    padding: 0 12.3rem;

    p{
        font-weight: 700;
        font-size: 14px;
    }

    div{
        font-weight: 700;
        font-size: 24px;

        img{
            width: 30px;
            height: 30px;
        }
    }
}
`;