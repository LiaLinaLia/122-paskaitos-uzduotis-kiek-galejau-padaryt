import {useRef, useState} from 'react';
import {post} from "../plugins/http";
import { useNavigate } from 'react-router-dom';
import ShowPhoto from './ShowPhoto';

const Login = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()

    const [msg, setMsg ] = useState("")
    const [error, setError] = useState("")


    async function login() {
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        setError("")

        const res = await post("login", user)  //objektas, kurį gaunu iš backend'o

        if(!res.error) {
            console.log(res.message)
            setMsg(res.message)

            localStorage.setItem("secret", res.data.secret)  //įdedam sugeneruotą secret į local storage
            navigate("/info")   // nukreipia į kitą psl. routu info
        }

        console.log(res)
    }

    return (
        <div className='register d-flex flex-wrap flex-column p50'>
                    <h3 className='text-center'>Login</h3>
            <h1>{msg}</h1>
            <input ref={emailRef} type="text" placeholder="email" className='mt20 p10'/>
            <input ref={passRef} type="text" placeholder="password" className='mt20 p10'/>
            <button onClick={login} className='mt20 p10'>Login</button>
            <h3>{error}</h3>
            

        </div>
    );
};

export default Login;

//1
// in user database schema add new key "photo" and "secret"
// on user registration, let user to add his photo url
// when user registers, you generate random string value and save it to "secret" key

// when user will login, we send "secret" to front end
// in front end we save "secret" to local storage
// secret needed for later requests validation (requests where user should be logged in to make them)

//2
// create route and controller where user can get his photo
// this photo can be retrieved only if user provides his "secret"
// user sends his secret to this route, you check if user exists by this secret
// find user by secret and return only his photo to front-end

//3
// using "secret" from localstorage, make login in front end,
// so user could retrieve his photo