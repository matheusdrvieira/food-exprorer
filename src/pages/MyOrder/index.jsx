import { Container } from "./style"
import { Header } from "../../components/Header"
import { Order } from "../../components/Order"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

export function MyOrder() {
    return (
        <Container>
            <Header />
            <main>
                <h2>Meu Pedido</h2>
                <section>
                    <Order data={{
                        name: "Salada Radish"
                    }} />
                    <Order data={{
                        name: "Salada Radish"
                    }} />
                    <Order data={{
                        name: "Salada Radish"
                    }} />
                    <Order data={{
                        name: "Salada Radish"
                    }} />
                </section>

                <span>Total: R$ {103.88}</span>
                <Button id="buttonConfirm" title="Avançar" />
            </main>
            <Footer />
        </Container>
    )
}