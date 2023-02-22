import { Container } from "./style"
import { Header } from "../../components/Header"
import { Order } from "../../components/Order"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { PayOut } from "../../components/PayOut"
import { useState, useEffect } from "react"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function MyOrder() {
    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })
    return (
        <Container>
            <Header />
            <main>
                <section>
                    <h2>Meu Pedido</h2>
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
                    <Order data={{
                        name: "Salada Radish"
                    }} />
                    <Order data={{
                        name: "Salada Radish"
                    }} />
                    <span>Total: R$ {103.88}</span>
                    <Button id="buttonConfirm" title="Avançar" />
                </section>
                {
                    isMobile > WINDOW_MOBILE_WIDTH ?
                        <section id="boxTwo">
                            <PayOut />
                        </section>
                        :
                        null
                }
            </main>
            <Footer />
        </Container>
    )
}