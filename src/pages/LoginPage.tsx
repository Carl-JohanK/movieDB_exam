import { Navigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import userModel from "../model/userModel";

type props = {
    registerUser: (newUser: userModel) => void,
    login: (user: userModel) => void
}

function LoginPage({ registerUser, login }: props) {

    if(sessionStorage.getItem('user') !== null) return <Navigate to={'/'}/>

    return(
        <section className='background-body'>
            <header className="header-img"></header>
            <Login login={login} />
            <Register registerUser={registerUser} />
        </section>
    )
}

export default LoginPage;