import styled from "styled-components";

export const Container = styled.div`
    height:100vh;

    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    
    padding: 0 4.7rem;
    gap:7.3rem;
    
    >#title{
        display:flex;
        align-items:center;
        gap: 1rem;

        h1{
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 30px;
            line-height: 44px; 
        }

        >img{
            width:4.3rem;
            height:4.3rem;
        }
    }

@media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 10.8rem;
    
    >#title{
        h1{
            font-weight: 700;
            font-size: 42px;
            line-height: 49px; 
        }
    }
}`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    #buttonText{
        justify-content: center;
        margin-top: 3.2rem;
    }

    >div{
            margin: 8px 0 3.2rem;
    }

    label{
        font-family: 'Roboto';
        font-size: 16px;
        color:${({ theme }) => theme.COLORS.GRAY};
    }

@media (min-width: 1000px) {
    width:476px;
    height: 540px;
    padding:64px ;

    border-radius: 8px;

    

    background-color:${({ theme }) => theme.COLORS.BACKGROUND_002};

    h2{ 
        width: 100%;
        
        display: flex;
        justify-content: center;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
    }

    >button{
        border-radius: 5px;
    }

}`;