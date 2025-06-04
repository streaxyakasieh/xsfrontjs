import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

export const products = [
  {
    id: 1,
    image: img1,
    name: 'Оверсайз футболка',
    price: '1500',
    oldPrice: '2000',
    description: 'Мягкая и комфортная оверсайз футболка из хлопка, идеально подходит для повседневной носки. Стильный свободный крой и классический дизайн делают её универсальной частью гардероба.'
  },
  {
    id: 2,
    image: img2,
    name: 'Джинсы',
    price: '3500',
    oldPrice: '4700',
    description: 'Классические джинсы с современным кроем, выполненные из прочного денима. Отлично сидят и подходят как для повседневных образов, так и для более стильных сочетаний.'
  },
  {
    id: 3,
    image: img3,
    name: 'Ветровка с капюшоном',
    price: '7000',
    oldPrice: '11000',
    description: 'Легкая ветровка с водоотталкивающей пропиткой и удобным капюшоном. Идеальна для переменчивой погоды, обеспечивает защиту от ветра и дождя.'
  },
  {
    id: 4,
    image: img4,
    name: 'Спортивные шорты',
    price: '2200',
    oldPrice: '2800',
    description: 'Комфортные спортивные шорты из дышащего материала, отлично подходят для тренировок или прогулок на свежем воздухе. Стильный дизайн и удобная посадка.'
  },
  {
    id: 5,
    image: img5,
    name: 'Кроссовки',
    price: '15000',
    oldPrice: '18000',
    description: 'Современные кроссовки с амортизацией и поддержкой стопы. Идеальны для бега, тренировок или повседневной носки. Стильный внешний вид и комфорт.'
  },
  {
    id: 6,
    image: img6,
    name:'Рюкзак' ,
     price :'4000' ,
     oldPrice :'5600' ,
     description:'Практичный рюкзак из прочного материала с множеством отделений. Отлично подходит для учебы, работы или путешествий, обеспечивая удобство и стиль.' 
   } ,
   {
     id :7 ,
     image :img7 ,
     name :'Кепка' ,
     price :'900' ,
     oldPrice :'1400' ,
     description:'Стильная кепка из качественного материала, защищающая от солнца и дополняющая любой образ. Универсальный размер и классический дизайн.' 
   } ,
   {
     id :8 ,
     image :img8 ,
     name :'Очки' ,
     price :'7000' ,
     oldPrice :'11000' ,
     description:'Современные солнцезащитные очки с ультрафиолетовой защитой. Стильный аксессуар, который подчеркнет ваш образ и защитит глаза.' 
   } ,
   {
     id :9 ,
     image :img9 ,
     name :'Шапка' ,
     price :'600' ,
     oldPrice :'900' ,
     description:'Теплая шапка из мягкого материала, идеально подходит для холодных дней. Стильный дизайн и комфорт.' 
   } ,
   {
     id :10 ,
     image :img10 ,
     name :'Худи' ,
     price :'12000' ,
     oldPrice :'14000' ,
     description:'Удобное худи из мягкого флиса с капюшоном, отлично подходит для отдыха или прогулок. Стильный крой и теплота.' 
   }
];

const Catalog = ({ addToCart }) => {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification('Товар добавлен в корзину!');
  };

  const addButtonStyle = {
    marginTop:'10px', 
    padding:'8px', 
    fontSize:'14px', 
    backgroundColor:'#007bff', 
    color:'#fff', 
    border:'none', 
    borderRadius:'4px', 
    cursor:'pointer'
  };

  const styles = {
    container :{
      maxWidth:'1600px', margin:'50px auto', padding:'10px'
    }, 
    grid :{
      display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))', gap:'30px', marginTop:'60px'
    }, 
    card :{
      backgroundColor:'#fff', borderRadius:'12px', boxShadow:'0 6px 16px rgba(0,0,0,0.15)', overflow:'hidden', cursor:'pointer', display:'flex', flexDirection:'column'
    }, 
    imageWrapper:{ position:'relative'}, 
    image:{ width:'100%', height:'300px', objectFit:'cover'}, 
    info:{ padding:'20px'}, 
    name:{ fontSize:'20px', fontWeight:'600', marginBottom:'12px'}, 
    priceSection:{ display:'flex', alignItems:'center', marginBottom:'12px'}, 
    price:{ fontSize:'20px', fontWeight:'bold', marginRight:'15px', color:'#111'}, 
    oldPrice:{ fontSize:'14px', textDecoration:'line-through', color:'#999'}
};

return (
<div style={styles.container}>
<h2>Каталог товаров</h2>
{notification && (
<div style={{
position:"fixed",
top:"95px",
right:"20px",
backgroundColor:"#4BB543",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
boxShadow:"0 4px 8px rgba(0,0,0,0.2)",
zIndex:"999"
}}>
{notification}
</div>
)}
<div style={styles.grid}>
{products.map((product) => (
<div key={product.id} style={styles.card}>
<Link
to={`/product/${product.id}`}
style={{
textDecoration:'none', color:'inherit'
}}
>
<div style={styles.imageWrapper}>
<img src={product.image} alt={product.name} style={styles.image} />
</div>
<div style={styles.info}>
<div style={styles.name}>{product.name}</div>
<div style={styles.priceSection}>
<div style={styles.price}>{product.price} ₽</div>
<div style={styles.oldPrice}>{product.oldPrice} ₽</div>
</div>
</div>
</Link>
<button
style={addButtonStyle}
 onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
>
Добавить в корзину
</button>
</div>
))}
</div>
</div>
);
};

export default Catalog;