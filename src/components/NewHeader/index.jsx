import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { BsList } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { ButtonSvg } from "../ButtonSvg";
import { FiSearch } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import titleBg from "../../assets/Polygon.png";
import { Resize, IsAdm } from "../../utils/index";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";
import { RiFileListLine, RiCloseLine } from "react-icons/ri";
import { Container, LogoTextDesktop, LogoTextMobile } from "./style";

export function NewHeader() {
    const isMobile = Resize()
    const isAdm = IsAdm()

    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <Container>
            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <LogoTextDesktop>
                        <div>
                            {
                                isAdm ?
                                    <div id="logoTitleAdm">
                                        <img src={titleBg} alt="logo" />
                                        <div>
                                            <h1>food Explorer</h1>
                                            <span>admin</span>
                                        </div>
                                    </div>
                                    :
                                    <div id="logoTitle">
                                        <img src={titleBg} alt="logo" />
                                        <div>
                                            <h1>food_Explorer</h1>
                                        </div>
                                    </div>
                            }
                        </div>
                        <Input type="text" placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
                        <ButtonText className="buttonsHeader" title="Meus favoritos" />
                        <ButtonText className="buttonsHeader" title="Histórico de pedidos" />
                        <Button id="buttonRequest" icon={RiFileListLine} title={`Pedidos(${"0"})`} />
                        <ButtonSvg id="buttonExit" icon={RxExit} />
                    </LogoTextDesktop>
                    :
                    <>
                        <LogoTextMobile>
                            <ButtonSvg icon={BsList} onClick={handleMenu} />
                            <div>
                                <img src={titleBg} alt="logo" />
                                {
                                    isAdm ?
                                        <h1>food Explorer <span>admin</span></h1> : <h1>food_Explorer</h1>
                                }
                            </div>

                            <div id="buttonList">
                                <ButtonSvg icon={RiFileListLine} />
                                <span>{0}</span>
                            </div>
                        </LogoTextMobile >

                        {
                            showMenu ?
                                <div id="showMenu">
                                    <div id="header">
                                        <ButtonText icon={RiCloseLine} title="Menu" onClick={handleMenu} />
                                    </div>

                                    <div id="main">
                                        <Input type="text" placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
                                        <div id="section">
                                            {
                                                isAdm ?
                                                    <>
                                                        <ButtonText title="Novo Prato" />
                                                        <hr />
                                                    </>
                                                    :
                                                    null
                                            }
                                            <ButtonText title="Meus favoritos" />
                                            <hr />
                                            <ButtonText title="Sair" />
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