import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >#title{
        width: 100%;

        display: flex;
        justify-content: center;

        gap: 10px;

        >img{
            width:43px;
            height:43px;
        }

        >h1{ 
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 37.2431px;
            line-height: 44px;

            margin-bottom: 73px;
        }
    }
 
    >form{
        width: 330px;
        height: 416px;

        padding: 12px 14px;

        >label{
            color:${({ theme }) => theme.COLORS.GRAY};
        }

        >div{
            margin: 8px 0 32px;
        }
            
        >#buttonText{
            width: 100%;
            display: flex;
            justify-content: center;

            margin-top: 32px;

            font-family: 'Poppins';
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
        }
    }

@media (min-width: 1000px) {

    flex-direction: row;
    
    justify-content: space-around;
    padding: 0 108px;

    >#title{
        
        width: 300px;

        >img{
            width: 49.43px;
            height: 47.5px;
        }

        >h1{ 
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 42px;
            line-height: 49px;
        }
    }
 
    >form{
        width: 476px;
        height: 540px;

        padding: 64px;

        border-radius: 10px;
           
        background:${({ theme }) => theme.COLORS.BACKGROUND_002};
           

        >h2{
            width: 100%;

            display: flex;
            justify-content: center;

            margin-bottom: 32px;

            font-family: 'Poppins';
            font-weight: 500;
            font-size: 32px;
            line-height: 100%;
        }

        >button{
            border-radius: 5px;
        }
    }
}`;