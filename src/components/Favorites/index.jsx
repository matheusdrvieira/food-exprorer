import { Container } from "./style"
import { ButtonText } from "../ButtonText";
import exemple from "../../assets/image2.png"

export function Favorites({ data, ...rest }) {
    return (
        <Container>
            <img src={exemple} alt="Prato" />
            <div>
                <h1>{data.name}</h1>
                <ButtonText title="Remover dos Favoritos" />
            </div>
        </Container >
    )
}