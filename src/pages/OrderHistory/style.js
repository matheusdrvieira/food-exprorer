import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    main{
        min-height: 100vh;
        padding:3.5rem 3rem;
    }
    
    h2{
        margin-bottom: 24px;
        white-space: nowrap;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 28px;    
    }

@media(min-width: 400px) {
    main{
        padding:3.5rem 5.6rem;
    } 
}

@media(min-width: 1000px) {
    main{
        padding:3.5rem 18rem 0 12.2rem;

        h2{
            font-size: 32px;    
        }
    }
}
`;

export const BoxOrderMobile = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 24px;
    border: 1px solid #192227;
    border-radius: 8px;

    margin-bottom: 17px;

    .boxHeade{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    span{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;

        color: #C4C4CC;

        white-space: nowrap;
    }

    p{
        font-family: 'Roboto';  
        font-weight: 400;
        font-size: 14px;

        color: #C4C4CC;
    }

    .select{
        width: 100%;
        height: 5.6rem;
                        
        padding: 0 1.6rem;

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
`;

export const BoxOrderDesktop = styled.div`
    table {
        width: 100%;
        border-collapse: collapse;
        position: relative;
        margin-bottom: 122px;
    }

    table * {
        font-family: 'Roboto';
        font-size: 14px; 
        border: 2px solid #192227;
        color: #C4C4CC;

    }

    table th {
        text-align: left;
        padding: 1.6rem;
  
        font-weight: 700;
        font-size: 14px;
        
    }

    table td {
        padding: 1.6rem;
        text-align: left;
    }

    #select{
        width: 100%;
        height: 4.8rem;

        display: flex;
        align-items: center;
                        
        padding: 0 1.6rem;

        border-radius: 1.0rem;
        background:#0D1D25;

        >select{   
            width: 100%;
        
            border: none;
            outline: none;
        
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 14px;
            
        
            cursor: pointer;
        
            color: #C4C4CC;
            background:#0D1D25;
        }
    }
`;
