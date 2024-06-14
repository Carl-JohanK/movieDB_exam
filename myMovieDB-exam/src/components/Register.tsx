import userModel from '../model/userModel'
import './style/register.css'

type props = {
    registerUser: (newUser: userModel) => void
}

function Register({ registerUser }: props) {

    function sinup(){
        const name = document.querySelector('#userName') as HTMLInputElement;
        const password = document.querySelector('#password') as HTMLInputElement;
    
        const registerNewUser: userModel = {
            "username": name.value,
            "password": password.value,
        }
        registerUser(registerNewUser)
    }
    

    return(
        <form action="register" className='register-form'>
            <h1>Register</h1>
            <input type="text" className='register-input' id='userName' placeholder='enter Username...'/>
            <input type="text" className='register-input' id='password' placeholder='enter Password...'/>
            <input type="button" className='register-btn' value="register" onClick={sinup}/>
        </form>
    )
}

export default Register;