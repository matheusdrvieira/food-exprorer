import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import QRCODE from "../../assets/Vector.png";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";

export function PayOut() {
    const [payment, setPayment] = useState(false);
    const [process, setProcess] = useState(false);
    const [status, setStatus] = useState(null);

    const handlePayment = () => {
        setPayment(!payment)
    }

    const handleProcess = () => {
        setProcess(!process)
    }

    useEffect(() => {
        setStatus()
    })

    return (
        <Container>
            <h1>Pagamento</h1>
            <div id="box">
                <div id="buttonPayments">
                    <Button id="buttonCard" icon={FaRegCreditCard} onClick={handlePayment} />
                    <Button id="buttonQrcode" icon={FaQrcode} onClick={handlePayment} />
                </div>
                {
                    !process && !status ?
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
                                        <Button title="Finalizar pagamento" icon={RiFileListLine} onClick={handleProcess} />
                                    </div>
                            }
                        </div>
                        :
                        <div className="paymentProcess">
                            {
                                status == "AGUARDANDO_PAGAMENTO" ?

                                    <div className="process">
                                        <RiTimer2Line />
                                        <p>Aguardando pagamento no caixa</p>
                                    </div>
                                    : null
                            }

                            {
                                status == "PAGAMENTO_APROVADO" ?

                                    <div className="process">
                                        <GoVerified />
                                        <p>Pagamento aprovado!</p>
                                    </div>
                                    : null
                            }

                            {
                                status == "PEDIDO_ENTREGUE" ?

                                    <div className="process">
                                        <ImSpoonKnife />
                                        <p>Pedido entregue!</p>
                                    </div>
                                    : null
                            }

                            {
                                status == "PEDIDO_CANCELADO" ?

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