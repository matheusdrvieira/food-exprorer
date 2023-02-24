import { Container } from "./style";

export function Button({ title, price, onClick, icon: Icon, ...rest }) {
    return (
        < Container
            type="button"
            onClick={onClick}
            {...rest}
        >
            {Icon && <Icon />}
            {title}
            {price}
        </Container >
    )
}