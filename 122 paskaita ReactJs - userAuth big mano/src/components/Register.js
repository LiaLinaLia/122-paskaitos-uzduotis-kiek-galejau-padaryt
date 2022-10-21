import {useRef} from 'react';
import {post} from "../plugins/http";

const Register = () => {
    const emailRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()


    async function register() {
        const user = {
            email: emailRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
        }

        const data = await post('register', user)


        console.log(data)
    }


    return (
        <div className='register d-flex flex-wrap flex-column p50'>
            <h3 className='text-center'>Registracija</h3>
            <input ref={emailRef} type="text" placeholder="email" className='mt20 p10'/>
            <input ref={passOneRef} type="text" placeholder="pass one" className='mt20 p10'/>
            <input ref={passTwoRef} type="text" placeholder="pass two" className='mt20 p10'/>
            <button onClick={register} className='mt20 p10'>Register</button>
        </div>
    );
};

export default Register;