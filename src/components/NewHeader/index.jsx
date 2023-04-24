import { useState, useEffect } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { BsList } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ButtonSvg } from "../ButtonSvg";
import { FiSearch } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import titleBg from "../../assets/Polygon.png";
import { Resize, IsAdm } from "../../utils/index";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { RiFileListLine, RiCloseLine } from "react-icons/ri";
import { Container, LogoTextDesktop, LogoTextMobile } from "./style";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function NewHeader() {
    const isMobile = Resize();
    const isAdm = IsAdm();

    const { signOut } = useAuth();

    const [showMenu, setShowMenu] = useState(false)
    const [search, setSearch] = useState("");

    const [orderId, setOrderId] = useState()
    const [order, setOrder] = useState([]);
    const [NumberOfDishes, setNumberOfDishes] = useState(0)

    const navigate = useNavigate();

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (!search == " ") {
            navigate("/")
        }

    }, [search]);

    useEffect(() => {
        async function fetchOrderId() {
            const orderId = localStorage.getItem("orderId");
            const response = await api.get(`/orders/${orderId}`);
            setOrder(response.data);
            setOrderId(orderId);
        }

        fetchOrderId();
    }, []);

    useEffect(() => {
        if (order[0]?.status !== "Pendente") {
            setNumberOfDishes(0);
            return;
        }

        const numberOfDishes = order.map((item) => item.dishes.length).reduce((a, b) => a + b, 0);
        setNumberOfDishes(numberOfDishes);
    }, [order]);

    return (
        <Container>
            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <LogoTextDesktop>
                        <div>
                            {
                                isAdm ?
                                    <Link to="/">
                                        <div id="logoTitleAdm">
                                            <img src={titleBg} alt="logo" />
                                            <div>
                                                <h1>food Explorer</h1>
                                                <span>admin</span>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <Link to="/">
                                        <div id="logoTitle">
                                            <img src={titleBg} alt="logo" />
                                            <div>
                                                <h1>food_Explorer</h1>
                                            </div>
                                        </div>
                                    </Link>
                            }
                        </div>
                        <Input
                            type="text"
                            placeholder="Busque por pratos ou ingredientes"
                            icon={FiSearch}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <Link to="/favorites"><ButtonText className="buttonsHeader" title="Meus favoritos" /></Link>
                        <Link to="/history"><ButtonText className="buttonsHeader" title="Histórico de pedidos" /></Link>
                        <Link to={`/order/${orderId}`}><Button id="buttonRequest" icon={RiFileListLine} title={`Pedidos(${NumberOfDishes})`} /></Link>

                        <ButtonSvg id="buttonExit" icon={RxExit} onClick={signOut} />
                    </LogoTextDesktop>
                    :
                    <>
                        <LogoTextMobile>
                            <ButtonSvg icon={BsList} onClick={handleMenu} />
                            <Link to="/">
                                <div>
                                    <img src={titleBg} alt="logo" />
                                    {
                                        isAdm ?
                                            <h1>food Explorer <span>admin</span></h1> : <h1>food_Explorer</h1>
                                    }
                                </div>
                            </Link>

                            <Link to="/order">
                                <div id="buttonList">
                                    <ButtonSvg icon={RiFileListLine} />
                                    <span>{NumberOfDishes}</span>
                                </div>
                            </Link>
                        </LogoTextMobile >

                        {
                            showMenu ?
                                <div id="showMenu">
                                    <div id="header">
                                        <ButtonText icon={RiCloseLine} title="Menu" onClick={handleMenu} />
                                    </div>

                                    <div id="main">
                                        <Input
                                            type="text"
                                            placeholder="Busque por pratos ou ingredientes"
                                            icon={FiSearch}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />

                                        <div id="section">
                                            {
                                                isAdm ?
                                                    <>
                                                        <Link to="/dish"><ButtonText title="Novo Prato" /></Link>
                                                        <hr />
                                                    </>
                                                    :
                                                    null
                                            }
                                            <Link to="/favorites"><ButtonText title="Meus favoritos" /></Link>
                                            <hr />
                                            <Link to="/history"><ButtonText title="Histórico" /></Link>
                                            <hr />
                                            <ButtonText title="Sair" onClick={signOut} />
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </>
            }
        </Container >
    )
}