import Button from "../../components/Button";
import { Container, Content } from "./styled";
import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Select from "../../components/Select";
import api from "../../services/api";
import { toast } from "react-toastify";

const Signup = ({ authenticated }) => {
    const formSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email: yup
            .string()
            .email("Email inválido!")
            .required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password")], "Senhas diferentes")
            .required("Campo Obrigatório!"),
    });

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFuncion = ({ name, email, password, course_module }) => {
        const user = {
            name: name,
            email: email,
            password: password,
            course_module: course_module,
            bio: "Lorem ipsum dolor emet",
            contact: "linkedin/in/johndoe",
        };
        api.post("/users", user)
            .then(() => {
                toast.success("Conta criada com sucesso!");
            })
            .catch(() => {
                toast.error("Ops! Algo deu errado!");
            });
        reset();
    };

    if (authenticated) {
        return <Redirect to='/home' />;
    }
    return (
        <Container>
            <div>
                <figure>
                    <img src={Logo} alt='Logo kenzie hub' />
                </figure>
                <Button color={"grey-3"} onClick={() => history.push("/")}>
                    Voltar
                </Button>
            </div>
            <Content>
                <form onSubmit={handleSubmit(onSubmitFuncion)}>
                    <h1>Crie sua conta</h1>
                    <p>Rapido e grátis, vamos nessa</p>
                    <Input
                        type={"text"}
                        name={"name"}
                        register={register}
                        label={"Nome"}
                        placeholder={"Digite aqui seu nome"}
                        error={errors.name?.message}
                    />
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
                    <Input
                        type={"password"}
                        name={"passwordConfirm"}
                        register={register}
                        label={"Confirmar senha"}
                        placeholder={"Digite novamente sua senha"}
                        error={errors.passwordConfirm?.message}
                    />
                    <Select
                        label={"Selecionar módulo"}
                        name={"course_module"}
                        register={register}>
                        <option
                            selected
                            value={"Primeiro módulo (Introdução ao Frontend)"}>
                            Primeiro módulo
                        </option>
                        <option value={"Segundo módulo (Frontend Avançado)"}>
                            Segundo módulo
                        </option>
                        <option
                            value={"Terceiro módulo (Introdução ao Backend)"}>
                            Terceiro módulo
                        </option>
                        <option value={"Quarto módulo (Backend Avançado)"}>
                            Quarto módulo
                        </option>
                    </Select>
                    <Button type={"submit"} color={"primary"}>
                        Cadastrar
                    </Button>
                </form>
            </Content>
        </Container>
    );
};
export default Signup;
