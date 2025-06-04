import React from 'react';

const Features = () => {
  return (
    <section style={styles.features}>
      <div style={styles.featureItem}>
        <h3>Быстрая доставка</h3>
        <p>Доставим ваш заказ за 24 часа</p>
      </div>
      <div style={styles.featureItem}>
        <h3>Гарантия</h3>
        <p>Гарантия на все товары 1 год</p>
      </div>
      <div style={styles.featureItem}>
        <h3>Качественный сервис</h3>
        <p>Профессиональная поддержка 24/7</p>
      </div>
    </section>
  );
};

const styles = {
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px 20px',
    backgroundColor: '#fff',
  },
  featureItem: {
    maxWidth: '300px',
    textAlign: 'center',
  },
};

export default Features;