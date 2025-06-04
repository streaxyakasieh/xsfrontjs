import React from 'react';

const Orders = () => {
  const orders = [
  ];

  return (
    <div style={styles.container}>
      <h2>История заказов</h2>
      {orders.length === 0 ? (
        <p>Нет заказов</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={styles.order}>
            <h3>Заказ #{order.id}</h3>
            <p>Дата: {order.date}</p>
            <p>Общая сумма: {order.total}</p>
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
  order: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
};

export default Orders;