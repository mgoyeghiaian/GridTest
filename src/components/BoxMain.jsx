import React, { useState } from 'react';
import './BoxMain.css';
import { Grid } from '@mui/material';
import Popup from './Popup';
import Grid1 from './Grid/Grid1';
import Grid2 from './Grid/Grid2';
import Grid3 from './Grid/Grid3';
import Grid4 from './Grid/Grid4';
import Grid5 from './Grid/Grid5';
import Grid6 from './Grid/Grid6';
import Grid7 from './Grid/Grid7';
import Grid8 from './Grid/Grid8';
import Grid9 from './Grid/Grid9';
import { Link } from 'react-router-dom';

const BoxMain = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [compNum, setCompNum] = useState('');

  const handleChild = (childData) => {
    setShowGrid(childData);
  };

  const handleRefresh = () => {
    window.location.reload();
  }

  const handleCompNum = (num) => {
    setCompNum(num);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleGridItemClick = (item) => {
    setSelectedItem(item);
    setShowPopup(false);
  };

  const switchComponents = () => {
    switch (compNum) {
      case 1: return <Grid1 />
      case 2: return <Grid2 />
      case 3: return <Grid3 />
      case 4: return <Grid4 />
      case 5: return <Grid5 />
      case 6: return <Grid6 />
      case 7: return <Grid7 />
      case 8: return <Grid8 />
      case 9: return <Grid9 />
      default: return ""
    }
  }


  return (
    <>

      {showGrid ? <div>
        <button onClick={handleRefresh} className='Return-Button'>+ add Items</button>

        {switchComponents()}
      </div> :
        <div className='box-main'>
          <p>Add Items</p>
          <span onClick={handlePopupToggle}>+</span>
          {showPopup && (
            <div className='popup'>
              <Grid container spacing={2}>
                <Popup nummmmm={handleCompNum} onItemClick={handleGridItemClick} showGrid2={handleChild} closepopup={handlePopupToggle} />
              </Grid>
            </div>
          )}
          {selectedItem && <div className="selected-item">{selectedItem}</div>}
        </div>
      }
    </>
  );
};

export default BoxMain;
