import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
  
   border-radius:8px;
   margin-bottom:1.6rem;
   
   color:${({ theme }) => theme.COLORS.WHITE};

   >img{
        width: 26.4rem;
        height: 26.4rem;
        border-radius: 50%;
        margin-bottom:1.2rem;
    }
    >#box{
        >h1{
            margin-bottom:1.2rem;
    
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 2.7rem;
            
    
            color:${({ theme }) => theme.COLORS.WHITE};
        }
    
        >p{
            font-family: 'Poppins';
            font-size: 1.6rem;
            line-height: 140%;
    
            margin-bottom: 2.4rem;
    
            color:${({ theme }) => theme.COLORS.SVG};
        }
    
        >#tags{
            margin-bottom:4.8rem;
            width: 100%;
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
            gap: 8px;
        }
    
        >h4{
            color:${({ theme }) => theme.COLORS.COLOR_PRICE};
            margin-bottom:1.2rem;
        }
    
        >#Buttons-Wrapper{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 1.6rem;
    
            >#input-Wrapper{
                display: flex;
                align-items:center;
                
                >div{
                    width: 5.0rem;
                    height: 3.2rem;
                    background:none; 
                    color: white;
                    text-align: center;
                    
                    >input[type="number"]::-webkit-outer-spin-button,
                    >input[type="number"]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }
            }
                >#buttonAdd{      
                    height:3.2rem;
    
                    border-radius: 8px;
    
                    font-family: 'Poppins';
                    font-weight: 500;
                    font-size: 1.0rem;
                    line-height: 1.6rem;
        
                    >svg{
                        font-size: 1.8rem;
                        margin-right: 5px;
                    }
                }
        }
    }

@media (min-width: 1000px) {
    flex-direction: row;
    gap: 4.0rem;

    >img{
        width: 39.0rem;
        height: 38.9rem;
    }
    >#box{
        text-align: left;

        >h1{  
            font-size: 4.0rem;
            line-height: 140%;

            margin-bottom: 2.4rem;
        }

        >p{
            font-weight: 400;
            font-size: 2.4rem;
    
            margin-bottom: 2.8rem;
        }
        >#tags{
            justify-content: flex-start;
            gap: 1.2rem;
        }

        >#Buttons-Wrapper{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.6rem;

            >#input-Wrapper{
                height: 4.8rem;

                >div{
                    width: 5.0rem;
                    height: 3.2rem; 
                }
            }
            >#buttonAdd{      
                height:4.8rem;
                width: 16.2rem;
                border-radius: 8px;
        
                font-size: 1.4rem;
            
                >svg{
                    display: none;
                }
            }
        }    
    }
}`;