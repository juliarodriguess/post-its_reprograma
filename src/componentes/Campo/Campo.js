import React, { Component } from 'react'
import './Campo.css'

class Campo extends Component {
    constructor(props) {
        super(props)
        this.valor = ''
        this.state = {
            modificado: false,
            erro: ''
        }
    }

    getValor() {
        return this.valor;
    }

    temErro() {
        if(!this.state.modificado || this.state.erro) {
            return true
        } else {
            return false
        }
    }

    valida = (evento) => {
        const input = evento.target
        const { value } = input

        this.valor = value

        const { required, minLength, type } = this.props
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //const regexTel = /^\(11\) 9\d{4}-\d{4}|\((?:1[2-9]|[2-9]\d)\) [5-9]\d{3}-\d{4}$/
        let mensagem = ''

        if(required && value.trim() === '') {
            mensagem = 'Campo obrigatório'
        } else if(minLength && value.length < minLength) {
            mensagem =`Digite pelo menos ${minLength} caracteres`
        } else if(type === 'email' && !regexEmail.test(value)) {
            mensagem = 'Valor inválido'
        } /*else if(type === 'tel' && !regexTel.test(value)) {
            mensagem = 'Valor inválido'
        }*/

        this.setState({
            modificado: true,
            erro: mensagem},         
            this.props.onChange)
    }

    render () {
        return (
            <div>
                <input
                    id={this.props.id}
                    className="campo"
                    type={this.props.type}
                    name={this.props.name}  
                    placeholder={this.props.placeholder}
                    minLength = {this.props.minLength}
                    onChange={this.valida}
                />
                <p className='grupo__erro'>{this.state.erro}</p>                
            </div>
        )
    }
}


export default Campo