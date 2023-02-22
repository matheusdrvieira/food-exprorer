import { Container, LogoTextDesktop, LogoTextMobile } from "./style"
import titleBg from "../../assets/Polygon.png";
import { Input } from "../Input";
import { Button } from "../Button";
import { FiSearch } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { RiFileListLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { useEffect, useState } from "react";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants"
import { ButtonSvg } from "../ButtonSvg";

export function Header() {
    const [isAdm, setIsAdm] = useState("")
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        setIsAdm(true)
    })

    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    return (
        <Container>
            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <LogoTextDesktop>
                        <div>
                            <img src={titleBg} alt="logo" />
                            {
                                isAdm ?
                                    <div>
                                        <h1>food_Explorer</h1>
                                        <span>admin</span>
                                    </div>
                                    :
                                    <h1>food_Explorer</h1>
                            }
                        </div>
                        <Input type="text" placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
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
                                        <h1>food_Explorer <span>admin</span></h1> : <h1>food_Explorer</h1>
                                }
                            </div>

                            <div id="buttonList">
                                <ButtonSvg icon={RiFileListLine} />
                                <span>{0}</span>
                            </div>
                        </LogoTextMobile >

                        {
                            showMenu ?
                                <div>
                                    menu
                                </div>
                                :
                                null
                        }
                    </>
            }
        </Container >
    )
}