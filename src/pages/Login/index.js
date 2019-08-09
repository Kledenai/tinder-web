import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './login.css';

export default function Login(){
    const [username, setUsername] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        console.warn(username);
    }

    return(
        <div className="container-login">
            <img src={logo} alt="tindev"/>
            <form className="form-login" onSubmit={handleSubmit}>
                <input 
                    className="input" 
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button className="button">logar</button>
            </form>
        </div>
    )
}