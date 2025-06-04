import React, { useState } from 'react';
import Button from '../../components/Button';

const Profile = () => {
  const [name, setName] = useState('egor galiev');
  const [email, setEmail] = useState('egor.galiev.04@mail.ru');

  const handleSave = () => {
    alert('Данные сохранены');
  };

  return (
    <div style={styles.container}>
      <h2>Личный кабинет</h2>
      <div style={styles.field}>
        <label>Имя:</label>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={styles.field}>
        <label>Email:</label>
        <input
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button onClick={handleSave} style={{ marginTop: '20px' }}>Сохранить</Button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default Profile;