import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    main{
        padding: 0 3.2rem;
        margin-top: 1rem;
        padding-bottom: 53px;

        #buttonText{
            font-family: 'Poppins';
            font-size: 1.6rem;

            margin-bottom: 3.5rem;
            
            svg{
                font-size: 2.4rem;
            }
        }

        h1{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 32px;

            margin-bottom: 2.4rem;
        }

        #boxOne{
            #inputFile{
                margin-bottom: 24px;
                label{
                    margin-top: 16px;
                }
            }

            #inputName{
                div{
                    margin-top: 16px;
                    margin-bottom: 24px;
                }
            }

            #inputCategory{
                display: flex;
                flex-direction: column;

                gap: 16px;

                #select{
                    width: 100%;
                    height: 56px;
                        
                    padding: 0 16px;

                    margin-bottom: 24px;

                    border-radius: 10px;
                    background:${({ theme }) => theme.COLORS.BACKGROUND_SELECT};

                    select{   
                        width: 100%;
                        height: 56px;
        
                        border: none;
                        outline: none;
        
                        font-family: 'Roboto';
                        font-weight: 400;
                        font-size: 14px;
        
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
            
            svg{
                font-size: 2.4rem; 
            }
        }

        
        #boxTwo{
            margin-bottom:24px;

            #inputTag{
                width: 100%;
                margin-bottom: 32px;
               
                #inputBg{
                    display: flex;
                    flex-wrap: wrap;
    
                    gap: 8px;
                    padding: 8px;
                    margin-top: 16px;
    
                    border-radius: 8px;
                    background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    
                    div{
                        width: 48%;
                    }
    
                }
            } 

            #inputPrice{
                div{
                    margin-top: 16px;
                }
            }
        }

        #boxThree{
            #inputTextArea{
                textarea{
                    margin-top:16px;
                    margin-bottom: 24px;
                }

            }
        }
    }      
`;