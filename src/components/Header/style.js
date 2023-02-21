import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 10.4rem;
    
    display: flex;

    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
`;

export const LogoTextDesktop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.2rem;
    padding: 0 12.3rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    >div{
        display: flex;
        align-items: center;
        gap: 1.0rem;

        >div{   
            text-align: end;
            >h1{
                font-family: 'Roboto';
                font-weight: 700;
                font-size: 2.4rem;
    
            }
            span{
                font-weight: 400;
                font-size: 12px;
    
                color: #82F3FF;
            }
        }

        >img{ 
            width:3.0rem;
            height:3.0rem;
        }
    }

    >button{
        width: 21.6rem;
        
        gap: 8px;
        padding: 1.2rem 3.2rem;

        border-radius: 5px;

        >svg{
            font-size: 2.4rem;
        }
    }
`;

export const LogoTextMobile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 2.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    >div{
        display: flex;
        gap: 8px;

        >img{ 
            width:2.4rem;
            height:2.4rem;
        }

        >h1{
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 2.1rem;

            span{
                font-weight: 400;
                font-size: 12px;
                
                margin-left:4px;
                color: #82F3FF;
            }
        }
    }

    >#buttonList{
        display: flex;
        
        >span{
            width: 2.0rem;
            height: 2.0rem;

            position: relative;

            right: 2rem;
            bottom: 8px;

            border-radius: 50%;

            font-family: 'Poppins';
            font-size: 1.4rem;
            

            display: flex;
            justify-content: center;
            align-items: center;

            color:${({ theme }) => theme.COLORS.WHITE} ;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
        }
    }
`;