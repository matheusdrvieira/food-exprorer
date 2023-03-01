import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { GoVerified } from "react-icons/go";
import QRCODE from "../../assets/Vector.png";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import { RiFileListLine, RiTimer2Line } from "react-icons/ri";
import { ImSpoonKnife, ImCancelCircle } from "react-icons/im";

export function PayOut() {
    const [payment, setPayment] = useState(false)
    const [process, setProcess] = useState(false)

    const handlePayment = () => {
        setPayment(!payment)
    }

    const handleProcess = () => {
        setProcess(!process)
    }

    return (
        <Container>
            <h1>Pagamento</h1>
            <div id="box">
                <div id="buttonPayments">
                    <Button id="buttonCard" icon={FaRegCreditCard} onClick={handlePayment} />
                    <Button id="buttonQrcode" icon={FaQrcode} onClick={handlePayment} />
                </div>
                {
                    !process ?
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
                                process ?
                                    <div className="processOne">
                                        <RiTimer2Line />
                                        <p>Aguardando pagamento no caixa</p>
                                    </div>

                                    :

                                    <div className="processTwo">
                                        <GoVerified />
                                        <p>Pagamento aprovado!</p>
                                    </div>

                                    &&

                                    <div className="processThree">
                                        <ImSpoonKnife />
                                        <p>Pedido entregue!</p>
                                    </div>

                                    &&

                                    <div className="processFor">
                                        <ImCancelCircle />
                                        <p>Pedido cancelado!</p>
                                    </div>
                            }
                        </div>
                }
            </div>
        </Container >
    )
}