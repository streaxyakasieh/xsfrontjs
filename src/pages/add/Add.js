import { useState } from 'react';
import Button from '../../components/Button'; // Импорт компонента Button

function Add() {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photo || !name || !description || !price) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('price', price);

    fetch('/api/products', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка сервера');
        }
        return res.json();
      })
      .then((data) => {
        alert('Товар успешно добавлен!');
        setPhoto(null);
        setDescription('');
        setName('');
        setPrice('');
      })
      .catch((err) => {
        console.error('Ошибка при добавлении товара:', err);
        alert('Произошла ошибка. Попробуйте снова.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Общие стили для формы
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  };

  const textareaStyle = {
    width: '100%', // гарантирует ту же ширину, что у кнопки
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // или другой шрифт по желанию
    resize: 'none', // отключает растягивание
    lineHeight: '1.6',
    color: '#333',
    boxSizing: 'border-box'
  };


  // Цвет кнопки — тот же что и в вашем примере
  // Используем компонент Button
  return (
<div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={titleStyle}>Добавить новый товар</h2>

        {/* Фото товара */}
        <div style={{ marginBottom:'20px' }}>
          <label style={labelStyle}>Фото товара:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            required
            style={{textareaStyle, padding:'8px' }}
          />
          {photo && <p style={{marginTop:'8px'}}>Выбран файл: {photo.name}</p>}
        </div>

        {/* Название */}
        <div style={{ marginBottom:'20px' }}>
          <label style={labelStyle}>Название:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Введите название"
            style={textareaStyle}
          />
        </div>

        {/* Описание */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Описание:</label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            placeholder="Введите описание"
            style={textareaStyle}
          />
        </div>



        {/* Цена */}
        <div style={{ marginBottom:'20px' }}>
          <label style={labelStyle}>Цена:</label>
          {/* Просто ввод числа без дополнительных стилей */}
          <input
            type="number"
            step="10"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Введите цену"
            style={textareaStyle}
          />
        </div>

        {/* Кнопка отправки - через компонент Button */}
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          style={{ width:'100%', padding:'15px', backgroundColor:'#4CAF50', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer', transition:'background-color 0.3s ease' }}
        >
          {isSubmitting ? 'Добавление...' : 'Добавить товар'}
        </Button>
      </form>
</div>
   );
}

export default Add;