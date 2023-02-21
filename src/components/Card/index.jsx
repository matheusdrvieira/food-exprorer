import { Container } from "./style";
import { ButtonSvg } from "../ButtonSvg";
import { Button } from "../Button";
import Image2 from "../../assets/image2.png";
import { Input } from "../Input";
import { FiMinus, FiPlus, FiHeart, FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import { WINDOW_MOBILE_DESCRIPTION } from "../../utils/constants";

export function Card({ data, ...rest }) {
    const [isToEdit, setIsToEdit] = useState("")

    useEffect(() => {
        setIsToEdit(false)
    })

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
        < Container {...rest}>
            {
                isToEdit ?
                    <div id="favoriteAdd"><ButtonSvg icon={FiHeart} /></div>
                    :
                    <div id="favoriteAdd"><ButtonSvg icon={FiEdit} /></div>
            }

            <img src={Image2} alt={`Foto de um prato ${data.nameProduct}`} />

            <h1>{data.nameProduct}</h1>

            {
                isMobile > WINDOW_MOBILE_DESCRIPTION ?
                    <p>{data.description ? data.description : "Nenhuma descricao disponivel"}</p>
                    :
                    null
            }

            <span>
                R$ {data.price}
            </span>

            <div id="Buttons-Wrapper">
                <div id="input-Wrapper">
                    <ButtonSvg id="ButtonSvg" icon={FiMinus} />
                    <Input id="inputNumber" type="number" defaultValue={"01"} />
                    <ButtonSvg id="ButtonSvg" icon={FiPlus} />
                </div>

                <Button id="buttonAdd" title="incluir" />
            </div>
        </Container >
    )
}