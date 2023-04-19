import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 10.4rem;
    
    display: flex;

    background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

    #showMenu{
        width: 100%;

        position: absolute;

        background:${({ theme }) => theme.COLORS.BACKGROUND_001};
        
        #header{
            height: 104px;

            display: flex;
            align-items: center;

            padding-left: 28px;

            background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

            button{
                background: transparent;

                font-family: 'Roboto';
                font-weight: 400;
                font-size: 22px;

                svg{
                    margin-right: 16px;
                }
            }
        }

        #main{
            padding: 36px 28px;
            
            #section{
                display: flex;
                flex-direction: column;

                gap: 10px;
                margin-top: 36px;

                button{
                    font-family: 'Poppins';
                    font-weight: 300;
                    font-size: 24px;

                    color: ${({ theme }) => theme.COLORS.SVG};

                    svg{
                        margin-right: 16px;
                    }
                }

                hr{
                    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
                }
            }
        }
    }
`;

export const LogoTextDesktop = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.2rem;
    padding: 0 12.3rem 0 12.3rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    >div{
        display: flex;
        
        #logoTitleAdm{
            display: flex;
            gap: 1rem;

            div{
                display: flex;
                flex-direction: column;
                text-align: end;
                

                h1{
                    font-family: 'Roboto';
                    font-weight: 700;
                    font-size: 2.4rem;

                    white-space: nowrap;
                }

                span{
                    font-weight: 400;
                    font-size: 12px;
        
                    color: ${({ theme }) => theme.COLORS.COLOR_PRICE};
                }
            }
    
            img{ 
                width:3.0rem;
                height:3.0rem;
            }
        }

        #logoTitle{
            display: flex;
            align-items: center;
            gap: 1rem;

            h1{
                font-family: 'Roboto';
                font-weight: 700;
                font-size: 2.4rem;

                white-space: nowrap;
            }

            >img{ 
                width:3.0rem;
                height:3.0rem;
            }
        }
    }

    .buttonsHeader{
        display: flex;
        white-space: nowrap;
    }

    #buttonRequest{
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

    div{
        display: flex;
        gap: 8px;

        img{ 
            width:2.4rem;
            height:2.4rem;
        }

        h1{
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 2.1rem;

            white-space: nowrap;

            span{
                font-weight: 400;
                font-size: 1.2rem;
                
                margin-left:4px;
                color: ${({ theme }) => theme.COLORS.COLOR_PRICE};
            }
        }
    }

    #buttonList{
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