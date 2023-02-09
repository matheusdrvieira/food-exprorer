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

        gap: 1.0rem;

        >img{
            width:4.3rem;
            height:4.3rem;
        }

        >h1{ 
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 3.7rem;
            line-height: 4.4rem;

            margin-bottom: 7.3rem;
        }
    }
 
    >form{
        width: 33.0rem;
        height: 41.6rem;

        padding: 1.2rem 1.4rem;

        >label{
            color:${({ theme }) => theme.COLORS.GRAY};
        }

        >div{
            margin: 8px 0 3.2rem;
        }
            
        >#buttonText{
            width: 100%;
            display: flex;
            justify-content: center;

            margin-top: 32px;

            font-family: 'Poppins';
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.4rem;
        }
    }

@media (min-width: 1000px) {

    flex-direction: row;
    
    justify-content: space-around;
    gap: 2.0rem;
    padding: 0 10.8rem;

    >#title{
        
        width: 32.0rem;

        >img{
            width: 4.9rem;
            height: 4.7rem;
        }

        >h1{ 
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 4.2rem;
            line-height: 4.9rem;
        }
    }
 
    >form{
        width: 47.6rem;
        height: 62.1rem;

        padding: 6.4rem;

        border-radius: 1.0rem;
           
        background:${({ theme }) => theme.COLORS.BACKGROUND_002};
           

        >h2{
            width: 100%;

            display: flex;
            justify-content: center;

            margin-bottom: 3.2rem;

            font-family: 'Poppins';
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 100%;
        }

        >button{
            border-radius: 5px;
        }
    }
}`;