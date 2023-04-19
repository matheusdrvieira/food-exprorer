import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;

    main{
        padding:3.5rem 3rem 10rem;

        #inputDate{
            margin-bottom: 2rem;

            gap: 1rem;
            padding: 2rem;
    
            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
            border-radius: 8px;

            #inputs{
                display: flex;
                gap: 1.5rem;
            }
    
            label{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.6rem;    
            }
    
            div{
                width: 100%;
                div{
                  
                }
            }
        }
    }

    h2{
        margin-bottom: 1rem;
        white-space: nowrap;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 2.8rem;    
    }
    

@media(min-width: 400px) {
    main{
        padding:3.5rem 5rem 10rem;
    } 
}

@media(min-width: 1000px) {
    main{
        padding:3.5rem 18rem 5rem;

        #inputDate{
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
            border-radius: 5px;

            gap: 3rem;

            #inputs{
                display: flex;
                width: auto;
                gap: 3rem;
            }
        }
    }

    h2{
        font-size: 3.2rem;
        margin-bottom:0;
    }
}
`;

export const BoxOrderMobile = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 2.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
    border-radius: 8px;

    margin-bottom: 1.7rem;

    .boxHeade{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    span{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.SVG};

        white-space: nowrap;
    }

    p{
        font-family: 'Roboto';  
        font-weight: 400;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.SVG};
    }

    .select{
        width: 100%;
        height: 5.6rem;
                        
        padding: 0 1.6rem;

        border-radius: 1.0rem;
        background:${({ theme }) => theme.COLORS.BACKGROUND_SELECT};

        select{   
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
        margin-bottom: 12.2rem;
    }

    table * {
        font-family: 'Roboto';
        font-size: 1.4rem; 
        border: 2px solid  ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
        color: ${({ theme }) => theme.COLORS.SVG};
    }

    table th {
        text-align: left;
        padding: 1.6rem;
  
        font-weight: 700;
        font-size: 1.4rem;
        
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
        background: ${({ theme }) => theme.COLORS.BACKGROUND_SELECT};

        select{   
            width: 100%;
        
            border: none;
            outline: none;
        
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.4rem;
            
        
            cursor: pointer;
        
            color: ${({ theme }) => theme.COLORS.SVG};
            background: ${({ theme }) => theme.COLORS.BACKGROUND_SELECT};
        }
    }
`;
