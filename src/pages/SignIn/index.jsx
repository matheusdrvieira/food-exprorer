import { Container } from "./style";
import { Link } from "react-router-dom";
import { Resize } from "../../utils/index";
import titleBg from "../../assets/Polygon.png";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const isMobile = Resize();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <div id="title">
                <img src={titleBg} alt="logo" />
                <h1>food Explorer</h1>
            </div>

            <form>
                {
                    isMobile > WINDOW_MOBILE_WIDTH ?
                        <h2>Faça login</h2> : null
                }

                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@exemplo.com.br"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <Input
                    id="password"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn} />
                <Link to="/register"><ButtonText id="buttonText" title="Criar uma conta" /></Link>
            </form>
        </Container>
    )
}