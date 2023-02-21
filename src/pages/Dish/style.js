import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    >main{
        width: 100%;
        padding: 0 3.2rem;
        margin-top: 1rem;
        padding-bottom: 5.3rem;

        >#buttonText{
            font-family: 'Poppins';
            font-size: 1.6rem;

            margin-bottom: 3.5rem;
            
            >svg{
                font-size: 2.4rem;
            }
        }

        >h1{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 3.2rem;

            margin-bottom: 2.4rem;

            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        >label{
                color: ${({ theme }) => theme.COLORS.GRAY};
            }

        >#boxOne{
            >#inputFile{
                width: 100%;
                margin-bottom: 2.4rem;
                
                >label{
                    margin-top: 1.6rem;
                }
            }

            >#inputName{
                width: 100%;
                >div{
                    margin-top: 1.6rem;
                    margin-bottom: 2.4rem;
                }
            }

            >#inputCategory{
                width: 100%;
                display: flex;
                flex-direction: column;

                gap: 1.6rem;

                >#select{
                    width: 100%;
                    height: 5.6rem;
                        
                    padding: 0 1.6rem;

                    margin-bottom: 2.4rem;

                    border-radius: 1.0rem;
                    background:${({ theme }) => theme.COLORS.BACKGROUND_SELECT};

                    >select{   
                        width: 100%;
                        height: 5.6rem;
        
                        border: none;
                        outline: none;
        
                        font-family: 'Roboto';
                        font-weight: 400;
                        font-size: 1.4rem;
        
                        cursor: pointer;
        
                        color:${({ theme }) => theme.COLORS.WHITE};
                        background:${({ theme }) => theme.COLORS.BACKGROUND_SELECT};
                    }
                }
            }
        }

        input[type="file"] {
            display: none;
        }
        
        #labelFile{
            width: 100%;
            height: 5.6rem;
            
            display:flex ;
            align-items: center;
            
            gap: 8px;
            padding-left: 3.2rem;
            
            border-radius: 1.0rem;
            
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.4rem;
            
            background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
            
            >svg{
                font-size: 2.4rem; 
            }
        }
        
        >#boxTwo{
            margin-bottom:2.4rem;

            >#inputTag{           
                >#inputBg{
                    display:flex;
                    justify-content:flex-start;
                    flex-wrap:wrap;
                    
                    gap: 10px;
                    margin-top: 16px;
                    margin-bottom: 16px;

                    padding: 8px;
                    border-radius:10px;
                    background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

                    div{
                        width: 150px;
                    }
                }
            } 

            >#inputPrice{
                >div{
                    margin-top: 1.6rem;
                }
            }
        }

        >#boxThree{
            >#inputTextArea{
                >textarea{
                    margin-top:1.6rem;
                    margin-bottom: 2.4rem;
                }
            }

            #buttons{
                display: flex;
                gap: 32px;

                #buttonDelete{
                    background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
                }
            }
        }
    }
    
@media (min-width: 1000px) {

    >main{
        padding: 0 12.3rem;
        margin-top: 3.9rem;

        >#buttonText{
            font-size: 2.2rem;
            font-weight: 700;
            
            >svg{
                font-size: 3.2rem;
            }
        }

        >h1{
            margin-bottom: 3.2rem;
        }

        >#boxOne{
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 3.2rem;
            margin-bottom: 8px;
        }

        >#boxTwo{
            width: 100%;
            
            display: flex;
            justify-content: space-between;

            gap: 3.2rem;

            >#inputTag{
                width: 100%;
                margin-bottom: 8px;
            }
        }

        >#boxThree{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            >#inputTextArea{
                width: 100%;
            }

            >button{
                width: 20.0rem;
                border-radius: 5px;
            }
        }
        #buttons{
            width: 50%;
            display: flex;
            gap: 32px;
        }
    }

    footer{
        position: absolute;
        bottom: 0;
    }
}`;