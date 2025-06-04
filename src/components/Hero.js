import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Добро пожаловать в наш магазин</h1>
      <p style={styles.subtitle}>Лучшие товары по доступным ценам</p>
      <button style={styles.button}>Заказать сейчас</button>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: '#f5f5f5',
    padding: '60px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Hero;