import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 3.2rem;

    h1{
        font-family: 'Poppins';  
        font-weight: 500;
        font-size: 3.2rem; 

        margin-top: 5.6rem;
    }

    #box{
        width: 53.0rem;
        height: 44.5rem;

        display: flex;
        align-items: center;
        flex-direction: column;

        border: solid 1px #76797B;
        border-radius: 8px;

        img{
           margin-top: 1rem;
        }
  
        #buttonPayments{
            width: 100%;
            display: flex;
            
            button{
                border-radius: 0;
                background: #000C12;

                svg{
                    font-size: 2.2rem;
                }
            }

            button:hover{
                background: #0D161B;
            }

            #buttonQrcode{
                border-radius:0px 8px 0px 0px;
            }

            #buttonCard{
                border-radius:8px 0 0px 0px;
            }

        }
        
        img{
           width: 27.0rem;
           height: 27.0rem;
           margin-top: 4.5rem;
        }

        #boxPayment{
            display: flex;
            flex-direction: column;

            gap: 3.7rem;
            padding: 0 9.1rem;
            margin-top: 4.5rem;

            #inputPayments{
                display: flex;
                gap: 1.7rem;
            }

            input{
                    border: solid 1px #fff;
                    border-radius: 5px
            }

            #inputs-Wrapper{
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            button{
                border-radius: 5px;

                svg{
                    font-size:3.0rem;
                    margin-right: 8px;
                }
            }
        }

        .paymentProcess{
            height: 100%;

            .processOne{
                width: 100%;
                height: 100%;

                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;         
                
                p{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 2rem;
                }

                svg{
                    font-size: 10.0rem;
                }
            }

        }
    }
`;