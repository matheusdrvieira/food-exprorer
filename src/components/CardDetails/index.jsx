import { Container } from "./style";
import { ButtonSvg } from "../ButtonSvg";
import { Button } from "../Button";
import Image2 from "../../assets/image2.png";
import { Input } from "../Input";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Tags } from "../Tags";
import { BsList } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";

export function CardDetails({ data, isAdm, ...rest }) {
    return (
        < Container {...rest}>

            <img src={Image2} alt="Foto de um prato" />

            <div id="box">
                <h1>{data.nameProduct}</h1>

                <p>{data.description ? data.description : "Nenhuma descricao disponivel"}</p>

                <div id="tags">
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </div>

                <div id="Buttons-Wrapper">
                    <div id="input-Wrapper">
                        <ButtonSvg id="ButtonSvg" icon={FiMinus} />
                        <Input id="inputNumber" type="number" defaultValue={"01"} />
                        <ButtonSvg id="ButtonSvg" icon={FiPlus} />
                    </div>

                    <Button id="buttonAdd" title="Pedir" price={` R$ ${data.price}`} icon={RiFileListLine} />

                </div>
            </div>

        </Container >
    )
}