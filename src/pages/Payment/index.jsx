import { Container } from "./style";
import { Resize } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { PayOut } from "../../components/PayOut";
import { NewHeader } from "../../components/NewHeader";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";

export function Payment() {
    const isMobile = Resize()
    const navigate = useNavigate();

    return (
        <Container>
            <NewHeader />
            <main>
                {
                    isMobile < WINDOW_MOBILE_WIDTH ?
                        <PayOut />
                        :
                        navigate("/order")
                }
            </main>
            <Footer />
        </Container>
    )
}