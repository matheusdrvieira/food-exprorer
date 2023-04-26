import { Tags } from "../Tags";
import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { ButtonSvg } from "../ButtonSvg";
import { IsAdm } from "../../utils/index";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiFileListLine } from "react-icons/ri";
import { useState } from 'react';
import dishPlaceholder from "../../assets/dish.png"
import { api } from "../../services/api";

export function CardDetails({ data, ...rest }) {
    const isAdm = IsAdm();
    const [count, setCount] = useState(1);

    async function createOrder(id) {
        try {
            const order = {
                dishes: [{
                    id,
                    quantity: count
                }]
            };
            const response = await api.post("/orders", order);
            alert("Prato adicionado ao seu pedido")

            const orderId = response.data.order_id;
            localStorage.setItem("orderId", orderId);

        } catch (error) {
            alert("Não foi possível adicionar o prato ao seu pedido. Por favor, tente novamente mais tarde.");
            console.log(error);
        }
    }

    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;

    return (
        < Container {...rest}>

            <img src={imageUrl} alt="Foto de um prato" />

            <div id="box">
                <h1>{data.name}</h1>

                <p>{data.description ? data.description : "Nenhuma descricao disponivel!"}</p>

                {
                    data.ingredients &&

                    <div id="tags">
                        {
                            data.ingredients.map(ingredient => <Tags key={ingredient.id} name={ingredient.name} />)
                        }
                    </div>
                }

                <div id="Buttons-Wrapper">
                    {
                        isAdm ?
                            <Link to={`/dish/${data.id}`}><Button className="buttonEdit" title="Editar prato" /></Link>
                            :
                            <>
                                <div id="input-Wrapper">
                                    <ButtonSvg id="ButtonSvg"
                                        icon={FiMinus}
                                        onClick={() => setCount(count <= 0 ? 0 : count - 1)}
                                    />

                                    <Input id="inputNumber"
                                        type="number"
                                        value={count}
                                        onChange={e => setCount(e.target.value)} />

                                    <ButtonSvg id="ButtonSvg"
                                        icon={FiPlus}
                                        onClick={() => setCount(count + 1)}
                                    />
                                </div>

                                <Button className="buttonAdd" title="Pedir" price={` R$ ${data.price}`} icon={RiFileListLine} onClick={() => createOrder(data.id)} />
                            </>
                    }
                </div>
            </div>
        </Container >
    )
}