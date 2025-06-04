import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';

const PaymentPage = ({ source, productPrice }) => {
  const location = useLocation();

  const { totalPrice, cartItems } = location.state || {};

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [phone, setPhone] = useState('');

  const [addressWidth, setAddressWidth] = useState(550);
  const [nameWidth, setNameWidth] = useState(550);
  const [phoneWidth, setPhoneWidth] = useState(550);

  const handlePay = () => {
    if (
      !deliveryAddress.trim() ||
      !recipientName.trim() ||
      !phone.trim()
    ) {
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
    <div style={styles.container}>
      {productNames.length >0 && (
        <div style={styles.topRightBox}>
          <h4>Товары:</h4>
          <ul style={{marginLeft: '10px'}}>
            {productNames.map((name, index) => (
              <li key={index} style={{ fontSize: '18px' }}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      <h2>Оплата заказа</h2>

      <div style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Итоговая цена: {displayPrice} ₽
      </div>

      <div style={styles.content}>
        <div style={styles.leftSection}>
          <h3>Доставка</h3>
          <div style={styles.field}>
            <label>Адрес доставки:</label>
            <input
              style={{ ...styles.input, width: `${addressWidth}px` }}
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Введите адрес"
            />
          </div>
          
          <div style={styles.field}>
            <label>ФИО получателя:</label>
            <input
              style={{ ...styles.input, width: `${nameWidth}px` }}
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Введите ФИО"
            />
          </div>

          <div style={styles.field}>
            <label>Телефон:</label>
            <input
              style={{ ...styles.input, width: `${phoneWidth}px` }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Введите телефон"
            />
          </div>
        </div>
      </div>
      
      <Button onClick={handlePay} style={{ marginTop: '20px' }}>
        Оплатить {displayPrice} ₽
      </Button>
    </div>
  );
};

const styles = {
 container: {
   maxWidth: '900px',
   margin: '50px auto',
   padding: '20px',
   border: '1px solid #ddd',
   borderRadius: '8px',
   fontFamily: 'Arial, sans-serif',
   position:"relative"
 },
 topRightBox:{
   position:"absolute",
   top:"10px",
   right:"10px",
   backgroundColor:"#f9f9f9",
   padding:"10px",
   borderRadius:"8px",
   boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
 },
 content: {
   display: 'flex',
   gap: '40px',
   flexWrap: 'wrap',
 },
 leftSection: {
   flex: '1',
   minWidth: '250px',
   display: 'flex',
   flexDirection: 'column',
 },
 field:{ display:"flex", flexDirection:"column", marginBottom:"15px" },
 input:{ padding:"10px", borderRadius:"4px", border:"1px solid #ccc" }
};

export default PaymentPage;