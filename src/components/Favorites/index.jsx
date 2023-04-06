import { Container } from "./style"
import { ButtonText } from "../ButtonText";
import dishPlaceholder from "../../assets/dish.png"
import { api } from "../../services/api";

export function Favorites({ data, onDelete, ...rest }) {
    const imageUrl = data.image ? `${api.defaults.baseURL}/image/${data.image}` : dishPlaceholder;

    async function handleDeleteDish() {
        if (confirm("Tem certeza que deseja deletar esse prato!")) {
            onDelete(data.id);
            await api.delete(`/favorites/${data.id}`);
            alert("Prato deletado com sucesso!");
        }
    }

    return (
        <Container>
            <img src={imageUrl} alt="Prato" />
            <div>
                <h1>{data.name}</h1>
                <ButtonText
                    title="Remover dos Favoritos"
                    onClick={handleDeleteDish}
                />
            </div>
        </Container >
    )
}