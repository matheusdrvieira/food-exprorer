import { Container } from "./style";

export function Input({ icon: Icon, defaultValue, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={22} />}
            <input defaultValue={defaultValue} {...rest} />
        </Container>
    )
}