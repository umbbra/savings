import React from 'react';
import Panel from './Panel';



const Panels = ({aim, price, isCong, handleClose}) => {
  return ( 
    <div className="panelsInfo">

      { isCong ? <div className="popup">
      <h1 className="popup__cong">Congratulations!</h1>
      <h3>Finally, you saved money for: {aim}</h3>
      <button className="popup__close" onClick={handleClose}>NEW AIM!</button>
    </div>    :  <Panel aim={aim} price={price}/> }

    </div>
   );
}
 
export default Panels;