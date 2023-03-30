import { Container } from "./style";

export function ButtonSvg({ icon: Icon, onChange, onClick }) {
    return (
        < Container
            type="button"
            onClick={onClick}
            onChange={onChange}
        >
            {Icon && <Icon size={26} />}
        </Container >
    )
}