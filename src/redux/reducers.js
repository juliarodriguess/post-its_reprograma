import { combineReducers } from 'redux'

const usuarioNoLocalStorage = JSON.parse(localStorage.getItem("usuario"))
let usuarioInicial = {}
if(usuarioNoLocalStorage) {
    usuarioInicial = { usuario: usuarioNoLocalStorage }
}

function usuario(state = usuarioInicial, action) {
    switch(action.type) {
        case 'LOGA_USUARIO':
            localStorage.setItem('usuario', JSON.stringify(action.dados))
            return {
                usuario: action.dados
            }
        case 'DESLOGA_USUARIO':
        localStorage.removeItem('usuario')
        return {
            usuario: null
        }
        default:
            return state
    }
}

function postits (postitsAtuais = [], action) {
    switch(action.type) {
        default:
            return postitsAtuais
    }
}

const reducers = combineReducers({
    usuario: usuario,
    postits: postits
})

export default reducers