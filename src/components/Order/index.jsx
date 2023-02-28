import { Container } from "./style"
import { ButtonText } from "../ButtonText";
import exemple from "../../assets/image2.png"

export function Order({ data }) {

    return (
        <Container>
            <img src={exemple} alt="Prato" />
            <div>
                <div>
                    <h1>{data.name}</h1>
                    <p>R$ {data.price}</p>
                </div>
                <ButtonText title="Excluir" />
            </div>
        </Container >
    )
}