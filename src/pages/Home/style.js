import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;

    main{
        padding: 0 3.6rem 10rem;

        section{
            h1{
                margin-bottom: 2.4rem;
                margin-left: 3.0rem;
            }

            #buttonsCarousel{
                display: flex;
                align-items: center;

                gap: 5px;
                padding-bottom: 4.6rem;

                #carousel{
                    width: 100%;
                    display: flex;
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    gap: 1.6rem; 
                }
                
                #carousel::-webkit-scrollbar{
                    display: none;
                }
            }
        }
    }

@media (min-width: 1000px) {
    main{
        padding: 0 12.4rem 15rem;

        section{
            #buttonsCarousel{
                display: flex;

                #carousel{
                    display: flex;
                    gap: 2.7rem;     
                }
            }
        }
    }
}`;