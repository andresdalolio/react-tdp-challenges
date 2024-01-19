import './Button.css';

function ButtonCSS({children, props}) {
  return (
    <button className="button-css" {...props}>{children}</button>
  );
}

export default ButtonCSS;
