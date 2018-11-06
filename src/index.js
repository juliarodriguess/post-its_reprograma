import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'
import './index.css'


function App(props) {
    const usuario = props.usuario
    const deslogaUsuario = props.deslogaUsuario
    const logaUsuario = props.logaUsuario

    return (
        <div className='app'>
            <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} />

            <Switch>
                <Route path='/' exact render={() => {
                    return usuario ? <Home /> : <Redirect to='/login'/>
                }} />
                <Route path='/conta' component={Conta} />
                <Route path='/login' render={(props) => {
                    return <Login historico={props.history} onEnviar={logaUsuario} />
                }} />
                <Route path='/quem-somos' component={QuemSomos} />
                <Route path='/contato' component={Contato} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    )
}

function passaDadosDoEstadoParaMeuComponente(state) {
    const props = {
        usuario: state.usuario
    }
    return props
}

function passaFuncoesQueDisparamAcoesViaProps(dispatch) {
    const props = {
        logaUsuario: (dados) => {
            const acao = {
                type: 'LOGA_USUARIO',
                dados: dados
            }

            dispatch(acao)
        },
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }

            dispatch(acao)
        }
    }
    return props
}

const conectaNaStore = connect(
    passaDadosDoEstadoParaMeuComponente, 
    passaFuncoesQueDisparamAcoesViaProps
)

const AppConectada = withRouter(conectaNaStore(App))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppConectada />
        </BrowserRouter>
    </Provider>,
    document.getElementById('projeto'))