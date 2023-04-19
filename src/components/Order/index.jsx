import { Container } from "./style";
import { ButtonText } from "../ButtonText";
import { useState, useEffect } from 'react';
import dishPlaceholder from "../../assets/dish.png"
import { api } from "../../services/api";

export function Order({ data, ...rest }) {
    const [orderDish, setOrderDish] = useState(data);

    async function handleRemoveDish(orderId, dishId) {
        try {
            await api.delete(`/orders/${orderId}`, { data: { dishes: [{ id: dishId }] } });
            const updatedOrderDishes = orderDish.dishes.filter(dish => dish.id !== dishId);
            setOrderDish({ ...orderDish, dishes: updatedOrderDishes });
            alert("Prato removido do seu pedido recarregue sua pagina!")
        } catch (error) {
            console.log(error);
        }
    }

    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;

    return (
        <Container {...rest}>
            {
                data.dishes.map((dish, index) => (
                    <div id="modal" key={index}>
                        <img src={imageUrl} alt="Prato" />
                        <div id="box">
                            <div id="boxInfo">
                                <span>{`${dish.quantity} x`}</span>
                                <h1>{dish.name}</h1>
                                <p>R$ {dish.price.toFixed(2)}</p>
                            </div>
                            <ButtonText title="Excluir" onClick={() => handleRemoveDish(data.id, dish.id)} />
                        </div>
                    </div>
                ))
            }
        </Container >
    )
}