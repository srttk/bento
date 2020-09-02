import React from 'react';

const Button = ({ children, className = '', ...rest }) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
