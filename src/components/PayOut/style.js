import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 32px;

    h1{
        font-family: 'Poppins';  
        font-weight: 500;
        font-size: 32px; 

        margin-top: 56px;
    }

    #box{
        width: 530px;
        height: 445px;

        display: flex;
        align-items: center;
        flex-direction: column;

        border: solid 1px #76797B;
        border-radius: 8px;

        gap: 45px;

        img{
           margin-top: 10px;
        }
  
        #buttonPayments{
            width: 100%;
            display: flex;
            
            button{
                border-radius: 0;
                background: #000C12;

                svg{
                    font-size: 22px;
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
           width: 270px;
           height: 270px;
        }

        #boxPayment{
            display: flex;
            flex-direction: column;

            gap: 37px;
            padding: 0 91px;

            #inputPayments{
                display: flex;
                gap: 17px;
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
                    font-size:30px;
                    margin-right: 8px;
                }
            }
        }
    }
`;