import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, style = {} }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    />
  );
};

export default Input;