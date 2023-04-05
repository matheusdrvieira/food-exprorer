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

    const carousel = useRef([]);

    const handleLeftClick = (event, index) => {
        event.preventDefault();
        carousel.current[index].scrollLeft -= carousel.current[index].offsetWidth;
    };

    const handleRightClick = (event, index) => {
        event.preventDefault();
        carousel.current[index].scrollLeft += carousel.current[index].offsetWidth;
    };

    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);

    const handleCallback = search => {
        setSearch(search)
    }

    const [categories, setCategories] = useState([]);
    const [categoriesResponse, setCategoriesResponse] = useState([]);

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?name=${search}&ingredient=${search}`);
            setDishes(response.data);
        }

        fetchDishes()
    }, [search, categoriesResponse]);

    useEffect(() => {
        async function fetchCategories() {
            const response = await api.get(`/categories`);
            setCategoriesResponse(response.data);
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        if (categoriesResponse.length > 0 && dishes.length > 0) {
            const newCategories = categoriesResponse.filter(category => {
                return dishes.some(dish => dish.category_id == category.id)
            })

            setCategories(newCategories)
        }
    }, [dishes]);

    return (
        <Container>
            <Header handleCallback={handleCallback} />
            <main>
                <Banner />

                {
                    categories.map((category, index) => (
                        <section key={category.id}>
                            <h1>{category.name}</h1>

                            <div id="buttonsCarousel">
                                <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={event => handleLeftClick(event, index)} />

                                <div className="carousel" id={category.id} ref={ref => { carousel.current.push(ref) }}>

                                    {
                                        dishes.map(dish => (
                                            dish.category_id == category.id ?
                                                < Card
                                                    key={dish.id}
                                                    data={dish} /> : null
                                        ))
                                    }

                                </div>
                                <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={event => handleRightClick(event, index)} />
                            </div>
                        </section>
                    ))
                }

            </main>
            <Footer />
        </Container >

    )
}