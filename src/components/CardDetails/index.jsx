import { Tags } from "../Tags";
import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { ButtonSvg } from "../ButtonSvg";
import { IsAdm } from "../../utils/index";
import Image2 from "../../assets/image2.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiFileListLine } from "react-icons/ri";

export function CardDetails({ data, ...rest }) {
    const isAdm = IsAdm()

    return (
        < Container {...rest}>

            <img src={Image2} alt="Foto de um prato" />

            <div id="box">
                <h1>{data.nameProduct}</h1>

                <p>{data.description ? data.description : "Nenhuma descricao disponivel!"}</p>

                <div id="tags">
                    {data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)}
                </div>

                <div id="Buttons-Wrapper">
                    <div id="input-Wrapper">
                        <ButtonSvg id="ButtonSvg" icon={FiMinus} />
                        <Input id="inputNumber" type="number" defaultValue={"01"} />
                        <ButtonSvg id="ButtonSvg" icon={FiPlus} />
                    </div>

                    {
                        isAdm ?
                            <Button className="buttonEdit" title="Editar prato" />
                            :
                            <Button className="buttonAdd" title="Pedir" price={` R$ ${data.price}`} icon={RiFileListLine} />
                    }
                </div>
            </div>
        </Container >
    )
}