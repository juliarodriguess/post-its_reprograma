import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { aberto: false }

    }

    abreOuFechaMenu = (evento) => {
        evento.preventDefault()
        if(this.state.aberto) {
            this.setState({ aberto: false })  
        } else {
            this.setState({ aberto: true })
        }
    }

    render() {
        let classesDoBotao = 'navbar-menu__botao'
        let classesDasOpcoes = 'navbar-menu__opcoes'

        if(this.state.aberto) {
            classesDoBotao += ' navbar-menu__botao--aberto'
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
        }

        return (
            <nav className='navbar-menu'>
                <a className={classesDoBotao} onClick={this.abreOuFechaMenu}>
                    Menu
                </a>

                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink to='/quem-somos' activeClassName='navbar-menu__opcoes--ativo'>
                            Quem Somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contato' activeClassName='navbar-menu__opcoes--ativo'>
                            Contato
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' activeClassName='navbar-menu__opcoes--ativo'>
                            Sair
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu