import React, { useState } from 'react';
import './App.css';
import FormInput from './FormInput';
import FreeDrag from './FreeDrag';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputNumberValue, setInputNumberValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [inputNumberError, setInputNumberError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError(e.target.validationMessage);
    setSubmitted(false);
  };
  const handleInputNumberChange = (e) => {
    setInputNumberValue(e.target.value);
    if (e.target.value < 10) {
      setInputNumberError('Number must be > 10');
    } else {
      setInputNumberError('');
    }
    setSubmitted(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputNumberValue > 10) {
      setSubmitted(true);
    }
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
        <FormInput
          label="Number > 10:"
          error={inputNumberError}
          type="number"
          required={true}
          value={inputNumberValue}
          onChange={handleInputNumberChange}
          onBlur={() => setInputError(inputValue ? '' : 'Custom error. number input')}
        />
        <button type='submit'>Submit</button>
      </form>
      {submitted && <p>Form submmited succesfully</p>}
      <FreeDrag />
    </div>
  );
}

export default App;
