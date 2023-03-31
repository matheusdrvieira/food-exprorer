import { useRef } from 'react';
import { Container } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ButtonSvg } from "../../components/ButtonSvg";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {

    const carousel = useRef(null);

    const handleLeftClick = (event) => {
        event.preventDefault();

        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (event) => {
        event.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);

    const handleCallback = search => {
        setSearch(search)
    }

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?name=${search}&ingredient=${search}`)
            console.log(search);
            console.log(response);
            setDishes(response.data)
        }

        fetchDishes()
    }, [search]);

    return (
        <Container>
            <Header handleCallback={handleCallback} />
            <main>
                <Banner />
                <section>
                    <h1>Refeições</h1>

                    <div id="buttonsCarousel">
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={handleLeftClick} />

                        <div id="carousel" ref={carousel}>

                            {
                                dishes.map(dish => (
                                    < Card
                                        key={dish.id}
                                        data={dish} />
                                ))
                            }

                        </div>
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={handleRightClick} />
                    </div>
                </section>

                <section>
                    <h1>Sobremesas</h1>

                    <div id="buttonsCarousel">
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={handleLeftClick} />

                        <div id="carousel">

                            {
                                dishes.map(dish => (
                                    < Card
                                        key={dish.id}
                                        data={dish} />
                                ))
                            }

                        </div>
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={handleRightClick} />
                    </div>
                </section>

                <section>
                    <h1>Bebidas</h1>

                    <div id="buttonsCarousel">
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={handleLeftClick} />

                        <div id="carousel">

                            {
                                dishes.map(dish => (
                                    < Card
                                        key={dish.id}
                                        data={dish} />
                                ))
                            }

                        </div>
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={handleRightClick} />
                    </div>
                </section>
            </main>
            <Footer />
        </Container>

    )
}