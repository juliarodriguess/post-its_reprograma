function Link(props) {
    return (
        <a className="link" href={props.url}>
            {props.children}
        </a>
    )
}

function Botao(props) {
    let classes = "botao"
    if(props.desabilitado) {
        classes += " botao--desabilitado"
    } 
    return (
        <input className={classes} type="submit" value={props.children}/>
    )
}

const paginaLogin = (
    <main className="pagina-login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>
        <Link url="/conta">Criar uma conta</Link>
        <Link url="/login">Fazer login</Link>
        <Botao>Enviar</Botao>
    </main>
)

const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(paginaLogin, divisaoProjeto)