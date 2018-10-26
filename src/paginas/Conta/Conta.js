import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

function Conta()  {
    return (
        <main className="conta">
            <h1>Conta</h1>
            <p>Envie o formulário para criar uma conta!</p>
            <Legenda htmlFor="nome">Nome:</Legenda>
            <Campo id="nome" name="nome" type="text" placeholder="Nome" obrigatorio/> 
            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo id="telefone" name="telefone" type="tel" placeholder="Telefone"/>
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo id="email" name="email" type="text" placeholder="Email"/> 
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo id="senha" name="senha" type="password" placeholder="Senha"/>
            <Botao>Enviar</Botao>
            <Link url="/login">Fazer login</Link>
        </main>
    )
}

export default Conta