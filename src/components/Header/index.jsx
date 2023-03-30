import { Input } from "../Input";
import { useState, useEffect } from "react";
import { Button } from "../Button";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { ButtonSvg } from "../ButtonSvg";
import { FiSearch } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import titleBg from "../../assets/Polygon.png";
import { Resize, IsAdm } from "../../utils/index";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { RiFileListLine, RiCloseLine, RiUserLine } from "react-icons/ri";
import { Container, LogoTextDesktop, LogoTextMobile } from "./style";
import { useAuth } from "../../hooks/auth";

export function Header({ handleCallback }) {
    const isMobile = Resize();
    const isAdm = IsAdm();

    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const { signOut } = useAuth();
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (handleCallback != null) {
            handleCallback(search)
        }

    }, [search]);

    return (
        <Container>
            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <LogoTextDesktop>
                        <div>
                            {
                                isAdm ?
                                    <Link to="/home">
                                        <div id="logoTitleAdm">
                                            <img src={titleBg} alt="logo" />
                                            <div>
                                                <h1>food Explorer</h1>
                                                <span>admin</span>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <Link to="/home">
                                        <div id="logoTitle">
                                            <img src={titleBg} alt="logo" />
                                            <div>
                                                <h1>food Explorer</h1>
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

                        <Link to="/order"><Button id="buttonRequest" icon={RiFileListLine} title={`Pedidos(${"0"})`} /></Link>
                        <Link to="/profile"><ButtonSvg icon={RiUserLine} /></Link>

                        <ButtonSvg
                            id="buttonExit"
                            icon={RxExit}
                            onClick={signOut}
                        />
                    </LogoTextDesktop>

                    :

                    <>
                        <LogoTextMobile>
                            <ButtonSvg icon={BsList} onClick={handleMenu} />
                            <Link to="/home">
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
                                    <span>{0}</span>
                                    <Link to="/profile"><ButtonSvg icon={RiUserLine} /></Link>
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