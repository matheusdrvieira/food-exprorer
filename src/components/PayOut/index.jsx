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
    const [paymentMethod, setPaymentMethod] = useState();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(null);
    const [disableButtons, setDisableButtons] = useState(false);
    const orderId = localStorage.getItem("orderId");

    const [numberCard, setNumberCard] = useState(false);
    const [validate, setValidate] = useState(false);
    const [segurityCode, setSegurityCode] = useState(false);

    const handlePayment = () => {
        setPayment(!payment);
    };

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);

        if (method === "Pix") {
            setTimeout(() => {
                finalizePaymentPix();
            }, 5000);
        }

        api.put(`/orders/${orderId}`, { payment: method });
    };

    const handleClick = (method) => {
        if (method === paymentMethod) {
            return;
        }

        handlePayment();
        handlePaymentMethod(method);
    };

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get(`/orders/${orderId}`);
            setOrders(response.data);

            if (response.data[0].payment == "Pix") {
                setPayment(true)
            }
        }

        fetchOrders();
    }, []);

    useEffect(() => {
        const currentStatus = orders.map(order => order.status).toString();
        if (currentStatus !== "Pendente") {
            setStatus(currentStatus);
        }
    }, [orders]);

    const finalizePayment = () => {
        if (!numberCard) {
            alert("Coloque o numero do seu Cartao")
            return
        }

        if (!validate) {
            alert("Coloque o numero da validade do seu Cartao")
            return
        }

        if (!segurityCode) {
            alert("Coloque o codigo de seguranca do seu Cartao")
            return
        }

        const newStatus = orders.map(order => order.status).toString()
        setStatus(newStatus)
        localStorage.setItem('@OrderStatus', newStatus)
    };

    const finalizePaymentPix = () => {
        const newStatus = orders.map(order => order.status).toString()
        setStatus(newStatus)
        localStorage.setItem('@OrderStatus', newStatus)
    };

    useEffect(() => {
        const localStorageStatus = localStorage.getItem('@OrderStatus')
        if (localStorageStatus) {
            setStatus(localStorageStatus)
        }
    }, [orders]);

    useEffect(() => {
        if (status === "Pendente" || status === "Aprovado" || status === "Pedido Entregue" || status === "Cancelado") {
            setDisableButtons(true);
        } else {
            setDisableButtons(false);
        }
    }, [status]);

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
                    !status ?
                        <div className="PaymentProcess">
                            {
                                payment ?
                                    <img src={QRCODE} alt="qrcode" />
                                    :
                                    <div id="boxPayment">
                                        <div id="inputs-Wrapper">
                                            <label htmlFor="">Número do Cartão</label>
                                            <Input type="number" placeholder="0000 0000 0000 0000" onChange={e => setNumberCard(e.target.value)} />
                                        </div>

                                        <div id="inputPayments">
                                            <div id="inputs-Wrapper">
                                                <label htmlFor="">Validade</label>
                                                <Input type="number" placeholder="04/25" onChange={e => setValidate(e.target.value)} />
                                            </div>

                                            <div id="inputs-Wrapper">
                                                <label htmlFor="">CVC</label>
                                                <Input type="number" placeholder="000" onChange={e => setSegurityCode(e.target.value)} />
                                            </div>
                                        </div>
                                        <Button title="Finalizar pagamento" icon={RiFileListLine} onClick={finalizePayment} />
                                    </div>
                            }
                        </div>
                        :
                        <div className="paymentProcess">
                            {
                                status == "Pendente" ?

                                    <div className="process">
                                        <RiTimer2Line />
                                        <p>Aguardando pagamento no caixa</p>
                                    </div>
                                    : null
                            }

                            {
                                status == "Aprovado" ?

                                    <div className="process">
                                        <GoVerified />
                                        <p>Pagamento aprovado!</p>
                                    </div>
                                    : null
                            }

                            {
                                status == "Pedido Entregue" ?

                                    <div className="process">
                                        <ImSpoonKnife />
                                        <p>Pedido entregue!</p>
                                    </div>
                                    : null
                            }

                            {
                                status == "Cancelado" ?

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