import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

   main{
    padding: 0 36px;

    section{
        h1{
            margin-bottom: 24px;
        }

        #buttonsCarousel{
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            #carousel{
                width: 100%;
                display: flex;
                overflow-x: auto;
                scroll-behavior: smooth;
                gap: 16px; 
                padding:0 5px;
            }
            #carousel::-webkit-scrollbar{
                display: none;
            }
        }
    }
}

@media (min-width: 1000px) {
    main{
        padding: 0 12.4rem;
    section{
    #buttonsCarousel{
        display: flex;
    #carousel{
        display: flex;
        gap: 27px;     
    }}}}
}
`;