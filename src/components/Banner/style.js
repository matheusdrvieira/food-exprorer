import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 120px;

margin-top: 44px;
margin-bottom: 62px;
border-radius: 3px;

display: flex;

background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: -10px;

    h1{
        font-family: 'Poppins';
        font-size: 18px;
        line-height: 140%;
        padding-right: 5px;
    }

    p{
        font-family: 'Poppins';
        font-size: 12px;
        line-height: 140%;
        padding-right: 5px;
    }
}

img{
    width: 191px;
    height: 149px;

    margin-top: -29px;
    margin-left: -32px;
}

@media (min-width: 1000px) {
    height: 260px;

    margin-top: 164px;

    border-radius: 8px;

    div{
        h1{
            font-weight: 500;
            font-size: 40px;
            line-height: 140%;
        }

        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
        }
    }

    img{
        width: 632px;
        height: 406px;

        margin-top: -146px;
        margin-left: -55px;
    }
}
`;