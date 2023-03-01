import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RiArrowLeftSLine } from "react-icons/ri";
import { ButtonText } from "../../components/ButtonText";
import { CardDetails } from "../../components/CardDetails";

export function Details() {
    return (
        <Container>
            <Header />
            <ButtonText id="buttonText" title="Voltar" icon={RiArrowLeftSLine} />

            <main>
                <CardDetails data={{
                    nameProduct: "Salada Ravanello",
                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                    tags: [
                        { id: "1", name: "FALA" },
                        { id: "2", name: "GAROTINHO" },
                        { id: "3", name: "ZECA" },
                        { id: "4", name: "URUBU" },
                        { id: "5", name: "TODDYNHO" },
                        { id: "6", name: "VAGABUNDO" },
                    ],
                    price: "49,97",
                }} />
            </main>
            <Footer />
        </Container >
    )
}