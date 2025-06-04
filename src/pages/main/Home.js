import React from 'react';
import Button from '../../components/Button';
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
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={product.image} alt="Товар" style={styles.image} />
            </div>
            <div style={styles.info}>
              <div style={styles.name}>{product.name}</div>
              <div style={styles.priceSection}>
                <div style={styles.price}>{product.price}</div>
                <div style={styles.oldPrice}>{product.oldPrice}</div>
              </div>
              <div style={styles.rating}>
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                ({product.reviews} отзывов)
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
    maxWidth: '1600px',
    margin: '50px auto',
    padding: '30px',
    textAlign: 'center',
  },
  button: {
    marginTop: '30px',
    padding: '16px 32px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '60px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  favorite: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '26px',
    color: 'red',
  },
  info: {
    padding: '20px',
  },
  name: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '15px',
    color: '#111',
  },
  oldPrice: {
    fontSize: '14px',
    textDecoration: 'line-through',
    color: '#999',
  },
  rating: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Home;