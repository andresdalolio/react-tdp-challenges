import React, { useState } from 'react';
import './App.css';
import FormInput from './FormInput';
import FreeDrag from './FreeDrag';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError(e.target.validationMessage);
    setSubmitted(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Name:"
          error={inputError}
          type="text"
          required={true}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={() => setInputError(inputValue ? '' : 'Custom error. name input')}
        />
        <button type='submit'>Submit</button>
      </form>
      {submitted && <p>Form submmited succesfully</p>}
      <FreeDrag />
    </div>
  );
}

export default App;
