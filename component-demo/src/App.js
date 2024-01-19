import React, { useEffect, useState } from 'react';

import './App.css';
import Movies from './Movies';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <div>
        <p className='clock'>Clock: {currentTime.toLocaleString()}</p>
        <p className='current-scroll'>Current scroll position: {scrollPosition}px</p>
      </div>
      <Movies />
    </div>
  );
}

export default App;
