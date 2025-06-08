import React, { useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState('egor galiev');
  const [email, setEmail] = useState('egor.galiev.04@mail.ru');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Здесь можно добавить вызов API для сохранения данных
    // Например: fetch('/api/saveProfile', {...})
    // Для примера используем задержку
    setTimeout(() => {
      alert('Данные сохранены');
      setIsSaving(false);
    }, 1000);
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>Личный кабинет</h2>
        
        <div style={styles.field}>
          <label style={styles.label}>Имя:</label>
          <input
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSaving}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSaving}
          />
        </div>

        {/* Кнопка для сохранения данных */}
        <Button onClick={handleSave} style={{ ...styles.button, marginTop: '20px' }} disabled={isSaving}>
          {isSaving ? 'Сохраняется...' : 'Сохранить'}
        </Button>
      </div>

      {/* Кнопка для добавления товара, ширина равна контейнеру */}
      <div style={{ ...styles.linkContainer }}>
        <Link to="/add" style={{ display: 'block', width: '100%' }}>
          <Button style={{ ...styles.button, width: '100%', padding: '10px' }}>Добавить товар</Button>
        </Link>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f0f2f5', // фон из Add.js
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // шрифт из Add.js
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '1200',
    color: '#333', // цвет текста заголовка
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    marginBottom:'8px',
    fontSize:'16px',
    fontWeight:'500',
  },
  input: {
    padding:'10px',
    borderRadius:'8px',
    border:'1px solid #ccc',
  },
  button: {
    backgroundColor:'#4CAF50', // цвет кнопки из Add.js
    color:'#fff', // цвет текста кнопки
    border:'none',
    borderRadius:'8px',
    cursor:'pointer',
    transition:'background-color 0.3s ease'
  },
  linkContainer:{
     maxWidth:'600px', 
     margin:'20px auto'
   }
};

export default Profile;




