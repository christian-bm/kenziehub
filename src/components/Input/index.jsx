import { Container, InputContainer } from "./styled";
import Button from "../Button";

const Input = ({ label, icon: Icon, name, register, error, ...rest }) => {
    return (
        <Container>
            <div>
                {label} {!!error && <span className="errored"> - {error}</span>}
            </div>
            <InputContainer>
                <input {...register(name)} {...rest} />
                {!!Icon && (
                    <Button>
                        <Icon />
                    </Button>
                )}
            </InputContainer>
        </Container>
    );
};
export default Input;
