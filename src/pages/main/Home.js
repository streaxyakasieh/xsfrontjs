import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    navigate('/catalog');
  };

  const products = [
    {
      image: img1,
      name: 'Оверсайз футболка',
      price: '1500 ₽',
      oldPrice: '2000 ₽',
      rating: 4.5,
      reviews: 150,
    },
    {
      image: img2,
      name: 'Джинсы',
      price: '3500 ₽',
      oldPrice: '4700 ₽',
      rating: 4.7,
      reviews: 980,
    },
    {
      image: img3,
      name: 'Ветровка с капюшоном',
      price: '7000 ₽',
      oldPrice: '11000 ₽',
      rating: 4.8,
      reviews: 560,
    },
    {
      image: img4,
      name: 'Спортивные шорты',
      price: '2200 ₽',
      oldPrice: '2800 ₽',
      rating: 4.4,
      reviews: 340,
    },
    {
      image: img5,
      name: 'Кроссовки',
      price: '15000 ₽',
      oldPrice: '18000 ₽',
      rating: 4.6,
      reviews: 420,
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Добро пожаловать в <span style={styles.brand}>Магазин</span></h1>
        <p style={styles.subtitle}>Одежда, обувь и аксессуары, которые подчёркивают ваш стиль</p>
        <button style={styles.button} onClick={handleGoToCatalog}>Перейти в каталог</button>
      </div>

      <h2 style={styles.sectionTitle}>Популярные товары</h2>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={product.image} alt={product.name} style={styles.image} />
            </div>
            <div style={styles.info}>
              <div style={styles.name}>{product.name}</div>
              <div style={styles.priceSection}>
                <div style={styles.price}>{product.price}</div>
                <div style={styles.oldPrice}>{product.oldPrice}</div>
              </div>
              <div style={styles.rating}>
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))} ({product.reviews} отзывов)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  brand: {
    color: '#4CAF50',
  },
  subtitle: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '30px',
  },
  button: {
    padding: '14px 28px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: '600',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#222',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease-in-out',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
  },
  info: {
    padding: '18px',
  },
  name: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#111',
    marginRight: '10px',
  },
  oldPrice: {
    fontSize: '14px',
    textDecoration: 'line-through',
    color: '#999',
  },
  rating: {
    fontSize: '15px',
    color: '#666',
  },
};

export default Home;