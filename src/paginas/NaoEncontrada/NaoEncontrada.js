import React from 'react'
import gato from './gato.gif'
import './NaoEncontrada.css'

function NaoEncontrada() {
    return (
        <main className='nao-encontrada'>
            <h1>Página não encontrada</h1>
            <p className='nao-encontrada__simbolo'>
                :-(
            </p>
            <img src={gato} alt='Não encontrado'/>
        </main>   
    )
}

export default NaoEncontrada