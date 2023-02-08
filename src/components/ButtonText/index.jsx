import { Container } from "./style";

export function ButtonText({ title, icon: Icon, to, ...rest }) {
    return (
        < Container
            type="button"
            {...rest}
        >
            {Icon && <Icon />}
            {title}
        </Container >
    )
}