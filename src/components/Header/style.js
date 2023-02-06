import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 10.4rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 12.3rem;
    gap: 3.2rem;

    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    
    >#title{
        width: 100%;

        display: flex;
        align-items: center;

        gap: 20px;
      
    }

    #buttonRequests{
        width: 21.6rem;
        margin:0;
        padding: 0 4.6rem;

        flex-direction: row-reverse;

        svg{
            margin-right:1.0rem;
        }
    }

    #buttonSvg{
        background:transparent;
        margin:0;
        width: 2.2rem;
    }

    #buttonExit{
        background:transparent;
        margin:0;
        width:3.2rem;
    }
`;

export const LogoTextDesktop = styled.div`
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 24px;


    gap: 2.0rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    img{ 
        width:3.0rem;
        height:3.0rem;
    }
`;

export const LogoTextMobile = styled.div`
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 2.2rem;

    gap: 2.0rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    img{ 
        width:2.4rem;
        height:2.4rem;
    }
`;