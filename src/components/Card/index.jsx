import { Container } from "./style";
import { ButtonSvg } from "../ButtonSvg"
import { Button } from "../Button"
import Image2 from "../../assets/image2.png"
import { Input } from "../Input";
import { FiMinus, FiPlus, FiHeart, FiEdit2 } from "react-icons/fi"
import { useEffect, useState } from "react";
import { WINDOW_MOBILE_DESCRIPTION } from "../../utils/constants"

export function Card({ data, isAdm, ...rest }) {
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
                isAdm = 1 ?
                    <div id="favoriteAdd"><ButtonSvg icon={FiHeart} /></div>

                    :

                    <div id="favoriteAdd"><ButtonSvg icon={FiEdit2} /></div>
            }

            <img src={Image2} alt="Foto de um prato" />

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