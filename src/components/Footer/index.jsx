import { Container } from "./style";
import logo from "../../assets/Polygon.png";




export function Footer() {
    return (
        <Container>
            <div>
                <img src={logo} alt="" />
                <h5>food_Explorer</h5>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}