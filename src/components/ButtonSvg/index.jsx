import { Container } from "./style";

export function ButtonSvg({ icon: Icon, onClick }) {
    return (
        < Container
            type="button"
            onClick={onClick}
        >
            {Icon && <Icon size={26} />}
        </Container >
    )
}