import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height: 100vh;
    position: relative;

        header{
            height:144px;
            display:flex;
            align-items:center;
            
            padding:0 30px;
            background:${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

            button{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 24px;
            }
        }

        main{
            padding: 0 0 10rem;
        }

@media(min-width: 1000px) {
    header{
        padding:0 123px;
   }
}
`;

export const Form = styled.form`
    max-width:340px;
    margin:30px auto;

        >div{
            margin-bottom:8px;
        }

        >div:nth-child(1){
            margin-bottom:64px;
        }
    
        >div:nth-child(3){
            margin-bottom:18px;
        }

        button{
            height: 52px;

            font-family: 'Poppins';
            font-weight: 500;
            font-size: 16px;
        }
`;

export const Avatar = styled.div`
    width:186px;
    height:186px;

    position:relative;
    margin:-124px auto;

        >img{
            width:186px;
            height:186px;

            border-radius:50%;
        }
        
        >label{
            width:48px;
            height:48px;

            border-radius:50%;

            display:flex;
            align-items:center;
            justify-content:center;

            position:absolute;

            bottom:7px;
            right:7px;

            cursor: pointer;

            background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

                >input{
                    display:none;
                }
                
                >svg{
                    font-size: 30px;
                    color:${({ theme }) => theme.COLORS.GRAY};    
                }
        }
`;