import { Container } from "./style";

export function ButtonSvg({ icon: Icon, }) {
    return (
        < Container
            type="button"
        >
            {Icon && <Icon size={26} />}
        </Container >
    )
}