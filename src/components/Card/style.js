import styled from "styled-components";

export const Container = styled.div`
   width:210px;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   flex: none;
  
   border-radius:8px;
   padding:24px;
   margin-bottom:16px;
   
   background-color:${({ theme }) => theme.COLORS.BACKGROUND_CARD};
   color:${({ theme }) => theme.COLORS.WHITE};
     
   #favoriteAdd{
       width: 100%;
       height: 0;
       display: flex;
       justify-content: flex-end;
   }

    img{
        width: 88px;
        height: 88px;
        border-radius: 50%;
        margin-bottom:12px;
    }

   span{
    color:${({ theme }) => theme.COLORS.COLOR_PRICE};
    margin-bottom:12px
   }

   #Buttons-Wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

        #input-Wrapper{
            display: flex;
            align-items:center;
            
                >div{
                    width: 50px;
                    height: 32px;
                    background:none; 
                    color: white;
                    text-align: center;
                 
                    input[type="number"]::-webkit-outer-spin-button,
                    input[type="number"]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }
                button{
                    margin:0;
                }
            }
        #buttonAdd{      
           height:32px;
           margin-top:14px;
        }
    }

      >h1{
        margin-bottom:12px;

        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color:${({ theme }) => theme.COLORS.WHITE};
      }

    @media (min-width: 1000px) {
        width:304px;
        height:462px;

        img{
        width: 176px;
        height: 176px;
        margin-bottom: 15px;
        }

        h1{  
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
            margin-bottom:15px;
        }

        span{
            font-size: 32px;
            line-height: 160%;
            margin-top: 15px;
            margin-bottom: 15px;
        }

        #Buttons-Wrapper{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;

            #input-Wrapper{
                height: 48px;
                >div{
                    width: 50px;
                    height: 32px; 
                }
            }
            #buttonAdd{      
                height:48px;
                margin:0;
                border-radius: 5px;
            }
        }    
    }
`;