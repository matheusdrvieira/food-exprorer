import { Container } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TagsInput } from "../../components/TagsInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button"
import { RiArrowLeftSLine, RiUpload2Fill, RiArrowDownSLine } from "react-icons/ri";

export function NewProduct() {
    return (
        <Container>
            <ButtonText title="Voltar" icon={RiArrowLeftSLine} />

            <h1>Novo Prato</h1>

            <div>

                <div>
                    <label htmlFor="file">Imagem do prato</label>
                    <Input type="file" id="file" icon={RiUpload2Fill} />
                </div>

                <div>
                    <label htmlFor="name">Nome</label>
                    <Input type="text" id="name" />
                </div>

                <div>
                    <label htmlFor="category">Categoria</label>
                    <select name="input" id="inputSelect">
                        <option value="Refeição">Refeição</option>
                        <option value="Sobremesas">Sobremesas</option>
                        <option value="Bebidas">Bebidas</option>
                    </select>
                </div>

            </div>

            <label htmlFor="addTag">Ingredientes</label>

            <div>

                <div>
                    <TagsInput value="opa" />
                    <TagsInput id="addTag" isNew placeholder="Adicionar" />
                </div>

                <label htmlFor="price">Preço</label>
                <Input type="number" id="price" />

            </div>

            <div>
                <label htmlFor="description">Descrição</label>
                <TextArea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

                <Button title="Salvar alterações" />
            </div>
        </Container>
    )
}