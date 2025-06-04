import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вход с ${email}`);
  };

  return (
    <div style={styles.container}>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
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
        <Button style={{ marginTop: '20px' }}>Войти</Button>
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

export default Login;