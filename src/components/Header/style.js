import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 10.4rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 2.8rem;
    gap: 3.2rem;

    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    #buttonRequests{
        width: 21.6rem;
        margin:0;
        padding: 0 4.6rem;

        flex-direction: row-reverse;

        svg{
            margin-right:1.0rem;
        }
    }

    #alou{
        display: flex;
        border: none;
        background: transparent;
        margin-left: -15px;
        
        span{
            width: 20px;
            height: 20px;

            position: relative;

            right: 15px;
            bottom: 8px;

            border-radius: 50%;

            font-family: 'Poppins';
            font-size: 14px;
            

            display: flex;
            justify-content: center;
            align-items: center;

            color:${({ theme }) => theme.COLORS.WHITE} ;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
        }
        #buttonSvg{
            margin-right:10px;
            width: 2.2rem;

            svg{
                font-size: 30px;
                color:${({ theme }) => theme.COLORS.WHITE} ;
            }
        }
    }

    #buttonExit{
        margin:0;
        width:3.2rem;
    }

    @media (min-width: 1000px) {
        padding: 0 12.3rem;
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

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 2.1rem;

    gap: 2.0rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    img{ 
        width:2.4rem;
        height:2.4rem;
    }

    @media (max-width: 500px) {
        font-size: 1.6rem;
        gap: 5px;  
    }
    
`;