import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button";
import { Container, Content, UlStyled } from "./styled";
import { HiPlusSm } from "react-icons/hi";
import Card from "../../components/Card";
import api from "../../services/api";
import Modal from "../../components/Modal";

const Home = ({ authenticated, setAuthenticated }) => {
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
    );
    const [userId] = useState(
        JSON.parse(localStorage.getItem("@Kenziehub:userId")) || ""
    );
    const [user, setUser] = useState({});
    const [techs, setTechs] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState(true);
    const [cardId, setCardId] = useState("");

    const loadTechs = () => {
        api.get(`/users/${userId}`).then(({ data }) => {
            setUser(data);
            setTechs(data.techs);
        });
    };

    useEffect(() => {
        loadTechs();
    }, []);

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
            <div className="container-div-nav">
                <nav>
                    <figure>
                        <img src={Logo} alt='Logo kenzie hub' />
                    </figure>
                    <Button color={"grey-3"} onClick={() => logoff()}>
                        Sair
                    </Button>
                </nav>
            </div>
            <div className="container-div-header">
                <header>
                    <h1>Olá, {user.name}</h1>
                    <span>{user.course_module}</span>
                </header>
            </div>
            <Content>
                <div>
                    <h2>Tecnologias</h2>
                    <Button
                        onClick={() => {
                            setModalType(true);
                            setModalIsOpen(true);
                        }}
                        color={"grey-3"}>
                        <HiPlusSm />
                    </Button>
                </div>
                <UlStyled>
                    {techs.length === 0 ? (
                        <p>Nenhuma tecnologia cadastrada</p>
                    ) : (
                        techs.map((tech) => (
                            <Card
                                onClick={(e) => {
                                    setCardId(e.currentTarget.id);
                                    setModalType(false);
                                    setModalIsOpen(true);
                                }}
                                key={tech.id}
                                tech={tech}
                            />
                        ))
                    )}
                </UlStyled>
            </Content>
            <Modal
                modalType={modalType}
                isOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                loadTechs={loadTechs}
                token={token}
                cardId={cardId}
                techs={techs}
            />
        </Container>
    );
};
export default Home;
