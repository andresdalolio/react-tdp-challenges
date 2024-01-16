import React, {useState} from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);
  const handleInputChange = (event) => {
    setCounter(event.target.value);
  };
  return (
    <div className="counter">
      <input type="number" value={counter} onChange={handleInputChange}/>
        <div>
          <button onClick={() => setCounter(prev => parseInt(prev)+1)}>Increment</button>
          <button onClick={() => setCounter(prev => parseInt(prev)-1)}>Decrement</button>
        </div>
        <div>
          <button onClick={() => setCounter(prev => parseInt(prev)+10)}>Increment x10</button>
          <button onClick={() => setCounter(prev => parseInt(prev)-10)}>Decrement x10</button>
        </div>
    </div>
  );
}

export default Counter;
