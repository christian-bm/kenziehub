import { Container, Content } from "./styled";
import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";

const Login = ({ authenticated, setAuthenticated }) => {
    const formSchema = yup.object().shape({
        email: yup
            .string()
            .email("Email inválido!")
            .required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!"),
    });

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data) => {
        api.post("/sessions", data)
            .then(({ data }) => {
                localStorage.setItem(
                    "@Kenziehub:token",
                    JSON.stringify(data.token)
                );
                localStorage.setItem(
                    "@Kenziehub:user",
                    JSON.stringify(data.user)
                );
                setAuthenticated(true);
                history.push("/home");
            })
            .catch(() => toast.error("Email ou senha inválidos!"));
    };

    if (authenticated) {
        return <Redirect to='/home' />;
    }
    return (
        <>
            <Container>
                <figure>
                    <img src={Logo} alt='Logo kenzie hub' />
                </figure>
                <Content>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h1>Login</h1>
                        <Input
                            type={"text"}
                            name={"email"}
                            register={register}
                            label={"Email"}
                            placeholder={"Digite aqui seu email"}
                            error={errors.email?.message}
                        />
                        <Input
                            type={"password"}
                            name={"password"}
                            register={register}
                            label={"Senha"}
                            placeholder={"Digite aqui sua senha"}
                            error={errors.password?.message}
                        />
                        <Button type={"submit"} color={"primary"}>
                            Entrar
                        </Button>
                        <span>Ainda não possui uma conta?</span>
                        <Button
                            color={"grey-1"}
                            onClick={() => history.push("/signup")}>
                            Cadastre-se
                        </Button>
                    </form>
                </Content>
            </Container>
        </>
    );
};
export default Login;
