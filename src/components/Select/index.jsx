import { Container, Content } from "./styled";

const Select = ({ name, register, children, label, ...rest }) => {
    return (
        <Container>
            <div>{label}</div>
            <Content>
                <select {...rest} {...register(name)}>
                    {children}
                </select>
            </Content>
        </Container>
    );
};
export default Select;
