import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { ButtonSvg } from "../ButtonSvg";
import Image2 from "../../assets/image2.png";
import { Resize, IsAdm } from "../../utils/index";
import { FiMinus, FiPlus, FiHeart, FiEdit } from "react-icons/fi";
import { WINDOW_MOBILE_DESCRIPTION } from "../../utils/constants";

export function Card({ data, ...rest }) {
    const isMobile = Resize()
    const isAdm = IsAdm()

    return (
        < Container {...rest}>
            {
                isAdm ?

                    <div className="edit"><ButtonSvg icon={FiEdit} /></div>

                    :
                    <div className="favorite"><ButtonSvg icon={FiHeart} /></div>
            }

            <img src={Image2} alt={`Foto de um prato ${data.nameProduct}`} />

            <h1>{data.nameProduct}</h1>

            {
                isMobile > WINDOW_MOBILE_DESCRIPTION ?
                    <p>{data.description ? data.description : "Nenhuma descricao disponivel!"}</p>
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