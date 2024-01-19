import React, { useState } from 'react';
import './Button.css';

function ButtonReactStyle({children, style, buttonHoverStyle, buttonActiveStyle}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <button 
      style={{
        ...style,
        ...(isHovered ? buttonHoverStyle : {}),
        ...(isActive ? buttonActiveStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setIsActive(true);
        setTimeout(() => {
          setIsActive(false)
        }, 2000);
      }}
    >{children}</button>
  );
}

export default ButtonReactStyle;
