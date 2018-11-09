import React, { Component } from 'react'
import { cadastraPostIt } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'

class Postit extends Component {
    constructor(props) {
        super(props)
    }

    cadastraOuAlteraPostIt = (evento) => {
        evento.preventDefault()
        const form = evento.target

        const dados = {
            id: `6bd096f2-d36f-4527-845d-23310d03a74${Math.random(100)}`,
            titulo: form.titulo.value,
            texto: form.texto.value
        }

        this.props.cadastraPostIt(dados)

        form.reset()
    }

    render() {
        const cadastrando = !this.props.id
        
        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostIt}>
                <input
                    className="postit__titulo"
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                />
                <textarea
                    className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
                    autoComplete="off"
                    defaultValue={this.props.texto}
                />
                <button className="postit__botao-concluir">
                    Concluído
                </button>
            </form>
        )
    }
}

export default connect(
    null,
    { cadastraPostIt }
)(Postit)