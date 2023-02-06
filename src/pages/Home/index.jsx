import { Container } from "./style"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

export function Home() {
    return (
        <Container>

            <Header />

            <main>
                <Card data={{
                    nameProduct: "Salada Ravanello",
                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                    price: "49,97",
                }} />

                <Card data={{
                    nameProduct: "Salada Ravanello",
                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                    price: "49,97",
                }} />

                <Card data={{
                    nameProduct: "Salada Ravanello",
                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                    price: "49,97",
                }} />

                <Card data={{
                    nameProduct: "Salada Ravanello",
                    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                    price: "49,97",
                }} />
            </main>
        </Container>

    )
}