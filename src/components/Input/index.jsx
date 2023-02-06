import { Container } from "./style"

export function Input({ icon: Icon, value, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={22} />}
            <input {...rest} value={value} />
        </Container>
    )
}