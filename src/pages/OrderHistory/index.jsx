import { Footer } from "../../components/Footer";
import { Resize, IsAdm } from "../../utils/index";
import { NewHeader } from "../../components/NewHeader";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Container, BoxOrderMobile, BoxOrderDesktop } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function OrderHistory() {
    const isMobile = Resize();
    const isAdm = IsAdm();

    const [orders, setOrders] = useState([]);
    const [startDate, setStartDate] = useState("2023-04-07");
    const [endDate, setEndDate] = useState("2023-04-08");
    const [ordersAdm, setOrdersAdm] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get(`/orders`)
            setOrders(response.data)
        }

        async function fetchOrdersAdm() {
            const response = await api.get(`/users/orders?startDate=${startDate}&endDate=${endDate}`)
            setOrdersAdm(response.data)
        }

        fetchOrders();
        fetchOrdersAdm();
    }, []);

    return (
        <Container>
            <NewHeader />
            {
                isMobile < WINDOW_MOBILE_WIDTH ?
                    <main>
                        <h2>Histórico de pedidos</h2>
                        {
                            isAdm ?
                                <>
                                    {
                                        ordersAdm.map(orderAdm => (
                                            <BoxOrderMobile>
                                                < div className="boxHeade">
                                                    <div>
                                                        <span>{orderAdm.id}</span>
                                                    </div>

                                                    <div>
                                                        <span>{orderAdm.created_at}</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p>
                                                        {
                                                            orderAdm.dishes.map(dish => (
                                                                <> {`${dish.quantity} x ${dish.name}, `} </>
                                                            ))
                                                        }
                                                    </p>
                                                </div>

                                                <div className="select">
                                                    <select>
                                                        <option value="🟡 Pendente">🟡 Pendente</option>
                                                        <option value="🟠 Preparando">🟠 Preparando</option>
                                                        <option value="🟢 Entregue">🟢 Entregue</option>
                                                        <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                    </select>
                                                </div>
                                            </BoxOrderMobile>
                                        ))
                                    }
                                </>
                                :
                                <>
                                    {
                                        orders.map(order => (
                                            <BoxOrderMobile>
                                                <div className="boxHeade">
                                                    <div>
                                                        <span>{order.id}</span>
                                                    </div>

                                                    <div>
                                                        <span>{`🟡 ${order.status}`}</span>
                                                    </div>

                                                    <div>
                                                        <span>{order.created_at}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>
                                                        {
                                                            order.dishes.map(dish => (
                                                                <> {`${dish.quantity} x ${dish.name}, `} </>
                                                            ))
                                                        }
                                                    </p>
                                                </div>

                                            </BoxOrderMobile>
                                        ))
                                    }
                                </>
                        }
                    </main >
                    :
                    <main>
                        {
                            isAdm ?
                                <BoxOrderDesktop>
                                    <h2>Histórico de pedidos</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Código</th>
                                                <th>Detalhamento</th>
                                                <th>Data e hora</th>
                                            </tr>
                                        </thead>
                                        <tbody className="order">
                                            {
                                                ordersAdm.map(orderAdm => (
                                                    <tr>
                                                        <td>
                                                            <div id="select">
                                                                <select>
                                                                    <option value="🟡 Pendente">🟡 Pendente</option>
                                                                    <option value="🟠 Preparando">🟠 Preparando</option>
                                                                    <option value="🟢 Entregue">🟢 Entregue</option>
                                                                    <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>{orderAdm.id}</td>
                                                        <td>
                                                            {
                                                                orderAdm.dishes.map(dish => (
                                                                    <> {`${dish.quantity} x ${dish.name}, `} </>
                                                                ))
                                                            }
                                                        </td>
                                                        <td>{orderAdm.created_at}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </BoxOrderDesktop>
                                :
                                <BoxOrderDesktop>
                                    <h2>Histórico de pedidos</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Código</th>
                                                <th>Detalhamento</th>
                                                <th>Data e hora</th>
                                            </tr>
                                        </thead>
                                        <tbody className="order">
                                            {
                                                orders.map(order => (
                                                    <tr>
                                                        <td>{`🟡 ${order.status}`}</td>
                                                        <td>{order.id}</td>
                                                        <td>
                                                            {
                                                                order.dishes.map(dish => (
                                                                    <>{`${dish.quantity} x ${dish.name}, `}</>
                                                                ))
                                                            }
                                                        </td>
                                                        <td>{order.created_at}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </BoxOrderDesktop>
                        }
                    </main>
            }
            <Footer />
        </Container >
    )
}