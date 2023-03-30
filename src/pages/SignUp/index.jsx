import { Container } from "./style";
import { Link } from "react-router-dom";
import { Resize } from "../../utils/index";
import titleBg from "../../assets/Polygon.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
    const [name, setName,] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isMobile = Resize();
    const navigate = useNavigate();

    function handleSignUp() {
        console.log(name, email, password);
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuario cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Nao foi possivel cadastrar");
                }
            });
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
                        <h2>Crie sua conta</h2> : null
                }

                <label htmlFor="user">Nome</label>
                <Input
                    id="user"
                    type="text"
                    placeholder="Exemplo: Maria da Silva"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
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

                <Button title="Criar conta" onClick={handleSignUp} />

                <Link to="/"><ButtonText id="buttonText" title="Já tenho uma conta" /></Link>
            </form>
        </Container>
    )
}