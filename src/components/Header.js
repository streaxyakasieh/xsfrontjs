import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="Логотип" style={styles.logo} />
        <h1 style={styles.logoText}>Мой магазин</h1>
      </Link>
      
      <div style={styles.catalogButton}>
        <div style={styles.menuIcon}>≡</div>
        <Link style={styles.catalogLink} to="/catalog">Каталог</Link>
      </div>

      <nav style={styles.nav}>
        <Link style={styles.link} to="/favorites">Избранное</Link>
        <Link style={styles.link} to="/cart">Корзина</Link>
        <Link style={styles.link} to="/profile">Личный кабинет</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: '48px',
    height: 'auto',
    marginRight: '10px',
  },
  logoText: {
    margin: 0,
    color: '#333',
    fontSize: '32px',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '20px',
  },

  catalogButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3b4cca',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    marginLeft: '-1000px',
  },
  menuIcon: {
    fontSize: '20px',
    color: '#fff',
    marginRight: '8px',
  },
  catalogLink: {
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
  },
};

export default Header;