import {useState} from "react";
import {LOGIN_URL} from "../constants";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cookie, setCookie] = useCookies(['access'])
    const navigate = useNavigate()


    const handleSubmit= (event) => {
        event.preventDefault()
        apiCall(username, password)
    }

    const apiCall = async (username, password) => {

        const body = new FormData();
            body.append('username', username)
            body.append('password', password)

        const response = await fetch(
            LOGIN_URL, {
                method: 'POST',
                body: body
            }
        ).then((response) => response.json());
            setCookie('access', response.access, {path: '/'});
            navigate('../upload');

    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                     <label>Username </label>
                     <input type="text" name="username" onChange={e => setUsername((e.target.value))}  required />
                </div>
                <div className="input-container">
                     <label>Password </label>
                     <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login