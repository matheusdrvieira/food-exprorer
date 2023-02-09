import styled from "styled-components";

export const Container = styled.div`
    height:100vh;

    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    padding-right:1rem;
    gap: 5rem;
    
    
    >#title{
        display:flex;
        align-items:center;
        gap: 1rem;

        >img{
            width:4.3rem;
            height:4.3rem;
        }
    }

@media (min-width: 740px) {
    justify-content: space-around;
    flex-direction:row;

    gap: 0;

    >#title{
    padding:0 1rem;
    gap: 2rem;

        >img{
            width:4.3rem;
            height:4.3rem;
        }
    }
}`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;

    width:47.6rem;
    height:62.1rem;
    padding:0 6.4rem;

    border-radius: 1.6rem;
    
    >label{
        margin-top:3.2rem;
        margin-bottom:8px;
        
        line-height: 100%;
        
        color:${({ theme }) => theme.COLORS.GRAY};
    }

    >button{
        margin-top:3.2rem;
    }

    >div{
        width:100%;
        display:flex;
        justify-content: center;

        >h2{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 140%;

            color:${({ theme }) => theme.COLORS.ROSA};
        }
    }

@media (min-width: 740px) {
    justify-content: center;

    background:${({ theme }) => theme.COLORS.BACKGROUND_002};
}`;