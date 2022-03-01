import Routes from "./routes";
import GlobalStyle from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes />
            <ToastContainer position='top-right' />
        </>
    );
}

export default App;
