import { Container } from "./styled";

const Card = ({ tech, onClick }) => {
    return (
        <Container id={tech.id} onClick={onClick}>
            <h2>{tech.title}</h2>
            <span>{tech.status}</span>
        </Container>
    );
};
export default Card;
