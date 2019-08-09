import React from 'react';
import logo from '../../assets/logo.svg';
import './login.css';

export default function Login(){
    return(
        <div className="container-login">
            <img src={logo} alt="tindev"/>
            <form className="form-login">
                <input className="input" placeholder="Digite seu usuário no Github"/>
                <button className="button">logar</button>
            </form>
        </div>
    )
}