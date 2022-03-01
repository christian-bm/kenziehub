import { StyledButton } from "./styled";

const Button = ({ type = "button", children, ...rest }) => {
    return (
        <StyledButton type={type} {...rest}>
            {children}
        </StyledButton>
    );
};
export default Button;
