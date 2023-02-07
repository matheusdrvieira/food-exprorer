import { Container } from "./style"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { Banner } from "../../components/Banner"

export function Home() {
    return (
        <Container>

            <Header />

            <main>
                <Banner />

                <section>

                    <h1>Refeições</h1>

                    <div id="carousel">
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
                    </div>
                </section>

            </main>
        </Container>

    )
}