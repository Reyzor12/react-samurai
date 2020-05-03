import React from 'react';
import s from './Header.module.css';
import headerImage from '../../assets/images/header.jpg';

const Header = () => {
    return <header className={s.header}>
        <img src={headerImage} />
    </header>
}

export default Header;