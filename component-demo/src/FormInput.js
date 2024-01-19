import React, { useEffect, useRef } from 'react';
function FormInput({ label, error, ...props }) {
  const inputRef = useRef();
  useEffect(() => {
    if (props.required === true) {
      inputRef.current.addEventListener('invalid', (e) => e.preventDefault());
    }
  }, [props]);
  return (
    <div className="form-input">
      <label>{label}</label>
      <input ref={inputRef} {...props} onInvalid={(e) => e.preventDefault()} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormInput;
