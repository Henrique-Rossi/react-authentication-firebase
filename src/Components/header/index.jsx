

import React, { useState } from "react"
import './style.css'
import { Link } from 'react-router-dom'
import { UseAuth } from "../../contexts/authContext"
import { useHistory } from "react-router-dom"

export const Header = () => {
   
    const { currentUser, Logout } = UseAuth()
    const history = useHistory()
  
    async function handleLogout() {
      
  
      try {
        await Logout()
        history.push("/Login")
      } catch {
       
      }
    }
    return (
        
        <div class="nav">


            <div class="nav-links">
                <Link to="/"> Desafio</Link>
                <Link to="/">Configurações</Link>
                <Link to="/">Informações do usuário</Link>
                <Link to="/">Idioma</Link>
                <Link to="/">Segurança</Link>
                <Link to="/">Logs</Link>
                <Link to="/">Bloquear Acesso</Link>
                <Link to="/">Regra</Link>
                <Link to="/">Gráficos</Link>
                <Link  onClick={handleLogout}>  Sair </Link>
                <Link>{currentUser.email}</Link>
               
            </div>
        </div>
    );
}
