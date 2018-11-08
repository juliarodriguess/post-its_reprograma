import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

function Navbar(props) {
    return (
        <header className='navbar'>
            <Link to='/'>
                <img className='navbar__logo' src={logo} alt='Logo' />
            </Link>

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}

export default withRouter(connect(
    (state) => ({ usuario: state.usuario }),
    (dispatch) => (
        {  deslogaUsuario: () => {
           const acao = {
               type: 'DESLOGA_USUARIO'
           }
           
           dispatch(acao)
           }
       })
)(Navbar))