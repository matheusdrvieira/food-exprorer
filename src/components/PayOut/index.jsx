import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import QRCODE from "../../assets/Vector.png";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";
import { api } from "../../services/api";

export function PayOut() {
    const [payment, setPayment] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('Cartão de Crédito');
    const [statusAdm, setStatusAdm] = useState(null);
    const [orders, setOrders] = useState([]);
    const [disableButtons, setDisableButtons] = useState(false);

    const handlePayment = () => {
        setPayment(!payment);
    };

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
        api.put(`/orders/${orders[orders.length - 1].id}`, { payment: method });
    };

    const handleClick = (method) => {
        handlePayment();
        handlePaymentMethod(method);

        if (method === "Pix") {
            setTimeout(() => {
                updateStatus();
            }, 10000);
        }
    };

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get(`/orders`);
            setOrders(response.data);
        }

        fetchOrders();
    }, []);

    async function updateStatus() {
        const orderId = orders[orders.length - 1].id;
        await api.patch(`/orders/${orderId}`, { status: "Pendente" });
        setStatusAdm("Pendente")
    }

    useEffect(() => {
        if (orders.length > 0) {
            setStatusAdm(orders[orders.length - 1].status);
        }
    }, [orders]);

    useEffect(() => {
        if (statusAdm === "Pendente" || statusAdm === "Aprovado" || statusAdm === "Pedido Entregue" || statusAdm === "Cancelado") {
            setDisableButtons(true);
        } else {
            setDisableButtons(false);
        }
    }, [statusAdm]);

    return (
        <Container>
            <h1>Pagamento</h1>
            <div id="box">
                <div id="buttonPayments">
                    <Button
                        className={!payment ? "active" : ""}
                        id="buttonCard"
                        icon={FaRegCreditCard}
                        onClick={() => handleClick("Cartão de Crédito")}
                        disabled={disableButtons}
                    />
                    <Button
                        className={payment ? "active" : ""}
                        id="buttonQrcode"
                        icon={FaQrcode}
                        onClick={() => handleClick("Pix")}
                        disabled={disableButtons}
                    />
                </div>
                {
                    !statusAdm ?
                        <div className="PaymentProcess">
                            {
                                payment ?
                                    <img src={QRCODE} alt="qrcode" />
                                    :
                                    <div id="boxPayment">
                                        <div id="inputs-Wrapper">
                                            <label htmlFor="">Número do Cartão</label>
                                            <Input type="number" placeholder="0000 0000 0000 0000" />
                                        </div>

                                        <div id="inputPayments">
                                            <div id="inputs-Wrapper">
                                                <label htmlFor="">Validade</label>
                                                <Input type="number" placeholder="04/25" />
                                            </div>

                                            <div id="inputs-Wrapper">
                                                <label htmlFor="">CVC</label>
                                                <Input type="number" placeholder="000" />
                                            </div>
                                        </div>
                                        <Button title="Finalizar pagamento" icon={RiFileListLine} onClick={updateStatus} />
                                    </div>
                            }
                        </div>
                        :
                        <div className="paymentProcess">
                            {
                                statusAdm == "Pendente" ?

                                    <div className="process">
                                        <RiTimer2Line />
                                        <p>Aguardando pagamento no caixa</p>
                                    </div>
                                    : null
                            }

                            {
                                statusAdm == "Aprovado" ?

                                    <div className="process">
                                        <GoVerified />
                                        <p>Pagamento aprovado!</p>
                                    </div>
                                    : null
                            }

                            {
                                statusAdm == "Pedido Entregue" ?

                                    <div className="process">
                                        <ImSpoonKnife />
                                        <p>Pedido entregue!</p>
                                    </div>
                                    : null
                            }

                            {
                                statusAdm == "Cancelado" ?

                                    <div className="process">
                                        <ImCancelCircle />
                                        <p>Pedido cancelado!</p>
                                    </div>
                                    : null
                            }

                        </div>
                }
            </div>
        </Container >
    )
}