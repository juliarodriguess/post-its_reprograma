import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'

function App() {
    return (
        <div className='app'>
            {/*<Navbar/>*/}

            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/conta' component={Conta} />
                <Route path='/login' component={Login} />
                <Route path='/quem-somos' component={QuemSomos} />
                <Route path='/contato' component={Contato} />
            </Switch>
        </div>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('projeto'))