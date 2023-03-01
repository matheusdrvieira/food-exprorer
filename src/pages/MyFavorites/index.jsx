import { Container } from "./style";
import { Footer } from "../../components/Footer";
import { NewHeader } from "../../components/NewHeader";
import { Favorites } from "../../components/Favorites";

export function MyFavorites() {
    return (
        <Container>
            <NewHeader />
            <main>
                <h2>Meus Favoritos</h2>
                <div id="section">
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                    <Favorites data={{
                        name: "Salada Radish"
                    }} />
                </div>
            </main>
            <Footer />
        </Container>
    )
}