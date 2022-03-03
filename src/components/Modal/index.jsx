import ReactModal from "react-modal";
import { toast } from "react-toastify";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, ContentForm } from "./styled";
import { useEffect, useState } from "react";
import Button from "../Button";
import { GrFormClose } from "react-icons/gr";
import Input from "../Input";
import Select from "../Select";

const Modal = ({
    token,
    loadTechs,
    setModalIsOpen,
    isOpen,
    modalType,
    cardId,
    techs,
}) => {
    const [titleCard, setTitleCard] = useState("");
    const [statusCard, setStatusCard] = useState("");

    const formSchema = yup.object().shape({
        title: yup.string().min(1, "Campo obrigatório!"),
        status: yup.string(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    useEffect(() => {
        const tech = techs.find(({ id }) => cardId === id);
        if (tech) {
            setTitleCard(tech.title);
            setStatusCard(tech.status);
        }
    }, [cardId]);

    const createTech = (data) => {
        api.post("/users/techs", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                toast.success("Nova tecnologia cadastrada!");
                loadTechs();
                reset();
            })
            .catch(() => toast.error("Tecnologia ja criada!"));
    };

    const modifyTech = ({ status }) => {
        api.put(
            `/users/techs/${cardId}`,
            {
                status: status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(() => {
            loadTechs();
            setModalIsOpen(false);
            toast.success("Tecnologia alterada!");
        });
    };

    const deleteTech = (id) => {
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(() => {
            toast.success("Tecnologia excluida!");
            loadTechs();
            setModalIsOpen(false);
        });
    };

    return (
        <ReactModal
            isOpen={isOpen}
            className='modal'
            onRequestClose={() => setModalIsOpen(false)}>
            <Container>
                {modalType ? (
                    <h3>Cadastrar Tecnologia</h3>
                ) : (
                    <h3>Tecnologia Detalhes</h3>
                )}
                <Button
                    color={"transparent"}
                    onClick={() => setModalIsOpen(false)}>
                    <GrFormClose />
                </Button>
            </Container>
            {modalType ? (
                <ContentForm onSubmit={handleSubmit(createTech)}>
                    <Input
                        type={"text"}
                        name={"title"}
                        register={register}
                        label={"Nome"}
                        placeholder={"Nome da tecnologia"}
                        error={errors.title?.message}
                    />
                    <Select
                        label={"Selecionar status"}
                        defaultValue={"Iniciante"}
                        name={"status"}
                        register={register}>
                        <option value={"Iniciante"}>Iniciante</option>
                        <option value={"Intermediário"}>Intermediário</option>
                        <option value={"Avançado"}>Avançado</option>
                    </Select>
                    <Button
                        type={"submit"}
                        color={"primary"}
                        className={"button-register"}>
                        Cadastrar Tecnologia
                    </Button>
                </ContentForm>
            ) : (
                <ContentForm onSubmit={handleSubmit(modifyTech)}>
                    <Input
                        type={"text"}
                        label={"Nome do projeto"}
                        placeholder={titleCard}
                        name={"title"}
                        register={register}
                        disabled
                    />
                    <Select
                        label={"Status"}
                        name={"status"}
                        defaultValue={statusCard}
                        register={register}>
                        <option value={"Iniciante"}>Iniciante</option>
                        <option value={"Intermediário"}>Intermediário</option>
                        <option value={"Avançado"}>Avançado</option>
                    </Select>
                    <div className='div-buttons'>
                        <Button
                            color={"primary"}
                            type={"submit"}
                            className={"button-alt"}>
                            Salvar alterações
                        </Button>
                        <Button
                            className={"button-delete"}
                            color={"grey-1"}
                            onClick={() => {
                                deleteTech(cardId);
                                setModalIsOpen(false);
                            }}>
                            Excluir
                        </Button>
                    </div>
                </ContentForm>
            )}
        </ReactModal>
    );
};

export default Modal;
