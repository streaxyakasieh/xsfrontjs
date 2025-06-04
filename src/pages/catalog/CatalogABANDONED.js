import React from 'react';

// Импорт изображений
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


const categories = [
  { id: 101, title: 'Мужская одежда', image: '../../assets/images/mens.jpg', size: 'large' },
  { id: 102, title: 'Женская одежда', image: '../../assets/images/womens.jpg', size: 'large' },

  { id: 1, title: 'Верхняя одежда', image: img1 },
  { id: 2, title: 'Летняя одежда', image: img2 },
  { id: 3, title: 'Обувь', image: img3 },
  { id: 4, title: 'Детская одежда', image: img5 },
  { id: 5, title: 'Спортивная одежда', image: img6 },
  { id: 6, title: 'Нижнее бельё', image: img7 },
  { id: 7, title: 'Домашняя одежда', image: img8 },
  { id: 8, title:'Головные уборы', image: 'image:../../assets/images/9.jpg' },
  { id:9, title:'Пляжная одежда', image:'image:../../assets/images/10.jpg' },
];

const Catalog = () => {
  const styles = {
    container: {
      maxWidth:'1600px',
      margin:'50px auto',
      padding:'30px'
    },
    largeBlock:{
      width:'100%',
      marginBottom:'30px'
    },
    largeImage:{
      width:'100%',
      height:'370px',
      objectFit:'cover',
      borderRadius:'12px'
    },
    largeTitle:{
      textAlign:'center',
      fontSize:'24px',
      fontWeight:'600',
      marginTop:'10px'
    },

    grid:{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))',
      gap:'30px',
      marginTop:'60px'
    },
    card:{
      backgroundColor:'#fff',
      borderRadius:'12px',
      boxShadow:'0 6px 16px rgba(0,0,0,0.15)',
      overflow:'hidden',
      cursor:'pointer',
      display:'flex',
      flexDirection:'column'
    },
    imageWrapper:{
      position:'relative'
    },
    image:{
      width:'100%',
      height:'370px',
      objectFit:'cover'
    },
    info:{
      padding:'20px'
    },
    name:{
      fontSize:'20px',
      fontWeight:'600',
      marginBottom:'12px'
    },
    buttonContainer:{
      marginTop:'10px'
    },
    button:{
      padding:'10px 20px',
      backgroundColor:'#007bff',
      color:'#fff',
      border:'none',
      borderRadius:'4px',
      cursor:'pointer'
    }
  };

  const handleButtonClick = (categoryTitle) => {
    alert(`Выбрана категории: ${categoryTitle}`);
  };

  const largeCategories = categories.filter(cat => cat.size === 'large');
  const normalCategories = categories.filter(cat => cat.size !== 'large');

  return (
    <div style={styles.container}>
      
        {}
        {largeCategories.map((category) => (
          <div key={category.id} style={styles.largeBlock}>
            <img src={category.image} alt={category.title} style={styles.largeImage} />
            <div style={styles.largeTitle}>{category.title}</div>
          </div>
        ))}

        {}
        <div style={styles.grid}>
          {normalCategories.map((category) => (
            <div key={category.id} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={category.image} alt={category.title} style={styles.image} />
              </div>
              <div style={styles.info}>
                <div style={styles.name}>{category.title}</div>
                <div style={styles.buttonContainer}>
                  <button 
                    style={styles.button}
                    onClick={() => handleButtonClick(category.title)}
                  >
                    Посмотреть товары
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Catalog;