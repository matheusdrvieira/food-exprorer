import { useRef } from 'react';
import { Container } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { ButtonSvg } from "../../components/ButtonSvg";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

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

    return (
        <Container>
            <Header />
            <main>
                <Banner />
                <section>
                    <h1>Refeições</h1>

                    <div id="buttonsCarousel">
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={handleLeftClick} />

                        <div id="carousel" ref={carousel}>
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                        </div>
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={handleRightClick} />
                    </div>
                </section>

                <section>
                    <h1>Sobremesas</h1>

                    <div id="buttonsCarousel">
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={handleLeftClick} />

                        <div id="carousel">
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                        </div>
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={handleRightClick} />
                    </div>
                </section>

                <section>
                    <h1>Bebidas</h1>

                    <div id="buttonsCarousel">
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleLeft} onClick={handleLeftClick} />

                        <div id="carousel">
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />

                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                            <Card data={{
                                nameProduct: "Salada Ravanello",
                                description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
                                price: "49,97",
                            }} />
                        </div>
                        <ButtonSvg id="buttonSvg" icon={AiOutlineDoubleRight} onClick={handleRightClick} />
                    </div>
                </section>
            </main>
            <Footer />
        </Container>

    )
}