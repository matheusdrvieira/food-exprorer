import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

   main{
    padding: 0 36px;

    section{
        h1{
            margin-bottom: 24px;
        }

        #carousel{
            display: flex;
            gap: 20px;
            flex-wrap:wrap;
        }
    }
}
`;