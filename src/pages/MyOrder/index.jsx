import { Container } from "./style"
import { NewHeader } from "../../components/NewHeader"
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
            <NewHeader />
            <main>
                <section>
                    <h2>Meu Pedido</h2>
                    <Order data={{
                        name: "Salada Radish",
                        price: 50.99
                    }} />
                    <Order data={{
                        name: "Salada Radish",
                        price: 50.99
                    }} />
                    <Order data={{
                        name: "Salada Radish",
                        price: 50.99
                    }} />
                    <Order data={{
                        name: "Salada Radish",
                        price: 50.99
                    }} />
                    <Order data={{
                        name: "Salada Radish",
                        price: 50.99
                    }} />
                    <Order data={{
                        name: "Salada Radish",
                        price: 50.99
                    }} />
                    <span>Total: R$ {0}</span>
                    {
                        isMobile < WINDOW_MOBILE_WIDTH ?
                            <Button id="buttonConfirm" title="Avançar" />
                            :
                            null
                    }
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