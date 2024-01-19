import React from 'react';
import './Button.scss';

function ButtonSassStyle({children}) {
  return (
    <button className='button-sass'>{children}</button>
  );
}

export default ButtonSassStyle;
