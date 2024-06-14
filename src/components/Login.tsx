import { Link } from 'react-router-dom';
import './style/login.css'
import userModel from '../model/userModel';

type props = {
    login: (user: userModel) => void
}

function Login({ login }: props) {

    function tryLogin(){
        const name = document.querySelector('#user') as HTMLInputElement;
        const password = document.querySelector('#pass') as HTMLInputElement;

        const tryLoginUser: userModel = {
            "username": name.value,
            "password": password.value
        }

        login(tryLoginUser)
    }

    return(
        <form action="login" className='login-form'>
            <h1>Login</h1>
            <input type="text" className='login-input' id='user' placeholder='enter Username...'/>
            <input type="text" className='login-input' id='pass' placeholder='enter Password...'/>
           
            <input type="button" className='login-btn' value='Login' onClick={tryLogin}/>
            
        </form>
    )
}

export default Login;