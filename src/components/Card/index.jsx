import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "./style";
import { ButtonSvg } from "../ButtonSvg";
import { FaHeart } from "react-icons/fa";
import { Resize, IsAdm } from "../../utils/index";
import { FiMinus, FiPlus, FiHeart, FiEdit } from "react-icons/fi";
import { WINDOW_MOBILE_DESCRIPTION } from "../../utils/constants";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import dishPlaceholder from "../../assets/dish.png"

export function Card({ data, ...rest }) {
    const isMobile = Resize();
    const isAdm = IsAdm();

    const [count, setCount] = useState(1);
    const [isFavorite, setIsFavorite] = useState(data.is_favorite);

    async function handleAddFavorite(id) {
        await api.post("/favorites", { dish_id: id });
        setIsFavorite(true);
    }

    async function handleRemoveFavorite(id) {
        await api.delete(`/favorites/${id}`);
        setIsFavorite(false);
    }

    async function createOrder(id) {
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
    }

    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;

    return (
        < Container {...rest}>
            {
                isAdm ?
                    <div className="edit"><Link to={`/dish/${data.id}`}><ButtonSvg icon={FiEdit} /></Link> </div>
                    :
                    <div className="favorite">
                        <ButtonSvg
                            icon={isFavorite ? FaHeart : FiHeart}
                            onClick={() => (isFavorite ? handleRemoveFavorite(data.id) : handleAddFavorite(data.id))}
                        />
                    </div>
            }
            <Link to={`/details/${data.id}`}>

                <img src={imageUrl} alt={`Foto de um prato ${data.name}`} />

                <h1>{data.name}</h1>

            </Link>
            {
                isMobile > WINDOW_MOBILE_DESCRIPTION ?
                    <p>{data.description ? data.description : "Nenhuma descricao disponivel!"}</p>
                    :
                    null
            }

            <span>
                R$ {data.price}
            </span>

            {
                isAdm ?
                    null :
                    < div id="Buttons-Wrapper">
                        <div id="input-Wrapper">
                            <ButtonSvg id="ButtonSvg" icon={FiMinus} onClick={() => setCount(count <= 0 ? 0 : count - 1)} />
                            <Input id="inputNumber" type="number" value={count} onChange={e => setCount(e.target.value)} />
                            <ButtonSvg id="ButtonSvg" icon={FiPlus} onClick={() => setCount(count + 1)} />
                        </div>

                        <Button id="buttonAdd" title="incluir" onClick={() => createOrder(data.id)} />
                    </div>
            }
        </Container >
    )
}