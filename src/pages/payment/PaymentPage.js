import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';

const PaymentPage = ({ source, productPrice }) => {
  const location = useLocation();

  const { totalPrice, cartItems } = location.state || {};

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [phone, setPhone] = useState('');

  const handlePay = () => {
    if (!deliveryAddress.trim() || !recipientName.trim() || !phone.trim()) {
      alert('Пожалуйста, заполните все поля доставки.');
      return;
    }

    alert(`Переходим на страницу оплаты...`);
  };

  const displayPrice = source === 'product' && productPrice ? productPrice : totalPrice;

  const productNames = cartItems && cartItems.length > 0
    ? cartItems.map(item => item.name)
    : [];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.title}>Оплата заказа</h2>
      <div style={styles.columns}>
        {/* Левая колонка: форма */}
        <form onSubmit={(e) => { e.preventDefault(); handlePay(); }} style={styles.formColumn}>
          <div style={styles.totalPrice}>Итоговая цена: {displayPrice} ₽</div>

          <div style={styles.field}>
            <label>Адрес доставки:</label>
            <input
              style={styles.input}
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Введите адрес"
            />
          </div>

          <div style={styles.field}>
            <label>ФИО получателя:</label>
            <input
              style={styles.input}
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Введите ФИО"
            />
          </div>

          <div style={styles.field}>
            <label>Телефон:</label>
            <input
              style={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Введите телефон"
            />
          </div>

          <Button type="submit" style={styles.button}>
            Оплатить {displayPrice} ₽
          </Button>
        </form>

        {/* Правая колонка: список товаров */}
        {productNames.length > 0 && (
          <div style={styles.productsColumn}>
            <h3 style={{ marginBottom: '15px' }}>Товары в заказе</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {productNames.map((name, index) => (
                <li key={index} style={{ fontSize: '16px', marginBottom: '6px' }}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const sharedWidth = '900px';

const styles = {
  pageContainer: {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '26px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '30px',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    gap: '50px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  formColumn: {
    flex: '1 1 60%',
    minWidth: '350px',
  },
  productsColumn: {
    flex: '1 1 35%',
    minWidth: '250px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  totalPrice: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  input: {
    width: '870px',
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    width: '900px',
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default PaymentPage;
