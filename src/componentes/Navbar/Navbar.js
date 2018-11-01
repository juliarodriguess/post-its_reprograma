import React from 'react'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <header className='navbar'>
            <a href='/'>
                <img className='navbar__logo' src={logo} alt='Logo' />
            </a>

            <Menu />
        </header>
    )
}

export default Navbar