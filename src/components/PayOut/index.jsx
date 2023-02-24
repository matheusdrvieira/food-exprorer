import { Button } from "../Button";
import { Container } from "./style";
import { FaRegCreditCard, FaQrcode } from "react-icons/fa";
import QRCODE from "../../assets/Vector.png";
import { useState, useEffect } from "react";
import { Input } from "../Input";
import { RiFileListLine } from "react-icons/ri";

export function PayOut() {
    const [payment, setPayment] = useState(false)

    const handlePayment = () => {
        setPayment(!payment)

        if (payment) {
        } else {
        }
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
                            <Button title="Finalizar pagamento" icon={RiFileListLine} />
                        </div>
                }
            </div>
        </Container>
    )
}