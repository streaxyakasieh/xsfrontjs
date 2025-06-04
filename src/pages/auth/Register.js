import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Регистрация для ${name}`);
  };

  return (
    <div style={styles.container}>
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <Input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={{ marginTop: '20px' }}>Зарегистрироваться</Button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
};

export default Register;