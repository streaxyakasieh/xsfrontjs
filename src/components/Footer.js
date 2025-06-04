import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Мой магазин. Все права защищены.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
  },
};

export default Footer;