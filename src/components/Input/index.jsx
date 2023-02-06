import { Container } from "./style"

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={22} />}
            <input {...rest} />
        </Container>
    )
}