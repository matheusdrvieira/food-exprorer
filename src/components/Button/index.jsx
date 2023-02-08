import { Container } from "./style";

export function Button({ title, price, icon: Icon, ...rest }) {
    return (
        < Container
            type="button"
            {...rest}
        >
            {Icon && <Icon />}
            {title}
            {price}
        </Container >
    )
}