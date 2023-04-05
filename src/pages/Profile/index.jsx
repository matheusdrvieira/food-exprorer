import { Link } from "react-router-dom";
import { Input } from "../..//components/Input"
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./style";
import { ButtonText } from "../../components/ButtonText"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_Password: passwordOld
        }

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <Link to="/" ><ButtonText title="Voltar" icon={FiArrowLeft} /></Link>
            </header>

            <main>
                <Form>
                    <Avatar>
                        <img
                            src={avatar}
                            alt="Foto de Usuario"
                        />
                        <label htmlFor="avatar">
                            <FiCamera />
                            <input
                                type="file"
                                id="avatar"
                                onChange={handleChangeAvatar}
                            />
                        </label>
                    </Avatar>

                    <Input
                        type="text"
                        placeholder="Nome"
                        icon={FiUser}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="E-mail"
                        icon={FiMail}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        type="passoword"
                        placeholder="Senha atual"
                        icon={FiLock}
                        onChange={e => setPasswordOld(e.target.value)}
                    />

                    <Input
                        type="passoword"
                        placeholder="Nova senha"
                        icon={FiLock}
                        onChange={e => setPasswordNew(e.target.value)}
                    />

                    <Button
                        title="Salvar"
                        onClick={handleUpdate}
                    />
                </Form>
            </main>

            <Footer />
        </Container >
    )
}