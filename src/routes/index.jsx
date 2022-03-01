import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Singup";

const Routes = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [authenticated]);

    return (
        <Switch>
            <Route exact path='/'>
                <Login
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Route>
            <Route path='/signup'>
                <Signup authenticated={authenticated} />
            </Route>
            <Route exact path='/home'>
                <Home
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Route>
        </Switch>
    );
};
export default Routes;
