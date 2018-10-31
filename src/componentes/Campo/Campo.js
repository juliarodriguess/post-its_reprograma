import React, { Component } from 'react'
import $ from 'jquery'
import './Campo.css'

class Campo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modificado: false,
            erro: ''
        }
    }

    temErro() {
        if(!this.state.modificado || this.state.erro) {
            return true
        } else {
            return false
        }
    }

    /*$("#telefone").bind('input propertychange',function(){
 
        var texto = $(this).val();
        
        texto = texto.replace(/[^\d]/g, '');
        
        if (texto.length > 0)
        {
        texto = "(" + texto;
            
            if (texto.length > 3)
            {
                texto = [texto.slice(0, 3), ") ", texto.slice(3)].join('');  
            }
            if (texto.length > 12)
            {      
                if (texto.length > 13) 
                    texto = [texto.slice(0, 10), "-", texto.slice(10)].join('');
                else
                    texto = [texto.slice(0, 9), "-", texto.slice(9)].join('');
            }                 
                if (texto.length > 15)                
                   texto = texto.substr(0,15);
        }
       $(this).val(texto);     
    })*/

    valida = (evento) => {
        const input = evento.target
        const { value } = input
        const { required, minLength, type } = this.props
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regexTel = /^\(11\) 9\d{4}-\d{4}|\((?:1[2-9]|[2-9]\d)\) [5-9]\d{3}-\d{4}$/
        let mensagem = ''

        if(required && value.trim() === '') {
            mensagem = 'Campo obrigatório'
        } else if(minLength && value.length < minLength) {
            mensagem =`Digite pelo menos ${minLength} caracteres`
        } else if(type === 'email' && !regexEmail.test(value)) {
            mensagem = 'Valor inválido'
        } else if(type === 'tel' && !regexTel.test(value)) {
            mensagem = 'Valor inválido'
        }

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
                    maskTel={this.props.value}
                />
                <p className='grupo__erro'>{this.state.erro}</p>                
            </div>
        )
    }
}


export default Campo