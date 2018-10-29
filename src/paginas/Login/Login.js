import React, { Component } from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'

class Login extends Component  {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu email e senha.</p>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo id="email" name="email" type="email" placeholder="Email" minLength={10} required/> 
                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo id="senha" name="senha" type="password" placeholder="Senha" minLength={6} required/>
                <Botao>Enviar</Botao>
                <Link url="/conta">Criar uma conta</Link>
            </main>
        )
    }
}

export default Login