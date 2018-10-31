import React, { Component } from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

class Conta extends Component  {
    constructor(props) {
        super(props)
        this.nomeRef = React.createRef()
        this.telRef = React.createRef()
        this.emailRef = React.createRef()
        this.senhaRef = React.createRef()
        this.state = {desabilitado: true}
    }

    handleChange = () => {
        const campoNome = this.nomeRef.current
        const campoTelefone = this.telRef.current
        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current
        if(campoEmail.temErro() || campoSenha.temErro() || campoNome.temErro() || campoTelefone.temErro()) {
            this.setState({desabilitado: true})
        } else {
            this.setState({desabilitado: false})
        }
    }

    render() {
        return (
            <main className="conta">
                <h1>Conta</h1>
                <p>Envie o formulário para criar uma conta!</p>
                <Legenda htmlFor="nome">Nome:</Legenda>
                <Campo ref={this.nomeRef} id="nome" name="nome" type="text" placeholder="Nome" required onChange={this.handleChange}/> 
                <Legenda htmlFor="telefone">Telefone:</Legenda>
                <Campo ref={this.telRef} id="telefone" name="telefone" type="tel" placeholder="Telefone" required onChange={this.handleChange}/>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo ref={this.emailRef} id="email" name="email" type="email" placeholder="Email" minLength={10} required onChange={this.handleChange}/> 
                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo ref={this.senhaRef} id="senha" name="senha" type="password" placeholder="Senha" minLength={6} required onChange={this.handleChange}/>
                <Botao desabilitado={this.state.desabilitado} >Enviar</Botao>
                <Link url="/login">Fazer login</Link>
            </main>
        )
    }
}

export default Conta