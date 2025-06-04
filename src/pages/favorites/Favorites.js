import React from 'react';

const Favorites = () => {
  const favoriteItems = [
    
  ];

  return (
    <div style={styles.container}>
      <h2>Избранные товары</h2>
      {favoriteItems.length === 0 ? (
        <p>Нет избранных товаров</p>
      ) : (
        favoriteItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
  },
  item: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
};

export default Favorites;