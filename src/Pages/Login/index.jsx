import React, { useRef, useState } from "react";
import './style.css'
import { Link, useHistory } from "react-router-dom";
import { UseAuth } from '../../contexts/authContext'


export default () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { Login } = UseAuth();
    const [error, setError,] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            await Login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch (error) {
            setError(" Falha ao Logar:  " + error);
        }
        setLoading(false)
    }

    return (
        <div className="login-page">
            <div className="form">
                <h1>Login</h1>
                <p> {error}</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Senha" ref={passwordRef} required />
                    <button disabled={loading} type="submit">Login</button>
                    <p className="message">Não Cadastrado? <Link to='/Registrar'>Criar uma Conta</Link> </p>
                </form>
            </div>
        </div>
    );
}
