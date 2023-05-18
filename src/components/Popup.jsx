import React from 'react';
import './Popup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Popup = ({ nummmmm, showGrid2 }) => {
  const [showComponent, setShowComponent] = useState(false);

  const showComp = () => {
    setShowComponent(true);
    showGrid2(showComponent);
  };

  const handleClick = (num) => {
    showComp();
    nummmmm(num);
  };

  return (
    <div className='main-Griddddddd'>
      <h3>One Row</h3>
      <div className='parent-box'>
        <button onClick={() => handleClick(1)} className='itemsssss'>
          Grid1
        </button>
        <button onClick={() => handleClick(2)} className='itemsssss'>
          Grid2
        </button>
        <button onClick={() => handleClick(3)} className='itemsssss'>
          Grid3
        </button>
      </div>
      <h3>Two Rows</h3>
      <div className='parent-box'>
        <button onClick={() => handleClick(4)} className='itemsssss'>
          Grid1
        </button>
        <button onClick={() => handleClick(5)} className='itemsssss'>
          Grid2
        </button>
        <button onClick={() => handleClick(6)} className='itemsssss'>
          Grid3
        </button>
      </div>
      <h3>Three Rows</h3>
      <div className='parent-box'>
        <button onClick={() => handleClick(7)} className='itemsssss'>
          Grid1
        </button>
        <button onClick={() => handleClick(8)} className='itemsssss'>
          Grid2
        </button>
        <button onClick={() => handleClick(9)} className='itemsssss'>
          Grid3
        </button>
      </div>
    </div>
  );
};

export default Popup;
