import React from 'react'
import './Campo.css'

function Campo(props) {
    return (
        <input className="caixa-texto" id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} />
    )
}

export default Campo