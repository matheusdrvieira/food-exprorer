import { Container } from "./style";

export function Button({ title, icon: Icon, ...rest }) {
    return (
        < Container
            type="button"
            {...rest}
        >
            {title}
            {Icon && <Icon size={22} />}
        </Container >
    )
}