import './App.css';
import folder from './assets/folder.png'
import threeDots from './assets/threeDots.png'
import dl from './assets/dl.png'
import del from './assets/delete.png'
import print from './assets/print.png'


import React, { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [DotsMenu, setDotsMenu] = useState(false);
  return (
    <div className="Main">

      <body className="MainRectangle" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                    {/* OPTIONS BUTTON / DOTS BUTTON */}
        {isShown && (<div>
          <img src={threeDots} alt="threeDots" className="MainRectangleThreeDotsButton" onClick={() => setDotsMenu(true)}/>
          {DotsMenu && (<div className="DotsMenu" onMouseLeave={() => setDotsMenu(false)}> 
                            {/* DOWNLOAD */}
                <div className="DotsMenuPurpleBackground"> 
                  <img src={dl} alt="dl" className="DotsMenuDownloadImage"/><div>
                  <p className="DotsMenuPurpleBackgroundText">Download</p></div>
                </div>
                            {/* PRINT */}
                <div className="DotsMenuNoBackground"> 
                  <img src={print} alt="print" className="DotsMenuPrintImage"/><div>
                  <p className="DotsMenuPrintText">Print</p></div>
                </div>
                            {/* DELETE */}
                <div className="DotsMenuNoBackground"> 
                  <img src={del} alt="del" className="DotsMenuDeleteImage"/><div>
                  <p className="DotsMenuDeleteText">Delete</p></div>
                </div>
          </div>)}
        </div>
      )}

                            {/* MAIN RECTANGLE & COMPS */}
        <img src={folder} alt="folder" className="MainRectangleFolderIcon" />
        <p className="MainRectangleTitle">Corporate Bylaws</p>
        <p className="MainRectangleText">An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.</p>
        <div style={{marginTop: 160, }}>
          <div className="MainRectangleButtonBorder">
          <p className="MainRectangleButtonText">View document</p>
          </div>
        </div>
      </body>
        <div className="MainRectangleShadow"></div>
      
      </div>
  );
}

export default App;
