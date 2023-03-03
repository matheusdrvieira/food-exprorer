import { Container } from "./style";
import { Link } from "react-router-dom";
import { Resize } from "../../utils/index";
import titleBg from "../../assets/Polygon.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";

export function SignUp() {
    const isMobile = Resize()

    return (
        <Container>

            <div id="title">
                <img src={titleBg} alt="logo" />
                <h1>food Explorer</h1>
            </div>

            <form>
                {
                    isMobile > WINDOW_MOBILE_WIDTH ?
                        <h2>Crie sua conta</h2> : null
                }

                <label htmlFor="user">Nome</label>
                <Input id="user" type="text" placeholder="Exemplo: Maria da Silva" icon={FiUser} />

                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" icon={FiMail} />

                <label htmlFor="password">Senha</label>
                <Input id="password" type="password" placeholder="No mínimo 6 caracteres" icon={FiLock} />

                <Button title="Criar conta" />

                <Link to="/"><ButtonText id="buttonText" title="Já tenho uma conta" /></Link>
            </form>
        </Container>
    )
}