import React from 'react';

const Button = ({ children, onClick, type = 'button', style = {}, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        ...style,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;