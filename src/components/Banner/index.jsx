import { Container } from "./style";
import BannerBg from "../../assets/banner.png"

export function Banner() {
    return (
        < Container>
            <img src={BannerBg} alt="" />
            <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container >
    )
}