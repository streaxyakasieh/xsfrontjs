import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logoContainer}>
        <img src={logo} alt="Логотип" style={styles.logo} />
        <span style={styles.logoText}>Магазин</span>
      </Link>

      <nav style={styles.nav}>
        <Link to="/catalog" style={styles.navLink}>Каталог</Link>
        <Link to="/cart" style={styles.navLink}>Корзина</Link>
        <Link to="/profile" style={styles.navLink}>Профиль</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    width: '42px',
    height: 'auto',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4CAF50',
    letterSpacing: '0.5px',
  },
  nav: {
    display: 'flex',
    gap: '0px',
  },
  navLink: {
    fontSize: '22px', // увеличено с 16px
    fontWeight: '500',
    color: '#333',
    textDecoration: 'none',
    padding: '10px 18px',
    borderRadius: '8px',
    transition: 'background-color 0.2s, color 0.2s',
    letterSpacing: '0.3px',
  },
};


export default Header;
