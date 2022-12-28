import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import avatar1 from '../../assets/images/avatar_1.png';
import avatar2 from '../../assets/images/avatar_2.jpg';
import avatar3 from '../../assets/images/avatar_3.jpg';
import avatar4 from '../../assets/images/avatar_4.png';
import avatar5 from '../../assets/images/avatar_5.png';

const Users = () => {
    const setAvatar = (avatar) => {
        sessionStorage.setItem('avatar', avatar);
    }
    return (
        <div className="users-container">
            <h1>Quem está assistindo?</h1>
            <div className="user-container">
                <Link to="/app" onClick={() => setAvatar(avatar1)}>
                    <div className="avatar-container">
                        <img src={avatar1} alt="avatar" />
                        <p>Pessoa 1</p>
                    </div>
                </Link>
                <Link to="/app" onClick={() => setAvatar(avatar2)}>
                    <div className="avatar-container">
                        <img src={avatar2} alt="avatar" />
                        <p>Pessoa 2</p>
                    </div>
                </Link>
                <Link to="/app" onClick={() => setAvatar(avatar3)}>
                    <div className="avatar-container">
                        <img src={avatar3} alt="avatar" />
                        <p>Pessoa 3</p>
                    </div>
                </Link>
                <Link to="/app" onClick={() => setAvatar(avatar4)}>
                    <div className="avatar-container">
                        <img src={avatar4} alt="avatar" />
                        <p>Pessoa 4</p>
                    </div>
                </Link>
                <Link to="/app" onClick={() => setAvatar(avatar5)}>
                    <div className="avatar-container">
                        <img src={avatar5} alt="avatar" />
                        <p>Pessoa 5</p>
                    </div>
                </Link>
            </div>
            <button>Gerenciar Perfis</button>
        </div>
    )
}

export default Users;