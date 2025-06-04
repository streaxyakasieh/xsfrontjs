import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';
import img10 from '../../assets/images/10.jpg';

const images = {
  1: [img1],
  2: [img2],
  3: [img3],
  4: [img4],
  5: [img5],
  6: [img6],
  7: [img7],
  8: [img8],
  9: [img9],
  10: [img10],
};

const Cart = ({ items }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/payment', { state: { totalPrice, cartItems: items } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div style={styles.grid}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img
                  src={images[item.id] ? images[item.id][0] : ''}
                  alt={item.name}
                  style={styles.image}
                />
              </div>
              <div style={styles.info}>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.price}>{item.price} ₽</div>
                <div style={styles.quantity}>Количество: {item.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {items.length > 0 && (
        <>
          <h3 style={styles.total}>Общая сумма: {totalPrice} ₽</h3>
          <Button style={{ marginTop: '20px' }} onClick={handleOrder}>
            Оформить заказ
          </Button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1600px',
    margin: '50px auto',
    padding: '30px',
    boxSizing:'border-box'
  },
  title: {
    marginBottom: '20px',
    fontSize:'28px',
    textAlign:'left'
  },
  grid: {
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
    gap:'20px',
    marginTop:'60px',
    justifyContent:'center'
  },
  card: {
    backgroundColor:'#fff',
    borderRadius:'12px',
    boxShadow:'0 6px 16px rgba(0,0,0,0.15)',
    overflow:'hidden',
    cursor:'pointer',
    display:'flex', 
    flexDirection:'column',
    width:'100%',
    maxWidth:'375px',
    height:'450px',
    boxSizing:'border-box'
  },
  imageWrapper:{
    width:'100%',
    height:'300px',
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center'
},
image:{
width:'100%',
height:'100%',
objectFit:'cover'
},
info:{
padding:'20px', 
flexGrow:'1'
},
name:{
fontSize:'20px', 
fontWeight:'600', 
marginBottom:'12px'
},
price:{
fontSize:'20px', 
fontWeight:'bold', 
marginRight:'15px', 
color:'#111'
},
quantity:{
marginTop:'8px', 
fontSize:'16px', 
color:'#555'
},
total:{
marginTop:'30px', 
fontSize:'24px', 
fontWeight:'600'
}
};

export default Cart;