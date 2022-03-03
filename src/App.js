import Routes from "./routes";
import GlobalStyle from "./styles";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes />
            <ToastContainer
                position='top-right'
                transition={Flip}
                autoClose={2000}
            />
        </>
    );
}

export default App;
