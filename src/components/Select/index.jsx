import { Container } from "./style"

export function Select({ icon: Icon, ...rest }) {
    return (
        <Container>
            <select {...rest} />

            {Icon && <Icon size={22} />}

        </Container>
    )
}