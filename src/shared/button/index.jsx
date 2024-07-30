import React from 'react';
import './buttonStyle.css';

const Button = ({ style, outline, btnName, rightIcon, leftIcon}) => {
  return (
    <button style={style} className={`${outline ? 'outline' : 'btn'}`}>
    {leftIcon && <span>{leftIcon}</span>}
    {btnName}
    {rightIcon && <span className= "right_Icon">{rightIcon}</span>}
    </button>
  );
};
 
export default Button;