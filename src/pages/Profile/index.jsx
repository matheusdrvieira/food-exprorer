import { Link } from "react-router-dom";
import { Input } from "../..//components/Input"
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./style";
import { ButtonText } from "../../components/ButtonText"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/home" ><ButtonText title="Voltar" icon={FiArrowLeft} /></Link>
            </header>

            <main>
                <Form>
                    <Avatar>
                        <img
                            src={avatarPlaceholder}
                            alt="Foto de Usuario"
                        />
                        <label htmlFor="avatar">
                            <FiCamera />
                            <input
                                type="file"
                                id="avatar"
                            />
                        </label>
                    </Avatar>

                    <Input
                        type="text"
                        placeholder="Nome"
                        icon={FiUser}
                    />

                    <Input
                        type="text"
                        placeholder="E-mail"
                        icon={FiMail}
                    />

                    <Input
                        type="passoword"
                        placeholder="Senha atual"
                        icon={FiLock}
                    />

                    <Input
                        type="passoword"
                        placeholder="Nova senha"
                        icon={FiLock}
                    />

                    <Button
                        title="Salvar"
                    />
                </Form>
            </main>

            <Footer />
        </Container >
    )
}