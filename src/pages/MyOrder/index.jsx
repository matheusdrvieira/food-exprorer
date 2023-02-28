import { Container } from "./style"
import { NewHeader } from "../../components/NewHeader"
import { Order } from "../../components/Order"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { PayOut } from "../../components/PayOut"
import { useState, useEffect } from "react"
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"

export function MyOrder() {
    const orders = [
        {
            id: 1,
            name: "Salada Radish",
            price: 100.99
        },
        {
            id: 2,
            name: "Salada Radish",
            price: 50.99
        },
        {
            id: 3,
            name: "Salada Radish",
            price: 10.99
        },
        {
            id: 4,
            name: "Salada Radish",
            price: 35.99
        }
    ]

    const [dishes, setDishes] = useState(orders);
    const [total, setTotal] = useState()

    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        let soma = 0

        dishes.map(dish => (
            soma += dish.price
        ))

        setTotal(soma)

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

                    {
                        dishes.map(dish => (
                            <Order
                                key={dish.id}
                                data={dish} />
                        ))
                    }

                    <span>Total: R$ {total}</span>

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