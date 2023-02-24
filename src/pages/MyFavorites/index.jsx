import { Container } from "./style";
import { NewHeader } from "../../components/NewHeader";
import { Favorites } from "../../components/Favorites";
import { Footer } from "../../components/Footer";

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