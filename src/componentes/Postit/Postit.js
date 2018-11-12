import React, { Component } from 'react'
import { cadastraPostIt, alteraPostIt, removePostIt } from '../../redux/actions'
import { connect } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import './Postit.css'

class Postit extends Component {
    constructor(props) {
        super(props)
        this.state = { editando: false }
    }

    cadastraOuAlteraPostIt = (evento) => {
        evento.preventDefault()
        const cadastrando = !this.props.id
        const form = evento.target

        if(cadastrando) {
            const dados = {
                titulo: form.titulo.value,
                texto: form.texto.value
            }
            this.props.cadastraPostIt(dados)
    
            form.reset()
        } else {
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value,
                texto: form.texto.value
            }
            this.props.alteraPostIt(dados)
            
            this.setState({editando:false})
        }

    }

    habilitaEdicao = () => {
        this.setState({editando:true})
    }

    removePostIt = (evento) => {
        evento.stopPropagation()
        this.props.removePostIt(this.props.id)
    }


    render() {
        const cadastrando = !this.props.id

        return (
            <form className="postit" 
                onSubmit={this.cadastraOuAlteraPostIt} 
                onClick={this.habilitaEdicao}>
                {!cadastrando && this.state.editando && (
                    <button type="button" className="postit__botao-remover" onClick={this.removePostIt}>
                    <MdDelete />
                    </button>
                )}
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
                {(cadastrando  || this.state.editando) && (
                <button type="submit" className="postit__botao-concluir" onClick={this.cadastraPostIt}>
                    Concluído
                </button>
                )}
            </form>
        )
    }
}

export default connect(
    null,
    { cadastraPostIt, alteraPostIt, removePostIt }
)(Postit)