import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 style={{color: 'red', fontWeight: 700, fontSize: '50px'}}>404</h1>
            <p>Página Não encontrada</p>
            <Link to="/app">
                <button>Clique para Voltar</button>
            </Link>
        </div>
    )
}

export default NotFound;