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

export function Header() {
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
                        <img src={titleBg} alt="logo" />
                        <h1>food_Explorer</h1>
                    </LogoTextDesktop>

                    :

                    <LogoTextMobile>
                        <Button id="buttonSvg" icon={BsList} />
                        <img src={titleBg} alt="logo" />
                        <h1>food_Explorer</h1>
                    </LogoTextMobile >
            }

            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <Input id="user" type="text" placeholder="Busque por pratos ou ingredientes" icon={FiSearch} /> : null
            }

            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <Button id="buttonRequests" icon={RiFileListLine} title="Pedidos(0)" /> : <Button id="buttonSvg" icon={RiFileListLine} />
            }

            {
                isMobile > WINDOW_MOBILE_WIDTH ?
                    <Button id="buttonExit" icon={RxExit} /> : null
            }
        </Container>
    )
}