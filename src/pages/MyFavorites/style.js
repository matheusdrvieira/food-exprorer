import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    main{
        padding: 0 35px;

        h2{
            margin-top: 56px;
            margin-bottom: 27px;
    
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 32px;
        }
    }

    footer{
        position: fixed;
        bottom: 0;
    }


@media(min-width: 1000px) {

    main{
        width: 100%;
        padding: 0 123px;

        h2{
            margin-bottom: 32px;
        }
        
        #section{ 
            width: 100%;
            display: flex;
            gap:48px;
            flex-wrap:wrap ;
        }
    } 

    footer{
        position: fixed;
        bottom: 0;
    }
}
`;