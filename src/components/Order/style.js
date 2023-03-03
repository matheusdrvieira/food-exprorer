import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 1.8rem;
    gap: 1.2rem;
    
    >div{
        >div{
            display: flex;
            align-items: center;
            gap: 1rem;

            h1{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 2rem;

                white-space: nowrap;
            }
    
            p{
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 1.2rem;

                white-space: nowrap;

                color: ${({ theme }) => theme.COLORS.GRAY};
            }
        }

        button{    
            font-weight: 400;
            font-size: 1.2rem;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
        }
    }

    img{
        width:7.2rem;
        height: 7.2rem;
        border-radius: 50%;
    }

`;