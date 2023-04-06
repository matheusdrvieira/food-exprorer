import { Container } from "./style";

export function TextArea({ ...rest }) {
    return (
        < Container {...rest}>
            <textarea {...rest}></textarea>
        </Container >
    )
}