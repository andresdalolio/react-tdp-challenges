import React, { useEffect, useRef, useState } from 'react';
function FreeDrag() {
  const dragRef = useRef();
  const [clientX, SetclientX] = useState();
  const [clientY, SetclientY] = useState();

  const handleMouseMove = (e) => {
    SetclientX(e.clientX);
    SetclientY(e.clientY);
  };
  useEffect(() => {
    const rref = dragRef.current;
    rref.addEventListener('mousemove', handleMouseMove);
    return () => {
      rref.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div ref={dragRef} className='free-drag'>
      <p>ClientX: {clientX}</p>
      <p>ClientY: {clientY}</p>
    </div>
  );
}

export default FreeDrag;
