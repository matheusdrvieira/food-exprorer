import { Footer } from "../../components/Footer";
import { Resize, IsAdm } from "../../utils/index";
import { NewHeader } from "../../components/NewHeader";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { Container, BoxOrderMobile, BoxOrderDesktop } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Input } from "../../components/Input";

export function OrderHistory() {
    const isMobile = Resize();
    const isAdm = IsAdm();

    const [orders, setOrders] = useState([]);
    const [ordersAdm, setOrdersAdm] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get(`/orders`)
            setOrders(response.data)
        }

        async function fetchOrdersAdm() {
            const startDate = "2023-04-10";
            const endDate = "2023-05-20";
            const response = await api.get(`/users/orders?startDate=${startDate}&endDate=${endDate}`)
            setOrdersAdm(response.data)
        }

        fetchOrders();
        fetchOrdersAdm();
    }, []);

    async function updateStatus(orderId, newStatus) {
        const updatedOrdersAdm = ordersAdm.map(orderAdm => {
            if (orderAdm.id === orderId) {
                return { ...orderAdm, status: newStatus };
            } else {
                return orderAdm;
            }
        });

        setOrdersAdm(updatedOrdersAdm);

        await api.patch(`/orders/${orderId}`, { status: newStatus });
        alert("Status atualizado com sucesso!")
    }

    function getStatusIcon(status) {
        switch (status) {
            case 'Pendente':
                return '🟡';
            case 'Aprovado':
                return '🟠';
            case 'Pedido Entregue':
                return '🟢';
            case 'Cancelado':
                return '🔴';
            default:
                return '';
        }
    }

    return (
        <Container>
            <NewHeader />
            {
                isMobile < WINDOW_MOBILE_WIDTH ?
                    <main>
                        {
                            isAdm ?
                                <>
                                    <div id="inputDate">
                                        <h2>Histórico de pedidos</h2>
                                        <div id="inputs">
                                            <div>
                                                <label>de:</label>
                                                <Input type="text" placeholder="Ex: 2023-01-01" />
                                            </div>
                                            <div>
                                                <label>até:</label>
                                                <Input type="text" placeholder="Ex: 2023-02-30" />
                                            </div>
                                        </div>
                                    </div>
                                </> :
                                <h2>Histórico de pedidos</h2>
                        }
                        {
                            isAdm ?
                                <>
                                    {
                                        ordersAdm.map(orderAdm => (
                                            <BoxOrderMobile key={orderAdm.id}>
                                                < div className="boxHeade">
                                                    <div>
                                                        <span>{orderAdm.id.toString().padStart(6, '0')}</span>
                                                    </div>

                                                    <div>
                                                        <span>{new Date(orderAdm.created_at).toLocaleDateString('pt-BR')} às {new Date(orderAdm.created_at).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p>
                                                        {orderAdm.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}
                                                    </p>
                                                </div>

                                                <div className="select">
                                                    <select value={orderAdm.status} onChange={(event) => updateStatus(orderAdm.id, event.target.value)}>
                                                        <option value="Pendente">🟡 Pendente</option>
                                                        <option value="Aprovado">🟠 Aprovado</option>
                                                        <option value="Pedido Entregue">🟢 Pedido Entregue</option>
                                                        <option value="Cancelado">🔴 Cancelado</option>
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
                                            <BoxOrderMobile key={order.id}>
                                                <div className="boxHeade">
                                                    <div>
                                                        <span>{order.id.toString().padStart(6, '0')}</span>
                                                    </div>

                                                    <div>
                                                        <span>{getStatusIcon(order.status)} {order.status}</span>
                                                    </div>

                                                    <div>
                                                        <span>{new Date(order.created_at).toLocaleDateString('pt-BR')} às {new Date(order.created_at).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>
                                                        {order.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}
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
                                <>
                                    <div id="inputDate">
                                        <h2>Histórico de pedidos</h2>
                                        <div id="inputs">
                                            <div>
                                                <label>de:</label>
                                                <Input type="text" placeholder="Exemplo: 2023-01-01" />
                                            </div>
                                            <div>
                                                <label>até:</label>
                                                <Input type="text" placeholder="Exemplo: 2023-02-30" />
                                            </div>
                                        </div>
                                    </div>
                                </> :
                                <h2>Histórico de pedidos</h2>
                        }
                        {
                            isAdm ?
                                <BoxOrderDesktop>
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
                                                Array.isArray(ordersAdm) && ordersAdm.map(orderAdm => (
                                                    <tr key={orderAdm.id}>
                                                        <td>
                                                            <div id="select">
                                                                <select value={orderAdm.status} onChange={(event) => updateStatus(orderAdm.id, event.target.value)}>
                                                                    <option value="Pendente">🟡 Pendente</option>
                                                                    <option value="Aprovado">🟠 Aprovado</option>
                                                                    <option value="Pedido Entregue">🟢 Pedido Entregue</option>
                                                                    <option value="Cancelado">🔴 Cancelado</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>{orderAdm.id.toString().padStart(8, '0')}</td>
                                                        <td>
                                                            {orderAdm.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}
                                                        </td>
                                                        <td>{new Date(orderAdm.created_at).toLocaleDateString('pt-BR')} às {new Date(orderAdm.created_at).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</td>
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
                                                    <tr key={order.id}>
                                                        <td>{getStatusIcon(order.status)} {order.status}</td>
                                                        <td>{order.id.toString().padStart(8, '0')}</td>
                                                        <td>
                                                            {order.dishes.map(dish => (`${dish.quantity} x ${dish.name}`)).join(", ")}
                                                        </td>
                                                        <td>{new Date(order.created_at).toLocaleDateString('pt-BR')} às {new Date(order.created_at).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric' })}</td>
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