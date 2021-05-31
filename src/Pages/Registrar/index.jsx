import React, { useRef, useState } from "react";
import './style.css'
import { Link, useHistory } from "react-router-dom";
import { UseAuth } from '../../contexts/authContext'


export const Registrar = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { Signup } = UseAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            await Signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch (error) {
            setError("Não foi Possivel Cadastrar: " + error);
        }
        setLoading(false)
    }

    return (
        <div className="login-page">
            <div className="form">
                <h1>Registrar Conta</h1>

                {error}
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email ex:email@email.com" ref={emailRef} required />
                    <input type="password" placeholder="Senha" ref={passwordRef} required />
                    <button disabled={loading} type="submit">Cadastrar</button>
                    <p className="message">Já está Cadastrado? <Link to='/login'>Entrar</Link></p>
                </form>
            </div>
        </div>
    );
}
