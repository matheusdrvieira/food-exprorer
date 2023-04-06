import { Container } from "./style";
import { Footer } from "../../components/Footer";
import { NewHeader } from "../../components/NewHeader";
import { Favorites } from "../../components/Favorites";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function MyFavorites() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchDishById() {
            const response = await api.get(`/favorites`)
            setDishes(response.data)
        }

        fetchDishById();
    }, [dishes]);

    function handleDeleteDish(id) {
        setDishes(dishes.filter(dish => dish.id !== id));
    }

    return (
        <Container>
            <NewHeader />
            <main>
                <h2>Meus Favoritos</h2>
                <div id="section">
                    {
                        dishes.map(dish => (
                            < Favorites
                                key={dish.id}
                                data={dish}
                                onDelete={handleDeleteDish}
                            />
                        ))
                    }
                </div>
            </main>
            <Footer />
        </Container>
    )
}