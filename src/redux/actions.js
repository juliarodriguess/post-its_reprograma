export function logaUsuario(dados) {
    return {
       type: 'LOGA_USUARIO',
       dados
    }
}

export function deslogaUsuario() {
    return {
        type: 'DESLOGA_USUARIO'
    }
}

export function cadastraPostIt (dados) {
    return {
        type: 'CADASTRA_POSTIT',
        dados
    }
}

export function alteraPostIt (dados) {
    return {
        type: 'ALTERA_POSTIT',
        dados
    }
}

export function removePostIt (id) {
    return {
        type: 'REMOVE_POSTIT',
        id
    }
}