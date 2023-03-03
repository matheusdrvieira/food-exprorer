import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;

    main{
        padding: 0 1.5rem 12rem;
        
        section{
            margin-bottom: 1.8rem;
        }
    }

@media(min-width: 400px) {
    main{
        padding: 0 3.5rem 12rem;
    } 
}
`;