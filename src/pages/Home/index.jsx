import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button";
import { Container, Content, UlStyled } from "./styled";
import { HiPlusSm } from "react-icons/hi";

const Home = ({ authenticated, setAuthenticated }) => {
    const [user] = useState(
        JSON.parse(localStorage.getItem("@Kenziehub:user"))
    );
    const [technologies, setTechnologies] = useState([]);

    const history = useHistory();

    const logoff = () => {
        localStorage.removeItem("@Kenziehub:token");
        localStorage.removeItem("@Kenziehub:user");
        setAuthenticated(false);
        history.push("/");
    };

    if (!authenticated) {
        return <Redirect to={"/"} />;
    }
    return (
        <Container>
            <nav>
                <figure>
                    <img src={Logo} alt='Logo kenzie hub' />
                </figure>
                <Button color={"grey-3"} onClick={() => logoff()}>
                    Sair
                </Button>
            </nav>
            <header>
                <h1>Olá, {user.name}</h1>
                <span>{user.course_module}</span>
            </header>
            <Content>
                <div>
                    <h2>Tecnologias</h2>
                    <Button color={"grey-3"}>
                        <HiPlusSm />
                    </Button>
                </div>
                <UlStyled></UlStyled>
            </Content>
        </Container>
    );
};
export default Home;
