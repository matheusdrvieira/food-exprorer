import { Container } from "./style";
import { useState, useEffect } from "react";
import { Resize } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import { Order } from "../../components/Order";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { PayOut } from "../../components/PayOut";
import { NewHeader } from "../../components/NewHeader";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { api } from "../../services/api";

export function MyOrder() {
    const isMobile = Resize()
    const navigate = useNavigate();
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const orderId = localStorage.getItem("orderId");
            const response = await api.get(`/orders/${orderId}`);
            setDishes(response.data);
        }

        fetchOrders();
    }, [dishes]);

    const handleProcess = () => {
        navigate("/payment")
    }

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
                                data={dish}
                            />
                        ))
                    }
                    {
                        dishes.map(dish => (
                            <span key={dish.id}>Total: R$ {dish.amount.toFixed(2)}</span>
                        ))
                    }
                    {
                        isMobile < WINDOW_MOBILE_WIDTH ?
                            <Button id="buttonConfirm" title="Avançar" onClick={handleProcess} />
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