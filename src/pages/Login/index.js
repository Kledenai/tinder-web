import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './login.css';
import api from '../../services/api';

export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
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