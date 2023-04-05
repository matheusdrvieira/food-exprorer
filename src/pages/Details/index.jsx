import { Container } from "./style";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RiArrowLeftSLine } from "react-icons/ri";
import { ButtonText } from "../../components/ButtonText";
import { CardDetails } from "../../components/CardDetails";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from 'react-router-dom';

export function Details() {
    const [dish, setDish] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchDishById() {
            const response = await api.get(`/dishes/${id}`)
            setDish(response.data)
        }

        fetchDishById();
    }, []);

    return (
        <Container>
            <Header />
            <Link to="/">
                <ButtonText id="buttonText" title="Voltar" icon={RiArrowLeftSLine} />
            </Link>
            <main>
                <CardDetails data={dish} />
            </main>
            <Footer />
        </Container >
    )
}